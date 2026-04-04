# 非标准 XYZ 切片图源与 GCJ-02 适配实战总结

## 写在前面
这篇笔记是我在 WebGIS 项目里反复踩坑后整理的“可复用版本”。核心目标只有一个：

把不同规则的瓦片地址，统一成我在前端可控的请求流程，稳定加载、可调试、可扩展。

---

## 1. 标准 XYZ 到底是什么

标准 XYZ（Google/OSM 常见）规则：

- 模板：`https://host/{z}/{x}/{y}.png`
- 原点：左上角（西北角）
- 投影：通常是 EPSG:3857（Web Mercator）
- 瓦片尺寸：通常 256x256
- 缩放层级：$z=0,1,2,...$

标准计算（经纬度转瓦片）：

$$
x=\left\lfloor\frac{lon+180}{360}\cdot2^z\right\rfloor
$$

$$
y=\left\lfloor\left(1-\frac{\ln\left(\tan(lat\cdot\pi/180)+\sec(lat\cdot\pi/180)\right)}{\pi}\right)\cdot2^{z-1}\right\rfloor
$$

OpenLayers 标准调用：

```javascript
import XYZ from 'ol/source/XYZ';

const source = new XYZ({
  url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
});
```

---

## 2. 为什么会出现“非标准 XYZ”

常见不是“不能切片”，而是“切片寻址规则不一样”。

最常见差异：

- 路径结构不是 `{z}/{x}/{y}`
- $y$ 轴方向不同（TMS）
- 不用 `z/x/y`，改用编码（QuadKey）
- 坐标系不是 WGS84/WebMercator（如 GCJ-02、BD-09）
- 需要 token、签名、时间戳等动态参数

结论：标准模板不够用时，统一改为 `tileUrlFunction`。

```javascript
const source = new XYZ({
  tileUrlFunction: (tileCoord) => {
    const z = tileCoord[0];
    const x = tileCoord[1];
    const y = tileCoord[2];
    return `https://server/z${z}/x${x}/row${y}.png`;
  }
});
```

---

## 3. 六大类型与应对方案

## 3.1 目录分级型（Directory Structured）

代表：Maps-for-free 地形、部分 ArcGIS Server 静态导出切片。

特征：

- URL 包含 `row{y}` 目录
- 文件名出现 `z_x-y` 组合
- 例如：`.../z14/row9885/14_13393-9885.jpg`

重点：

- 不建议直接用固定模板
- 使用函数手动拼接，避免 `{x}-{y}` 被误处理

示例：

```javascript
new XYZ({
  tileUrlFunction: (tileCoord) => {
    const z = tileCoord[0];
    const x = tileCoord[1];
    const y = tileCoord[2];
    return `https://maps-for-free.com/layer/relief/z${z}/row${y}/${z}_${x}-${y}.jpg`;
  }
});
```

---

## 3.2 TMS 规范型（Y 轴反转）

代表：早期 GeoServer/MapServer 的 TMS 服务。

特征：

- 地图上下颠倒
- 北半球显示到南半球

核心转换：

$$
y_{xyz}=2^z-1-y_{tms}
$$

示例：

```javascript
new XYZ({
  tileUrlFunction: (tileCoord) => {
    const z = tileCoord[0];
    const x = tileCoord[1];
    const yTms = tileCoord[2];
    const yXyz = (1 << z) - 1 - yTms;
    return `https://server/${z}/${x}/${yXyz}.png`;
  }
});
```

---

## 3.3 QuadKey 编码型（Quadtree）

代表：Bing Maps。

特征：

- URL 不使用 `z/x/y`
- 使用字符串编码（如 `0313102`）

示例：

```javascript
function toQuadKey(x, y, z) {
  let qk = '';
  for (let i = z; i > 0; i--) {
    let digit = 0;
    const mask = 1 << (i - 1);
    if ((x & mask) !== 0) digit += 1;
    if ((y & mask) !== 0) digit += 2;
    qk += digit.toString();
  }
  return qk;
}

