# 腾讯地图建筑矢量逆向：从自定义瓦片响应到 GeoJSON

> **历史子集篇**：本文的建筑提取（端点探测、txDecode 解码链、TMS 翻转、GCJ-02 换算、
> deltaDecode、196619 建筑识别）已完全并入《腾讯地图矢量瓦片全量逆向》最终程序
> `tencent_vector_fetch.mjs`（同输入陆家嘴 z16 框 270→270 栋，几何与楼高 270/270 一致），
> 本文保留作过程记录，新工作请走全量篇与最终程序。

## 说明

本文记录腾讯地图建筑白模数据的实时分析过程，配套脚本为：

<p>
  <a href="../resources/tencent-building-reverse/tencent_building_to_geojson.mjs" download style="font-weight: bold; font-size: 1.1em;">📥 下载 tencent_building_to_geojson.mjs</a>
</p>

这不是高德或天地图的通用教程。腾讯使用独立的接口、编码和坐标流程，不能把本文的字段解释直接套到另外两家地图。

请只用于小范围学习、格式研究和兼容性验证，使用自己的密钥并遵守腾讯位置服务条款。

## 1. 最终可以得到什么

脚本输入 WGS-84 范围，输出 WGS-84 GeoJSON：

```bash
node tencent_building_to_geojson.mjs \
  --bbox 108.415669,27.048246,108.433691,27.061264 \
  --zoom 18 \
  --out zhenyuan_tencent.geojson
```

每条建筑要素主要包含：

```json
{
  "type": "Feature",
  "properties": {
    "height_m": 12,
    "tile": "18_213618_148627"
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": []
  }
}
```

腾讯数据通常没有稳定的建筑 `elemid`，因此脚本不能像天地图那样按建筑 ID 跨瓦片 Dissolve。腾讯的主要去重依据是几何坐标和高度。

## 2. 从网页网络请求开始

使用浏览器打开腾讯坐标拾取或 3D 地图页面，按 F12，进入 Network，过滤 `tile`，放大到 18 级。典型请求类似：

```text
https://rt3.map.gtimg.com/tile?styleid=0&
tiles=18_213618_148627,18_213619_148627,...&
version=2268&building=1&style=100&compress=1&mapType=hybrid
```

关键参数：

- `building=1`：请求建筑白模；
- `tiles`：一次请求多个瓦片；
- `version`：前端配置中的数据版本；
- `compress=1`：返回压缩/混淆数据；
- `style=100`、`mapType=hybrid`：与演示页面请求保持一致。

真正有用的入口不是普通栅格图片，而是返回 JSON 的 `tile` 接口。

## 3. 腾讯的瓦片编号与坐标

腾讯接口使用 TMS 风格的 y 编号。程序内部先按标准 Web Mercator XYZ 计算：

```text
x = floor((lng + 180) / 360 * 2^z)
y = floor((1 - log(tan(lat) + sec(lat)) / pi) / 2 * 2^z)
```

再转换为腾讯所需的 TMS y：

```text
y_tms = 2^z - 1 - y_xyz
```

腾讯建筑瓦片按 GCJ-02 组织。程序的输入和输出约定为 WGS-84，因此流程是：

```text
输入 WGS-84
→ WGS-84 转 GCJ-02
→ 计算腾讯瓦片
→ 请求和解析
→ GCJ-02 转 WGS-84
→ 输出 GeoJSON
```

如果漏掉 GCJ-02 转换，数据会出现数百米级偏移；如果漏掉 TMS y 翻转，通常会请求到错误区域。

## 4. 响应结构

响应通常是：

```json
{
  "datas": [
    { "data": "J4eqHLWdTu3jwlNyjXQX..." },
    { "data": "..." }
  ]
}
```

`datas` 的顺序与请求的 `tiles` 顺序对应。每个 `data` 不是明文 JSON，而是：

```text
自定义 base64
→ 字节变换
→ UTF-8 文本
→ JSON
```

