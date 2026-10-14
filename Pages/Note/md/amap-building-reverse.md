# 高德地图建筑矢量逆向：web_map、PBF 与建筑层

## 说明

本文对应 [amap_building_to_geojson.mjs](../resources/amap-building-reverse/amap_building_to_geojson.mjs)。高德与腾讯、天地图使用完全不同的实时链路：先获取动态版本，再换取短时授权的 PBF 地址，最后解析帧式 gzip/protobuf。

本文仅用于小范围格式研究和兼容性验证。请使用自己的 key，并遵守高德服务条款。

## 1. 运行

```bash
node amap_building_to_geojson.mjs \
  --bbox 108.415669,27.048246,108.433691,27.061264 \
  --zoom 14 \
  --out zhenyuan_amap.geojson
```

也可以用中心点：

```bash
node amap_building_to_geojson.mjs \
  --center 108.425,27.055 \
  --delta 0.008 \
  --zoom 14 \
  --out zhenyuan_amap.geojson
```

这里的 `zoom` 是数据请求级别，不一定等于网页视觉级别。页面显示 17 级时，建筑 PBF 可能仍来自较低数据级别。

## 2. 实时请求链

在高德 3D 页面 Network 中可看到三步：

```text
GET  https://jsapi.amap.com/web/init?key=...
POST https://jsapi.amap.com/web_map/get_tile?key=...
GET  get_tile 返回的 tile_urls
```

第一步取得动态 tile 版本；第二步把瓦片列表换成带授权参数的地址；第三步才下载真正的建筑数据。授权地址会过期，不能长期硬编码。

`get_tile` 的请求包含 `version`、`pbf_version=v2`、`data_source=1`、`multi_lang=0` 和 `tiles` 数组。每个 tile 项包括 id、type 和 contain_range。遇到 `OVERSEA_FORBIDDEN` 时脚本会切换 `access_oversea` 后重试。

演示 key 往往受域名白名单和 Referer 约束。生产使用应申请自己的 key，或在同源后端代理。

## 3. 外层帧和 protobuf

高德返回的不是裸 protobuf，而是连续帧：

```text
4 字节大端长度
→ gzip 字节
→ protobuf message
```

程序逐帧读取长度，调用 Node 内置 `zlib.gunzipSync()`，然后使用脚本内的最小 protobuf reader。没有引入第三方依赖；reader 实现了 varint、zigzag、length-delimited、packed 数组和嵌套 message。

高德消息可以抽象为：

```text
Result
└── Tile
    └── Layer
        └── BuildingLayer
            └── BuildingSameStyle
                └── ShapeFeature
```

建筑层的识别条件是 `layer.type === 3`，建筑记录位于 `buildings/items/shapeFeatures`。

## 4. 建筑字段

常见字段如下：

| 字段 | 含义 |
|---|---|
| `polygon` | 打包的建筑底面 |
| `mainBuildingHeight` | 主建筑高度，米 |
| `nameZh` | 中文名称 |
| `nameEng` | 英文名称 |
| `nameMulti` | 多语言名称 |
| `uid` | 服务端对象标识 |

脚本优先输出 `nameZh[0].name`；没有名称时不伪造空白名称。高度和名称都是服务端可选属性。

## 5. 坐标还原

每个建筑有自己的 `resolution`。坐标数组是“首点绝对、后续点差分”的整数流：

```text
首点 = (x, y)
后续点 = 前一点 + zigzag(dx, dy)
```

`buildingPath()` 先做差分累加，再依据高德 bundle 中的 tileInnerCoord2LngLat 逻辑换成 GCJ-02，最终执行 GCJ-02 到 WGS-84 转换，输出 `[longitude, latitude]`。

高德的瓦片行号也不是腾讯 TMS 规则，不能复用腾讯的 y 翻转。

## 6. 跨瓦片处理

高德建筑通常以完整楼块返回。相邻瓦片可能重复同一个楼块，但一般不是天地图那种大量被裁切的 `elemid` 片段。因此当前脚本按“固定精度后的完整坐标序列 + height_m”去重。

不要把这种去重误称为 GIS Dissolve：没有稳定的同楼 ID 时，盲目 Union 可能把相邻的不同建筑错误合并。如果某一版本改为返回裁切片段，才需要结合 uid、全局瓦片坐标和 Polygon Union 重新设计。

## 7. 批量、失败和输出

脚本按批次换取最多若干瓦片 URL，再逐个下载、解帧、解压和解析，批次间限速。网络失败、gzip 失败和 protobuf 失败应当记录为失败，不能伪装成“空瓦片成功”。

输出使用标准 CRS 对象：

```json
"crs": {
  "type": "name",
  "properties": {
    "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
  }
}
```

不要使用 `"crs": "WGS84"` 这种非标准字符串。

## 8. 高德流程总结

```text
web/init
→ 动态 tileVersion
→ web_map/get_tile
→ 短时 tile_urls
→ 帧长解析
→ gzip 解压
→ protobuf 解码
→ layer.type=3
→ 差分坐标和分辨率换算
→ GCJ-02 转 WGS-84
→ 几何+高度去重
→ GeoJSON
```

高德的核心难点是动态授权、外层帧和嵌套 PBF；它不能直接套用腾讯的 base64 解码，也不能直接套用天地图的 CE/`elemid` 拓扑流程。
