# GIS 开发必看：Referer 与 Origin 跨域请求头详解

在 WebGIS 开发中，瓦片加载失败、跨域报错、接口 403 权限问题，绝大多数都和 `Referer` 与 `Origin` 这两个请求头有关。本文结合你抓包的 Ships66 瓦片请求，把它们讲透。

---

## 1. 什么是 Referer？

`Referer` 是 HTTP 请求头中的一个字段，全称是 `Referer`，用于**告诉服务器，这个请求是从哪个页面发起的**。

例如，你的网站 `https://your-gis.com/map` 中加载了一张来自 `https://g3.ships66.com/...png` 的瓦片：
- 浏览器会自动带上 `Referer: https://your-gis.com/map`
- 服务器看到这个头，就能知道“谁在请求我的资源”

### 常见用途
- **防盗链**：服务器只允许来自特定域名的请求访问资源，其他域名直接返回 403
- **流量统计**：分析用户是从哪个页面跳转过来的
- **风控拦截**：识别异常来源的爬虫或盗用请求

### 为什么你抓包的 Ships66 请求没有 Referer？
奥维互动地图这类桌面客户端，是通过**系统网络库直接发起请求**，不是通过浏览器，所以**根本不会生成 Referer 请求头**。
- 服务器视角：这是一个“匿名”请求，没有来源页面
- 因此，这类瓦片服务对客户端请求几乎不做防盗链限制

---

## 2. 什么是 Origin？

`Origin` 是 HTML5 新增的请求头，比 `Referer` 更“干净”，只包含协议、域名和端口，不包含具体路径。

例如，同样是你的 `https://your-gis.com/map` 页面请求资源：
- `Origin: https://your-gis.com`
- 服务器看到的是请求的“来源域”，而不是具体页面

### 它和 Referer 的区别
| 特性 | Referer | Origin |
| :--- | :--- | :--- |
| **包含内容** | 完整 URL（含路径） | 仅协议+域名+端口 |
| **发送时机** | 所有请求都会发送 | 仅跨域请求会发送 |
| **用途** | 防盗链、流量统计 | 跨域资源共享（CORS）校验 |

在 WebGIS 中，当你在 `localhost:8080` 加载 `g3.ships66.com` 的瓦片时，浏览器会发送 `Origin: http://localhost:8080`，服务器通过配置 CORS 白名单来决定是否允许访问。

---

## 3. 为什么前端直接请求地图 API 会翻车？

### 场景1：防盗链拦截（403 Forbidden）
很多地图服务商（高德、百度、部分商用瓦片）会配置防盗链规则：
- 只允许 `*.amap.com` 或指定域名的请求
- 你在自己的前端项目中直接请求，浏览器会带上你的 `Referer`，服务器直接拦截

### 场景2：跨域限制（CORS 错误）
即使服务器不做防盗链，浏览器也会执行同源策略：
- 如果瓦片服务器没有配置你的域名到 CORS 白名单
- 前端加载瓦片时，会触发跨域报错，导致瓦片无法加载

---

## 4. 后端代理：彻底绕过 Referer/Origin 限制

这就是你之前用奥维 Key 做后端代理的核心优势。当你通过后端服务器请求瓦片时：
- **后端不会自动生成 Referer/Origin 请求头**
- 服务器视角：和奥维客户端一样，是匿名请求
- 前端请求你的后端接口，不会直接触发地图服务商的风控

### 代理请求示例（Python httpx）
```python
import httpx

async def get_ships66_tile(z, x, y):
    url = f"https://g3.ships66.com/maps/one/{z}/{x}/{y}.png"
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3904.87 Safari/537.36"
        # 注意：这里没有手动添加 Referer/Origin
    }
    async with httpx.AsyncClient() as client:
        resp = await client.get(url, headers=headers)
        return resp.content