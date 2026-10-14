# 高德矢量瓦片全量逆向：五层通用结构、数据字典与最终程序

## 说明

本文是高德地图 JS API 矢量瓦片（web_map pbf）逆向的总纲与唯一最终版：**一个瓦片里五个图层
（poi / road / region / building / transit）各是什么几何、带哪些属性、怎么解、坐标是什么、
用什么程序一键取数**，以及已验证的结论与置信度。

与三篇的关系：《高德建筑矢量逆向》（单 building 管线）是本文的子集历史篇，
其坐标与几何结论已并入最终程序并逐环比对一致（同一瓦片 945 个建筑环，0 差异）；
此后新工作一律走本文最终程序。

最终程序（单文件独立，抓取链＋五层解析＋坐标转换＋GeoJSON 输出＋自检全收敛）：

<p>
  <a href="../resources/amap-full-reverse/amap_vector_fetch.mjs" download style="font-weight: bold; font-size: 1.1em;">📥 下载 amap_vector_fetch.mjs</a>
</p>

只用于小范围格式研究。请使用自己申请的高德 key（内置 demo key 仅供格式验证），
遵守高德服务条款。不要大规模批量抓取。

已定论（不再翻案，细节见正文）：

- 容器：4 字节大端帧长 + gzip + protobuf；`Result{tiles} → Tile{z,x,y,layers} → Layer{z,x,y,type,d}`。
- 五个图层由 `Layer.type` 分发：0=poi，1=road，2=region，3=building，4=transit。
- **解码坐标即 GCJ-02**（与高德官方 POI 锚点 0.2m 级一致）；输出按既有标准算法
  `gcj02ToWgs84` 转 WGS84（与 WebGIS-Dev `crs/coordTransform.js` 数值一致，不再改动）。
- packed 语义：外层 length 即边界，**无内层长度前缀**；线/面走 zigzag 差分流，
  点的 pos 走普通 varint 成对 (dx,dy)。
- Layer 头自带 z/x/y 是 **z15 子瓦片号**（z14 瓦片内 building/poi 各拆 4 个子瓦片），
  坐标换算必须用 layer 自己的 z/x/y（缺失回退 tile 号）。

## 1. 最终程序用法（范围＋图层选项→干净 GeoJSON）

```bash
# 五层全量（自动请求 type=2 与 type=1 两个数据变体）
node amap_vector_fetch.mjs --bbox 121.4700,31.2280,121.4730,31.2310 --zoom 14 \
  --layers all --outdir ./out

# 只取建筑（会自动切到 type=1 变体）
node amap_vector_fetch.mjs --bbox 121.4700,31.2280,121.4730,31.2310 --zoom 14 --layers building --outdir ./out

# 中心点+半径式快捷参数（--delta 默认 0.004）
node amap_vector_fetch.mjs --center 121.4707,31.2287 --delta 0.006 --zoom 14 --layers poi,road --outdir ./out

# 自检（坐标/编解码 22 项不变量，不过不发版）
node amap_vector_fetch.mjs --selftest
```

参数：`--bbox`（WGS84）/`--center`+`--delta` 二选一；`--zoom` 仅 12/14（数据只存在于这两级）；
`--layers` 逗号分隔子集或 all；`region` 会自动展开为 9 个子类文件
（region_water/green/parcel/builtup/harbor/airport/top/other/line），也可单取如 `--layers region_water`；`--key` 自带高德 key；`--delay` 请求间隔（默认 400ms）；
`--max-tiles` 防呆上限（默认 200）。bbox 角点会先 WGS84→GCJ02 再算瓦片号（瓦片编号在 GCJ02 空间）。

输出：`{outdir}/` 下按层各一个 `<layer>.geojson`（WGS84，去重后）+ `run_info.json`
（瓦片清单、变体、失败原因）。单个瓦片实测（type=1+type=2 各一块）：
building 945 / poi 6197 / road 1878 / region 拆 9 类 / transit 51 要素。

## 2. 请求链与容器结构（全层共用）

