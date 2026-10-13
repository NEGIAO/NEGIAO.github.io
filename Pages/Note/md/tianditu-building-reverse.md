# 天地图建筑矢量逆向：私有 VTS、XOR 与跨瓦片拓扑

## 说明

本文对应 [tdt_building_to_geojson.mjs](../resources/tdt-building-reverse/tdt_building_to_geojson.mjs)。天地图不是腾讯的混淆 JSON，也不是高德的标准化建筑 PBF，而是带私有字段编号、前导记录、固定位置 XOR 和多图层的 VTS。

天地图的真正难点还在于同一建筑会被多个瓦片分别返回。`layer=CE` 且 `elemid` 相同的记录代表同一建筑，但各片段可能带 buffer、重叠或有微小坐标误差。因此必须同时处理数据完整性和拓扑融合。

本文只用于小范围格式研究。请使用自己的令牌并遵守天地图服务条款。

## 1. 请求和运行

```bash
node tdt_building_to_geojson.mjs \
  --bbox 114.3006,34.8168,114.3068,34.8207 \
  --zoom 18 \
  --out heda_tdt_z18.geojson
```

接口形式：

```text
https://tile{(x+y)%3}.tianditu.gov.cn/vts?
  t=vt&pk=<pkEncode(x,y,z)&tk=<token>&v=1.0
```

请求通常带 `Referer: https://map.tianditu.gov.cn/` 和浏览器 User-Agent。`pk` 是网页 bundle 中的编码结果，不是简单的 `x_y_z`。

z15～z18 不是同一数据的简单缩放。各级别可能使用不同 LOD、属性和源数据；z18 在个别区域出现源数据缺失时，算法不能凭空补回建筑。

## 2. VTS 分层

响应前 5 个字节是前导部分，主体中包含标准图层记录。实测图层包括：

```text
CE     建筑面
respt  楼号/标注
CK     地表覆盖
AA     线要素
```

天地图的私有图层字段错位如下：

| 字段 | 含义 |
|---|---|
| f1 | features |
| f2 | layer name |
| f3 | values |
| f4 | keys |
| f5 | extent，通常 4096 |
| f15 | version |

程序扫描 `0x1a`，再用严格的 protobuf 消费检查确认 `f5/f15`，避免把任意字节误判成图层。不能直接照搬标准 MVT 的字段表。

## 3. 前导数据和 XOR

天地图的前导 feature 容器存在局部 XOR；另有实测固定位置取反：

```js
if (raw.length > 99) raw[99] ^= 0xff;
```

缺少这一步时，protobuf 可能仍“能解析”，但 tags 会错位，表现为 CE 数量下降、属性异常和建筑被静默跳过。固定位置 XOR 是当前版本样本逆向结果，不是通用 protobuf 规则，服务端升级后必须重新验证。

脚本不依赖第三方包，内置 reader 支持 varint、wire type、length-delimited、packed tags 和嵌套 message。

## 4. CE 建筑解析

建筑条件是：

```text
layer.name === "CE"
feature.type === 2
```

常见属性：

```text
elemid、A6、h、floor
```

`elemid` 是跨瓦片融合的关键；`h` 和 `floor` 是可选属性，不能因为缺高度就删掉建筑。

几何类型实测为：

```text
1 = LineString
2 = Polygon
4 = Point
```

几何命令是整数流：

```text
MoveTo = 2
LineTo = 3
ClosePath = 7
```

参数采用 zigzag 和差分累加：

```text
x += zigzag(dx)
y += zigzag(dy)
```

部分 geometry 是多层 `f1{f1{...}}` 嵌套，所以实现使用递归 `findCommands()`。部分合法 CE 没有 ClosePath，不能强制以 ClosePath 作为保留条件；输出阶段再闭合首尾点。

## 5. respt 与建筑名称

建筑名称可能不在 CE，而在 `respt` 标注图层。流程是：

```text
读取 respt
→ 取 elemid 和文字
→ 建立 elemid → name
→ 挂接到 CE
→ 输出 properties.name
```

当前兼容字段：

```text
lzh、name、label、title、Z5
```

空字符串和 Unicode 替换字符会被过滤。没有匹配的 `respt` 时，不伪造名称。

## 6. 为什么相邻瓦片会重叠

CE 坐标实测可能落在 `[-82,4178]`，而核心 extent 是 `[0,4096]`。这说明瓦片有约 82 单位 buffer：

```text
瓦片 A 的右侧 buffer
与瓦片 B 的左侧 buffer
可能同时包含同一建筑
```

因此逐瓦片转换后直接拼接，必然可能出现公共边、重叠面、缝隙或同一 `elemid` 的四个 Polygon。把片段简单包装为 MultiPolygon 并没有完成融合。

## 7. 无第三方包的拓扑处理

当前流程分为“快速保留”和“接缝拓扑”两条路径：

```text
CE 原始片段
→ 裁剪到本瓦片核心 0～4096
→ 按 elemid 收集片段
→ 判断是否跨瓦片且接触边界
   ├─ 否：直接保留裁剪后的几何
   └─ 是：转全局整数坐标
          → 量化节点
          → 边相交拆分
          → 采样判断 Union 内外
          → 提取外边界
          → 追踪闭合环
→ 转 WGS-84
```

大范围任务不会对所有建筑都执行 Union。程序先按 `elemid` 收集片段，并记录片段来自哪些瓦片以及裁剪后是否接触瓦片边界：

```text
只有 parts > 1
且来自多个瓦片
且至少一个片段接触核心边界
→ 执行 Union
```

单瓦片建筑、没有接触瓦片边界的建筑以及普通内部要素直接保留，避免把 10 万栋建筑全部送入昂贵的边相交计算。当前接边判定使用 2 个瓦片坐标单位的窄带，不是按经纬度做模糊判断。