new XYZ({
  tileUrlFunction: (tileCoord) => {
    const z = tileCoord[0];
    const x = tileCoord[1];
    const y = tileCoord[2];
    const qk = toQuadKey(x, y, z);
    return `https://t0.tiles.virtualearth.net/tiles/a${qk}.jpeg?g=1`;
  }
});
```

---

## 3.4 百度特殊切片（Baidu Scheme）

代表：百度地图底图。

特征：

- 与标准 Web Mercator 网格不兼容
- 常见需要自定义 TileGrid
- x/y 还存在偏移和平移

应对策略：

1. 自定义 `resolutions`
2. 自定义 `origin`
3. 转换 x/y 偏移

注意：百度方案通常不是简单改一个公式就能完成，必须结合你具体 URL 服务和 SDK 规则。

---

## 3.5 动态参数/API 请求型

代表：高德、GeoQ 等部分服务。

特征：

- URL 是 query 参数形式
- 参数顺序、签名、token 可能影响返回

建议：

- 用 `URLSearchParams` 构造请求
- 将 key/token 单独管理
- 必要时加入时间戳防缓存

示例：

```javascript
new XYZ({
  tileUrlFunction: (tileCoord) => {
    const z = tileCoord[0];
    const x = tileCoord[1];
    const y = tileCoord[2];
    const params = new URLSearchParams({
      style: '8',
      x: String(x),
      y: String(y),
      z: String(z)
    });
    return `https://webrd01.is.autonavi.com/appmaptile?${params.toString()}`;
  }
});
```

---

## 3.6 GCJ-02 切片适配（重点）

GCJ-02 不是“路径非标准”，而是“坐标基准不同”。

当 GCJ-02 底图叠加 WGS84 数据时，会出现整体偏移（几十到数百米）。

常见三种做法：

1. 前端矢量实时纠偏
- 将 WGS84 矢量转 GCJ-02 再叠加到 GCJ 底图
- 适合轻量前端场景

2. 服务端重切片纠偏
- 把 GCJ 瓦片重采样为 WGS84 对齐瓦片
- 适合统一对外服务和高一致性场景

3. 全链路统一到 GCJ-02
- 底图、矢量、交互全部采用 GCJ 基准
- 实现简单，但对外共享坐标时要额外说明

实践建议：

- 国内在线底图（高德、腾讯）默认按 GCJ-02 理解
- 若要叠加 GPS/WGS84 数据，必须明确转换链路
- 不要用“平移若干米”替代正规坐标转换

---

## 4. 统一适配范式（推荐）

建议在项目里统一抽象这几件事：

1. 统一输入：`tileCoord=[z,x,rawY]`
2. 统一归一化：`rawY -> y`
3. 统一输出：`buildUrl({z,x,y})`
4. 统一调试：日志 + 网络面板 + 单点 URL 验证

示例伪代码：

```javascript
function normalizeY(z, rawY, mode) {
  if (mode === 'direct') return rawY;
  if (mode === 'invert-tms') return (1 << z) - 1 - rawY;
  if (mode === 'ol-negative') return -rawY - 1;
  return rawY < 0 ? (-rawY - 1) : rawY; // auto
}

function makeTileUrl(tileCoord, mode, formatter) {
  const z = tileCoord[0];
  const x = tileCoord[1];
  const y = normalizeY(z, tileCoord[2], mode);
  return formatter({ z, x, y });
}
```

---

## 5. 调试与验收清单

加载异常时按这个顺序排查：

1. URL 模板是否拼接正确
2. 控制台是否打印了实际 z/x/y
3. Network 中请求是否 200
4. 是否出现上下颠倒（TMS/XYZ 方向问题）
5. 是否出现整体偏移（坐标系问题，尤其 GCJ-02）
6. 单独打开某一张瓦片 URL 是否可访问

建议固定一组“金标准点”用于回归测试（例如 z=14 的一个已知可访问瓦片）。

---

## 6. 我自己的项目经验（可复习）

1. 先让图出来，再谈抽象
- 第一阶段优先让请求通
- 第二阶段统一适配器结构

2. 任何“看起来像公式”的转换，都必须用日志验证
- 不能只凭记忆套公式
- 必须打印 `tileCoord` 和最终 URL

3. 路径格式错了，永远不是“坐标问题”
- 先确保 URL 是服务端真正接受的格式

4. GCJ-02 问题本质是 CRS 统一问题
- 不是“再调一个 y 偏移”就能解决

5. 文档必须和代码一起维护
- 增加图源时，同步更新适配文档和案例

---

## 7. 快速参考

- 标准 XYZ：`/{z}/{x}/{y}`
- TMS 反转：$y=2^z-1-y$
- QuadKey：`(x,y,z)->string`
- 目录分级：建议 `tileUrlFunction` 纯字符串拼接
- 百度：自定义 TileGrid + 偏移
- GCJ-02：优先解决坐标基准一致性

---

## 后续我会继续补充

- 不同服务（高德/腾讯/百度/天地图）与 CRS 对照表
- OpenLayers + Cesium 双栈下的统一适配写法
- 服务端重切片（纠偏）方案的实现笔记