### 2.1 抓取链

1. `GET https://jsapi.amap.com/web/init?key=<key>` → 取 `tile` 版本号。
2. `POST https://webapi.amap.com/web_map/get_tile`（form 编码），关键参数：
   `version=<tileVersion>`、`pbf_version=v2`、`access_oversea=0`、`data_source=1`、
   `multi_lang=0`、`tiles=[{id:"x_y_z", type, contain_range:2}]`，一次最多 8 块。
3. 响应给出带 auth_key 的 pbf URL，`GET` 下载。

数据变体（`type` 字段决定内容，服务端两种管线）：

| type | 路径特征 | 图层 | 备注 |
|---|---|---|---|
| 2 | poi_region_road_transit | transit, road, region, **poi** | 有 POI，道路带名称 |
| 1 | building_region_road_transit | transit, road, region, **building** | 有建筑，道路大多无名 |

即：**POI 与建筑不在同一变体里**，想要全量必须两个 type 都请求（最终程序已自动）。

### 2.2 pbf 容器

每个 pbf 响应 = 若干 `[4 字节大端帧长][gzip 数据]` 帧拼接；gunzip 后是 protobuf：

```
Result  { f1: Tile[] }                    // f2=version, f3=status
Tile    { f1:z, f2:x, f3:y, f4:Layer[] }
Layer   { f1:z, f2:x, f3:y, f4:type, f5:d(bytes) }
```

`Layer.type` 决定 `d` 的解释方式（下表），`d` 内是各层私有 schema：

| type | 层名 | 容器形态 |
|---|---|---|
| 0 | poi | `SameStyle(mainKey,subKey,resolution)[]` + Pii/tile_region |
| 1 | road | 同上，item = RoadLineMulti |
| 2 | region | `polygons[]` + `lines[]` 两组 SameStyle |
| 3 | building | `SameStyle(mainKey,subKey,resolution)[]` |
| 4 | transit | `lines[] / points[] / polygons[]` 三组 SameStyle |

### 2.3 SameStyle 分组与几何编码（跨层统一）

每个 SameStyle 组：`f1=mainKey`（分类主码，可缺省）、`f2=subKey`（子分类码，默认 1）、
`f3=resolution`（瓦片内网格精度，默认 12）、`f4=items[]`。
item 三种包装：单 feature（region）、`*Multi` 包装（带 minZoom/maxZoom/drawOrder/rank）。

几何字段的 packed 语义（曾在此栽过：误以为有内层长度前缀，导致 POI 只剩单点、建筑多边形被截断）：

- 线/面（`IA` 字段）：**zigzag svarint 裸流**，首点绝对、其后逐点累加；外层 length 即结束边界。
- 点的 `pos`（`tw` 字段）：**普通 varint 裸流**，按 (dx, dy) 成对差分累加。
- 反序列化后的整数是瓦片内网格坐标，不是经纬度，必须按 §2.4 换算。

### 2.4 层内网格 → GCJ-02 坐标

`inner2lnglat` 同源移植自 bundle `tileInnerCoord2LngLat`：

```
wgsCoordGrid(z+res) = [2·e, 2·q]，e=round(d2c(180)/2^(33-z-res))，q 同（90°）
tileSW  = [-wx/2 + x·wx/2^z, wh/2 - (y+1)·wh/2^z]
inner   = (ix+sw)·2^(33-res-z)，再 c2d(c)=c·180/2^31
```

要点：

- **必须用 layer 头的 z/x/y**（z15 子瓦片号）；缺失才回退 Tile 号。
- `resolution` 决定网格密度：building=18，poi/road/region/transit=12（少量 13）。
  用错 resolution 坐标会差之千里。
- 换算结果即 **GCJ-02**：上海博物馆 POI 解码值 (121.475481,31.228231) 与高德官方
  POI 锚点差 0.2m，定论。
- 输出 WGS84 用既有标准 `gcj02ToWgs84`（与旧建筑管线、WebGIS-Dev 逐位一致，
  历史手抄错误已修复并加了金标准比对自检，勿再改写法）。