### 7.1 核心范围裁剪

局部坐标先裁剪到：

```text
0 <= x <= 4096
0 <= y <= 4096
```

这一步不是删除建筑，而是避免把 buffer 的重复部分直接作为最终边界。

### 7.2 全局坐标和量化

局部坐标不能跨瓦片比较，转换为：

```js
globalX = tileX * 4096 + localX;
globalY = tileY * 4096 + localY;
```

裁剪会产生亚像素误差，当前实现用 `TILE_SNAP = 1` 量化全局节点，并清理连续重复点。这样相邻瓦片的公共节点能够匹配。

### 7.3 按 elemid Dissolve

只有以下条件相同才进入同一 `elemid` 候选组：

```text
layer = CE
elemid 相同
```

高度和楼层不能作为分组键，否则同一栋楼的两个片段会被错误拆开。

需要注意，进入候选组不等于一定执行 Union。程序还会检查该组是否包含多个瓦片、是否包含多个片段，以及裁剪后的环是否触碰 `x=0`、`x=4096`、`y=0` 或 `y=4096` 附近的接缝窄带。只有这些条件同时满足时，才调用 Union。

### 7.4 Union 核心

简化伪代码：

```text
edges = splitAtAllIntersections(rings)

for edge in edges:
    left  = pointInUnion(leftSample(edge))
    right = pointInUnion(rightSample(edge))
    if left != right:
        keep edge in inside direction

rings = traceClosedRings(keptEdges)
```

也就是说，算法不是简单删除反向公共边，而是先拆分所有相交边，再判断边的两侧哪一侧属于同一组 Union，最后只保留外边界。

### 7.5 失败回退

自包含算法无法覆盖成熟 GIS 内核的全部退化情况。若结果为空、环未闭合或明显异常，程序回退到裁剪后的原始片段，而不是丢弃建筑。一个 `elemid` 产生 MultiPolygon 也不一定是错误，因为它可能确实由多个不相连部分组成。

### 7.6 残余重叠检查的空间索引

Union 之后的重叠检查也不能对所有要素做全局两两比较。旧的做法在 `n` 个建筑上是 O(n²)，大范围数据会非常慢。当前实现把建筑外包围盒放入大小为 `0.0002°` 的固定经纬度网格，只对落入同一网格的候选对计算相交面积，并用 pair key 去除多个网格带来的重复比较。

这一步只负责生成 `topo_review` 提示，不修改几何；因此即使跳过没有空间邻近关系的要素，也不会改变输出边界。它是质量检查索引，不是第二次全局 Union。

## 8. 常见问题

### 建筑数量减少

检查固定位置 XOR、递归 geometry、ClosePath 要求、z/x/y 和“缺高度即删除”等条件。特别要区分源数据缺失和解析器丢数据。

### 同一建筑仍有四个片段

检查是否做了核心裁剪、全局坐标、`TILE_SNAP=1`、节点容差和真正的 Union。仅输出 MultiPolygon 不会消除公共边。

### 大范围处理速度很慢

确认是否使用了最新脚本。当前版本只对跨瓦片接边候选执行 Union，重叠检查使用空间网格；如果仍然很慢，应检查是否存在大量超大面、单个 `elemid` 包含异常多片段，或某个空间网格聚集了过多建筑。

### 出现大片重叠

通常是 buffer 未裁剪。应在局部整数坐标阶段处理，不应等转换成经纬度后凭视觉阈值删除。

### 名称为空

检查是否有 `respt`、是否能匹配 `elemid`，以及名称键是否为 `lzh` 以外的兼容字段。

## 9. GeoJSON 和 CRS

输出坐标顺序是 `[经度, 纬度]`。当前标准 CRS 写法：

```json
"crs": {
  "type": "name",
  "properties": {
    "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
  }
}
```

不要输出 `"crs": "WGS84"`；这种字符串形式不是标准 GeoJSON CRS 对象，也不利于 ArcGIS/Cesium 侧识别。

典型属性：

```json
{
  "elemid": "41000002088680",
  "height_m": 18,
  "floors": 6,
  "name": "某号楼"
}
```

## 10. 与腾讯、高德的差异

| 项目 | 腾讯 | 高德 | 天地图 |
|---|---|---|---|
| 入口 | tile JSON | init/get_tile/PBF | vts 私有 VTS |
| 编码 | base64/字节混淆 | 帧长/gzip/protobuf | 私有字段/XOR/protobuf |
| 建筑识别 | 固定 ID 196619 | layer.type=3 | CE + type=2 |
| 同楼标识 | 通常缺失 | uid 依版本 | elemid |
| 名称 | 较少 | nameZh | respt 挂接 |
| 跨瓦片 | 多为完整楼块去重 | 多为完整楼块去重 | buffer/片段需裁剪和 Union |

## 11. 天地图流程总结

```text
VTS 请求
→ pkEncode
→ 前导/XOR 恢复
→ 严格识别标准图层
→ 私有字段解析
→ 递归解析几何
→ CE 属性
→ respt 名称
→ 核心范围裁剪
→ 按 elemid 筛选跨瓦片接缝候选
→ 候选组转全局整数坐标
→ 仅对接缝候选执行 Union
→ 其他建筑直接保留
→ 空间网格检查残余重叠
→ 异常回退
→ WGS-84 GeoJSON
```

天地图最难的不是“读出 protobuf”，而是同时保证不漏 CE、不丢名称、不把 buffer 当边界、不把不同建筑误融合，并在 Union 失败时保留完整源数据。对于 z15 级别的大范围任务，性能关键是让绝大多数内部建筑走快速路径，只把真正可能跨瓦片接缝的建筑交给几何 Union。