解码后可以看到：

```json
{
  "ret": 0,
  "features": [
    [196619, [33,227,27,7,-3,9,-26,-7], 4, ""]
  ]
}
```

## 5. 解码过程

腾讯前端 bundle 中的建筑解码函数可以还原为四步：

1. 去掉 base64 尾部填充；
2. 将 base64 解为字节；
3. 每两个字节执行旋转和异或变换；
4. 按 UTF-8 拼成 JSON 文本。

脚本中的 `txDecode()` 和 `b64()` 是这条链路的核心。解码结束后，以最后一个 `}` 截断填充内容，再交给 `JSON.parse()`。

这里不能把响应当作标准 MVT、PBF 或普通 gzip 处理。腾讯的建筑接口是自己的 JSON 包装和字节混淆。

## 6. 如何识别建筑

`features` 中混有道路、标注和其他图形。腾讯前端源码暴露了建筑图层 ID：

```js
const BUILDING_ID = 196619;
```

只有第一项等于 `196619` 的记录才作为建筑处理：

```text
[图层编号, 几何数组, 高度, 名称]
```

其中：

- 几何数组是瓦片像素中的差分坐标；
- 第三个元素是建筑高度，单位为米；
- 名称字段可能为空；
- 不同版本可能改变字段数量或版本号。

差分坐标的还原方式是：

```text
第一个点：绝对坐标
后续点：相对于前一点的 dx、dy
```

例如：

```text
[33,227,27,7,-3,9,-26,-7]
```

还原后是：

```text
(33,227)
→ (60,234)
→ (57,243)
→ (31,236)
```

## 7. 为什么腾讯主要做去重，而不是建筑 Union

腾讯数据的一个重要特点是：同一个楼块可能完整出现在相邻瓦片中，而不是被切成两个严格相接的面。脚本因此采用：

```text
几何坐标序列 + height_m
```

生成去重键：

```text
坐标点按固定精度格式化
|
height_m
```

完全相同的楼块只保留一次。

这和天地图不同。天地图常见的是同一 `elemid` 被裁成多个片段，需要按属性分组后做拓扑合并；腾讯没有稳定的同楼 ID，盲目 Union 反而可能把不同楼块合并。

## 8. 请求、重试和限速

程序按 2×2 瓦片分组，一次最多请求四块，并使用：

- `Referer: https://lbs.qq.com/getPoint/`
- 浏览器 User-Agent；
- 失败重试；
- 批次之间等待；
- 解析失败时跳过当前瓦片而不是伪造成功结果。

限速不是装饰。过快请求可能得到空响应、403 或不完整数据。

## 9. 坐标输出和 GeoJSON

脚本最终输出经度、纬度顺序：

```json
[longitude, latitude]
```

这是 GeoJSON 的常用坐标顺序。腾讯脚本输出的是普通 `FeatureCollection`，如果下游 Cesium 需要 CRS 字典，应使用标准对象而不是字符串：

```json
"crs": {
  "type": "name",
  "properties": {
    "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
  }
}
```

## 10. 腾讯方案的局限

1. 没有可靠的建筑 ID，不能按 `elemid` 识别同一栋楼；
2. 版本号可能变化，接口参数和建筑图层 ID 可能失效；
3. 高度是服务端属性，不代表真实楼高测量值；
4. 数据可能包含瓦片外 buffer；
5. 同一楼块的重复判断依赖坐标精度；
6. 大范围请求会增加限流和服务条款风险。

## 11. 腾讯流程总结

```text
网页 Network
→ tile 请求
→ TMS y 计算
→ WGS-84/GCJ-02 转换
→ base64 与字节混淆解码
→ 识别 196619 建筑记录
→ 差分坐标还原
→ 像素转 GCJ-02
→ GCJ-02 转 WGS-84
→ 几何+高度去重
→ GeoJSON
```

腾讯的难点在自定义混淆和坐标体系，不在复杂的矢量拓扑。