## 3. 已确认图层清单与实测规模

人民广场一带（z14 扇区 25+ 瓦聚合，type=2 与 type=1 都取）实测：

| 层 | type | 要素数 | 几何 | 名称覆盖 | 特性一句话 |
|---|---|---|---|---|---|
| poi | 0 | 16379 | Point | 16202/16379 | subKey 分类，rti 即高德 POI ID |
| road | 1 | 11328 | LineString | 281/11328 | mainKey 是道路等级，只有干线才有名 |
| region | 2 | 2491+474线 | Polygon/Line | 0 | 拓扑叠放面族，按子类拆层（§4.3） |
| building | 3 | 5623 | Polygon | 0/5623 | 全带高度，bz 是少数建筑才有 ID |
| transit | 4 | 162 | 线52/点82/面28 | 大多数 | 地铁线、站点、场站 |

跨瓦接缝：同 z14 扇区内 layer 自带 z15 子瓦片号（如 27440/27441、10698/10699），
同一建筑跨子瓦片边界会出现相邻两半；最终程序按几何全坐标去重（同 key 去重），
未做 Union（与腾讯/高德建筑篇一致的最小处理）。

## 4. 逐图层属性详解（数据字典）

以下样本量：人民广场 z14 多瓦聚合。输出 GeoJSON 的 properties 字段名与下表一致。

### 4.1 poi（type=0）

字段：`subKey`（必有）、`mainKey`（多数缺省）、`rti`（= 高德 POI ID）、`uid`（瓦片内自增）、
`name`（nameZh→nameLoc 回退）、`minZoom/maxZoom`、`rank`、`drawOrder`、`resolution`。

- `mainKey` 只在大类上出现（全部 16379 条中仅 378 条非空）：
  10001=公交站/高架出入口、10002=水系点（如黄浦江）、10007=地标（城隍庙、上海中心）。
- `subKey` 是真正的分类码，实测 704 种，Top 分布（次数/样例）：

| subKey | n | 样例 |
|---|---|---|
| 1249 | 3493 | 东楼 / 2号 / 西楼（楼栋号） |
| 1237 | 1551 | 东南门 / 西2门（门） |
| 1421 | 619 | 上海宏泰房地产有限公司（公司） |
| 1263 | 559 | 重新小区 / 振华大楼（小区） |
| 1262 | 289 | 上海数据大厦 / 金陵大厦（商务楼宇） |
| 79 | 273 | 南京西路公寓（公寓） |
| 1239 | 267 | 出入口 / 入口 |
| 1374 | 231 | 停车场 / 地下停车场 |
| 1210 | 231 | 上海市发改委信息中心（政府机构） |
| 854 | 216 | 公园公共厕所 / 女洗手间（厕所） |
| 358 | 209 | 瑞幸咖啡 / Manner（茶饮咖啡） |
| 96 | 168 | 野天鹅酒家 / 恒悦烧腊（餐饮） |
| 1373 | 169 | 卡菱停车场 |
| 555 | 92 | 全家 / 罗森（便利店） |
| 1372 | 115 | 路侧停车位 |
| 1056 | 112 | 跳海酒馆 / flip side bar（酒吧） |
| 1266 | 95 | 星星充电 / 超充站（充电站） |
| 1238 | 111 | 出口 |
| 192 | 85 | 沙县小吃（小吃，mk=10007 地标） |
| 1001 | 100 | 哈哈兔（娱乐） |
| 405/404 | ~180 | 珠宝店 |
| 717/720 | ~145 | 美容 / 美甲 |
| 714 | 134 | 理发店 |
| 1200 | 68 | 上海市互联网协会（协会） |
| 1437 | 68 | 民生银行 / 汇丰银行 |

其余长尾：95=日料、129=本帮菜、357=西餐、442=烟酒商店、26=旧址遗址、1=文物古迹、
62=公寓变体、376/377/375=服饰零售、376 中英文店名混杂（house of flour）。
命名规律：楼栋号/门/停车类必须有几何点位但无 mainKey，是"功能点"而非"场所"。

`rti` 形态：`B0…`（普通 POI）、`BS…`（公交站）、`BT…`（轨道交通站点），
可拼 `https://ditu.amap.com/place/<rti>` 回查官方卡片。nameLoc 语言标记 zh-Hans。

### 4.2 road（type=1）

字段：`mainKey`、`subKey`、`rank`（0=普通，500/1406/1701/1705/1706/2008/3010 等为
带权道路）、`shield`（盾牌数字，如"沪A"收费标）、`minZoom/maxZoom`、`drawOrder`、`resolution`。

- 11178/11328 有条目级 mainKey；只有 281 条有名称（命名主干道）。
- mainKey 层级（次数）：

| mainKey | n | 含义 |
|---|---|---|
| 20002 | 100 | 高架/高速（minZoom 6-7） |
| 20003 | 285 | 主干道/隧道/入口 |
| 20007 | 1886 | 主干道 |
| 20008 | 2310 | 次干道 |
| 20009 | 6184 | 支路/弄堂（最大众） |
| 20011 | 10 | 轮渡 |
| 20012 | 340 | 服务区/类快速路变体 |
| 20013 | 55 | 快速路支线 |
| 20018 | 2 | 在建 |
| 20001 | 2 | 其他 |
| null | 150 | 无名小路/内部路（无等级） |

- subKey：1=路面（主流）、2=入口/立交节点、3=隧道、5=支路变体、9/10/11=在建工程。
- rank 分布：0 占 11047/11328；1705 为主干道高频值（152 条），其余 500/1406/1701/2008/3010/4060 零星。
- minZoom 6~17 覆盖（高速 6 起，支路 15-16 起）——即"到哪一级才开始画"。

### 4.3 region（type=2）——按子类拆分，勿合成一层

**region 不是平面一层，而是拓扑叠放的一组面**：底层是大地块（drawOrder 20–26），
湖泊/绿地/建筑底板压在上面（drawOrder 61/63），顶层还有一批小面（drawOrder 80+，
停车场/广场/高架/机场）。内外要素互相重叠，所以最终程序按 `region_class` 拆成子图层输出，
每层仍带原始 `mainKey/subKey/drawOrder`，下游可自行重组回叠放关系。

实证归类依据（多案例交叉验证，非官版码表，高置信项已注明实测地标）：

| region_class | 判定 | 含义 | 实证 |
|---|---|---|---|
| `region_water` | mk=null, sk=2, draw=63 | **水面**（江/湖/池塘） | 黄浦江 0.73/0.77km²、滴水湖 1.97km²×2（正盖"滴水湖"POI）、西湖 1.61km² |
| `region_green` | mk=30002, sk=5, draw=20/21 | **绿地/公园大面** | 世纪公园 0.70/0.75km²、延中绿地 |
| `region_parcel` | mk=30002（其余 sk） | 街区用地地块（含产业区/商业/居住/港口 sk=6） | 临港产业区 2.4km²、郑州东站街区 |
| `region_builtup` | mk=null, sk=3, draw=61 | 建筑底板碎面（最常见，中位 ~1000m²） | 8 城 1095 个，落在办公楼/门 POI 上 |
| `region_top` | drawOrder≥80 | 顶层小面（停车场/广场/高架） | 虹桥机场 mk=30004（airport 实例）|
| `region_line` | 线组 mk=20017/20010/20014/20011, res 13/15 | 水系/边界线（含河流） | 世纪公园水系线、金鸡湖岸线 |
| `region_other` | 兜底 | 未归类 | — |

注意：
- region 数据实际只在 **type=1 变体**有内容（type=2 的 region 是空壳），两个变体都请求才拿得到。
- subKey 还观测到 7/8/9/10/11/19/20/21/42 等细分码（街区/商业/机场/顶层），
  语义未全部定案，一律先归入 `parcel`/`top`，原码保留在属性里。
- `region_line` 此前被丢弃（容器只读了 polygons 组），新版已修复。
- properties 里 `region_class` 即子类名；`subKey` 原始码可继续做细分研究。

### 4.4 building（type=3）

字段：`mainKey`（全 null）、`subKey`、`height_m`（=`mainBuildingHeight`，米）、
`bz`（高德建筑 ID，少数有）、`rank`、`minZoom/maxZoom`、`drawOrder`、`resolution`(=18)。

- 全部 5623 条实测都有高度（人民广场样本），取值是 4 的倍数（4~314m），
  拟合楼高≈层数×4m 的档位化。历史篇 39/122 有值是早期瓦片覆盖差异，不是编码缺失。
- subKey 分布：6=1935、7=1580、9=1159、18=305、11=217、2=164、10=97、12=78、13=55、8=24、4=5、26=4。
  语义未完全定案：高层建筑多见 sk=6/7，sk=2 在旧篇确认过"超高层"样本；
  目前只作分桶键，不作解释键。
- `bz`：174/5623 有条目，形态同 rti（B…），高德建筑详情页可用。
- 名称：building 层**整体无名**（0/5623）；名称只能回 POI 层/mainKey=10007 地标捡。

### 4.5 transit（type=4）

三组 SameStyle：lines（地铁/公交线）、points（站点/编号点）、polygons（场站面）。

- 线（LineFeatureMulti）：`mainKey=20015`（轨道线大类），`subKey` 是内部线路号：
  3=1号线、4=8号线、9=2号线、29=10号线、180=14号线……`drawOrder=10000+线路号`
  （如 10 号线=10010），名称 `10号线` 直接可读。52 条线（含少量重复段）。
- 点：`mainKey=10005`；`subKey=54`=地铁站（人民广场 4 点、大世界、豫园…带站名＋rti=BT…）；
  `subKey=41`=公交线路编号点（name=纯数字线路号，如"5""1"，rti=BT1003xxxx）。
- 面（polygon）：`mainKey=30003`（场站面），subKey 8/19/20/26 等，停车场/枢纽底板。
- 点层带 `rank`、`drawOrder`；站名/线路名都在 nameLoc（zh-Hans），无 nameEng。

## 5. zoom 差异与 resolution

- 数据只存在于 **z12 与 z14** 两级。**z16 实测返回空壳瓦片**（82B，gzip 正常解出但
  Result 内无任何 Tile/Layer，status 仍为 OK）——接口受理请求但不供数，
  z14 瓦片内嵌 z15 子层即数据的最实粒度；更高清由客户端渲染层解决。
- 同一瓦片内各层 resolution 不同：building=18（网格最密，z14 瓦片拆成 2×2 个 z15 子层），
  road 主体 13、poi 12、region 12（少量 13）。
- Layer 头的 z/x/y 是 **z15 子瓦片号**；凡发现"建筑坐标整体偏移半城"，
  先检查是不是把子瓦片号当成父瓦片号参与换算。
- **瓦片覆盖按 GCJ02 空间定义**：bbox 角点先转 GCJ02 再算瓦片号，输出转回 WGS84 后
  会整体向西/南偏移约 0.0055°/0.0005°（GCJ→WGS 偏移量），且整瓦覆盖远大于输入 bbox
  （实测 z14 六瓦覆盖约 4×5.6km vs 输入 2×1.8km，building 83% 在输入 bbox 外）。
  要严格裁到输入范围需后处理裁剪，这不是解码错误。
- minZoom/maxZoom 是渲染出现区间：road 6~17 全覆盖（高速 6 起、支路 15 起），
  poi 15~20（门牌/楼栋 17 才出），building 15 起。做前端显隐逻辑可直接用。

## 6. 坐标定论（GCJ-02 → 标准算法出 WGS84，此节封板）

三次独立验证，结论稳定：

1. **POI 锚点**：上海博物馆解码值 (121.475481,31.228231) vs 高德官方 POI 卡片
   (121.475480,31.228231)，差 0.2m —— 解码值就是 GCJ-02。
2. **既有管线零差异**：同一瓦片 945 个建筑环，新五层解析与旧建筑管线逐环比对 0 差异。
3. **转换后落点**：经 `gcj02ToWgs84` 得 (121.470964,31.230178) vs Wikipedia
   (121.470556,31.230278) ≈ 40m（坐标系白模精度，符合预期）。

转换算法沿用既有标准实现（WebGIS-Dev `crs/coordTransform.js` 数值一致），
自检里已加 5 组输入点的金标准逐位比对（1e-12），防手抄回退。
WGS84→GCJ02→WGS84 往返非精确互逆（残留米级），自检容差 5m。

## 7. 转标准 MVT（最高目标的落地路径）

输出 GeoJSON 已可作中转，路径：

- 几何：`path2coords` 流 → 环 → MVT `Polygon/LineString/Point`，extent 4096；
  用 `resolution`（18/12/13）把 layer 的 z15 子瓦片 fold 回 z14（或保持 15）。
- 属性：`mainKey/subKey/resolution/rank/drawOrder/height_m` 可直接作 MVT feature attributes；
  中文名在 nameLoc（zh-Hans）里，输出前先落成 `name`。
- 图层保留高德五层名（poi/road/region/building/transit），前端按层开关。
- 注意去重键（跨瓦重复）与 drawOrder（render order）两个字段不要丢。

## 8. 自检与复现

```bash
node amap_vector_fetch.mjs --selftest   # 22 项，全过才发版
```

覆盖：GCJ02↔WGS84 往返（3 组，容差 5m）、境内必偏移、博物馆 WGS84 落点 <60m、
`_tLat/_tLon` 金标准逐位比对（5 组输入）、gcj02ToWgs84 与金标准一致、
pos→GCJ02 网格往返、packedZig/packedVarint 值流语义、瓦片号计算。

最小复现（单瓦 z14，type=1+type=2 各一次请求）：

```bash
node amap_vector_fetch.mjs --bbox 121.4700,31.2280,121.4730,31.2310 --zoom 14 \
  --layers all --outdir ./out
# building 945 / poi 6197 / road 1878 / region_*(9 类) / transit 51, failures=0
```

异地复现（河南大学金明校区，z14，6 瓦 × 2 变体，failures=0）：

```bash
node amap_vector_fetch.mjs --bbox 114.293,34.812,114.312,34.828 --zoom 14 \
  --layers all --outdir ./out
# poi 7227 / building 2597 / road 2351 / region_water 24 / region_green 1 / region_parcel 178 /
# region_builtup 260 / region_top 93 / region_line 474 / transit 0（开封无地铁，符合预期）
# building 全部带高度（4~132m，4 的倍数，8m 层高最常见 1258 栋）；
# 校园地标齐全（体育部/行政楼/廪悦图书馆/河大附小…）；该区域 bz=0
```

z16 空壳实测：`--zoom 16` 会被 CLI 拒绝；直接对接口请求 z16 瓦片返回
82B 空 Result（status=OK 但无图层），据此维持 12/14 限制并写入报错信息。

已发布采样只有最终版一份：`resources/amap-full-reverse/sample_jinming_z14/`
（即上方异地复现的实测输出：building/poi/region/road 四层 `.geojson`＋`run_info.json`，
金明校区 z14 六瓦 × 2 变体，failures=0）。

## 9. 已知边界与残留

- POI 与建筑分属两个数据变体（type=2 / type=1），全量抓取要都请求；道路名称只在 type=2 有。
- building 层无名称；建筑名要回 POI 层地标（mk=10007）或 `bz` 回查。
- region 层无任何属性字典，只有 drawOrder 分层。
- `uid` 仅瓦片内唯一，不能跨瓦当主键；跨瓦同楼会出现两半（本程序只去重不 Union）。
- 高速/国道编号在 shield 字段（本样本 shieldType 全 0，未见收费标实例）。
- 后续方向：MVT 落地、前端多源选择器（腾讯/高德/天地图三源 schema 对齐）。

---

*只用于小范围格式研究；请遵守高德服务条款。*
