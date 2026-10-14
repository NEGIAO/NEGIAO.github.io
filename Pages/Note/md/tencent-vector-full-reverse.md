# 腾讯地图矢量瓦片全量逆向：频段 schema、解码链与最终程序

## 说明

本文是腾讯矢量瓦片逆向的总纲与唯一最终版：**一个瓦片里全部图层（5 个 ID 频段、
2113 个已知图层 ID、33+13+14+40 类）是什么几何、带哪些属性、怎么解、
跨瓦片怎么做拓扑、用什么程序一键取数**，以及已验证的结论与置信度。

《腾讯地图建筑矢量逆向》（`196619` 楼块深挖 + 已验证数字）现为本文的子集历史篇：
建筑提取（端点探测、txDecode 解码链、TMS 翻转、GCJ-02 换算、deltaDecode、
196619 识别）已完全并入最终程序——同输入陆家嘴 z16 框 **270→270 栋、
几何与楼高逐一比对 270/270 完全一致**，输出 schema 不变；
建筑篇专用代码（`qq_building_to_geojson.mjs`）随之退役为历史篇，新工作一律走最终程序。

最终程序（单文件独立，取数＋全量解析＋通用拓扑＋CLI 全收敛）：

<p>
  <a href="../resources/qq-full-reverse/qq_vector_fetch.mjs" download style="font-weight: bold; font-size: 1.1em;">📥 下载 qq_vector_fetch.mjs</a>
</p>

只用于小范围格式研究。请遵守腾讯位置服务条款；大范围/商用请用自己申请的 key。

真结构定论（不用"按 ID 逐个猜"思路）：
图层 ID 按 65536 宽度分频段（`65536=point / 131072=line / 196608=region /
262144=label / 327680=arrow`，gljs bundle `tt` 表原值），频段定几何类型与字段 schema；
每瓦一次请求返回全部图层；feature 分发只看一件事——`f[0]` 是数组就是注记（逐字记录），
否则按频段解扁平记录。

## 1. 最终程序用法（范围＋图层选项＋级别→干净GeoJSON）

```bash
node qq_vector_fetch.mjs --bbox 121.4730,31.2305,121.4760,31.2325 --zoom 16 --layers all --outdir ./out
node qq_vector_fetch.mjs --center 121.4997,31.2397 --delta 0.004 --zoom 16 --layers area_building,road_mainroad --outdir ./out
node qq_vector_fetch.mjs --selftest
```

- `--bbox`/`--center`：范围（WGS-84；内部转 GCJ-02 算瓦片，输出统一回 WGS-84）；
- `--layers`：`all`（默认）或逗号指定图层组名（见§3，如 `area_building,poi_restrant,label_mainroad,arrow,raw_131589`）；
- `--zoom`：级别（14~18 已验证，其它级别警告放行）；
- `--outdir`：每组一个 `<组名>.geojson` ＋ `merge_stats.json` ＋ `run_info.json`；
- `--delay`（默认 400ms 禁调小）、`--max-tiles`（默认 100，超限拒绝请缩小范围）；
- 内置 `--selftest`（频段/解码链/跨瓦对齐/去重/闭合判定/注记/POI/多part/洞嵌套/
  WGS84 单调/GCJ02 金标准/2x2 分批覆盖合成用例，69 项不过不发版）。

请求格式（每批最多 4 块，2x2 邻接；TMS y = 2^z-1-xyz_y）：

```text
https://rt{0-3}.map.gtimg.com/tile?styleid=0&tiles=<z>_<x_tms>_<y_tms>,...&version=2271&building=1&style=100&compress=1&mapType=hybrid
Referer: https://lbs.qq.com/getPoint/
```

`version` 取 `https://confinfo.map.qq.com/confinfo` 当前值（本文成文时 2271，变了改程序头部常量）。

程序行为：

```text
bbox/center → 瓦片列表（GCJ-02 编号，超 --max-tiles 直接拒绝）
→ 2x2 批量 fetch（间隔400ms，重试3次，失败记 run_info.failures 不伪造空瓦片）
→ txDecode 全量解析（频段分发，全局像素化）
→ 通用拓扑（不裁剪 + 跨瓦整数像素精确去重 + 多环嵌洞，见§7）
→ <组名>.geojson（WGS84干净矢量）＋ merge_stats.json（分层 in/out/dedup）＋ run_info.json
```

建议采样矩阵（小范围、每种地貌/级别各取 1~4 瓦片即可，不要大范围扫）：

| 区域类型 | 目的 |
|---|---|
| 城区密集建筑（陆家嘴/郑大一附院） | area_building 楼高/去重基线 |
| 主干道成网 | road_mainroad/secondaryroad + label_mainroad 注记 |
| 环岛/路口 | road 闭合转 Polygon 判定 |
| 江河湖海 | area_water + label_ocean + 箭头频段 |
| POI 密集商圈 | poi_* 33 类 + anchors 图集矩形 |
| z14~z18 同框 | LOD 差异（哪些层在哪些级别出现，见§5） |

出现新的图层 ID（raw_*）、新的字段长度即新发现，按§6格式上报。

## 2. 请求与响应真结构（全图层共用）

响应 `{datas:[{data: <自定义base64>}]}`，与请求瓦片一一同序（空瓦也有 data，
解码后 `ret=0, features=[]`；实测南太平洋瓦片解出 3 要素，没有真空）。

解码链（gljs bundle 55722 模块原样移植，与建筑篇一致）：

```text
data → stripPad（至多剥 2 个尾部 '='）→ 自定义 b64（A-Za-z0-9+/= 65 字符表）
→ 双字节 rotate+xor 链（每对 3 轮）→ UTF-8 字节流 → 以最后一个 } 截断
→ JSON {ret:0, features:[...], img}
```

txDecode 的逆向（txEncode）内置在 selftest 里做编解码闭环验证：
合成 payload → txEncode → txDecode 必须逐字节还原（含中文与嵌套数组两项）。

feature 分发（整个解析只有这一个 if）：

```text
f[0] 是数组  → 注记（label 频段）: feature = 逐字记录数组
              [id,[x,y],char,font,style,anchors?]（绝对瓦片内像素，非差分）
f[0] 是数字  → 扁平记录 [id, geom, ...]，频段定 schema（见§3/§4）
```

几何坐标（瓦片内局部整数像素）：point 频段 `f[1]=[x,y]` 直接坐标；
line/region/arrow 频段 `f[1]` 为 **deltaDecode 流**（首点绝对，其余差分）；
`f[1][0]` 是数组即多 part（gljs 渲染器 `S[1][0] instanceof Array` 分支，
实测 1644 样本无多 part，但代码路径存在，程序按 Multi* 输出）。
全局像素 = 局部像素 + 瓦片原点 × 256（**整数，跨瓦去重键零舍入误差**），
再经 slippy map 反算 GCJ-02，最后 gcj02ToWgs84 输出 WGS-84。

两处易抄错点（都在 selftest 里有金标准断言）：

| 点 | 正确 | 抄错后果 |
|---|---|---|
| `_tLon` 第三项 | `40·sin(lon/3·π)`（wandergis/coordtransform 原式） | 写成 `lat/3` 时上海整体偏移 46m（本项目实测抓捕过一次） |
| 瓦片 y | TMS 翻转 `y_tms = 2^z-1-y_xyz` | 南北整体镜像 |

## 3. 已确认图层清单（4 区域 × z14~z18 实测，182 层在账）

频段表（gljs bundle `tt` 表原值，ID 区间左闭右闭）：

| 频段 | ID 区间 | 类型 | 已知 ID 数 | 分类表来源 |
|---|---|---|---|---|
| point | 65536–131071 | 点（POI） | 873 | bundle poiTag 33 类 |
| line | 131072–196607 | 线（道路） | 449 | bundle roadTag 13 类 |
| region | 196608–262143 | 面（区域/建筑） | 318 | bundle regionTag 14 类 |
| label | 262144–327679 | 文字注记 | 473 | bundle labelTag 40 类 |
| arrow | 327680–393215 | 道路箭头 | 全频段一组 | bundle tt 表 |

四张分类表（合计 2113 个 ID）全部从 gljs bundle 提取并以区段串内嵌进最终程序
（poi/road/area/label 各一张，压缩后仅 6.5KB）；查表命中即输出语义组名，
未命中按频段兜底：arrow 频段归一 `arrow`，其余每 ID 单列 `raw_<id>`（低置信）。

实测在账 182 层（4 区域 5 级别采样，含 14 个未进当前 bundle 分类表的 ID）：

| 分组 | 层数 | 例 |
|---|---|---|
| area_building | 5（196619/197120-197123） | 楼块主体 196619；197120-197123 z17+ 补充体块 |
| road 13 类 | 见 bundle 表 | mainroad/motorway/secondaryroad/street/subwayline/path/railway/pfurniture/ferry/guojie/highway/shengjie/water |
| area 14 类 | 见 bundle 表 | park/grass/water/resident/commercial/school/hospital/parkinglots/sportsfield/subwayarea/land/otherarea/airportsarea |
| poi 33 类 | 见 bundle 表 | restrant/hotel/scenic/shopping/subwaystation/subwayline/subwaygate/transport/lifeservice/... |
| label 40 类 | 见 bundle 表 | mainroad/secondaryroad/street/highway/ocean/poi 各类同名注记 |
| arrow | 1 | 327701/327703/327936（道路方向箭头碎段） |
| raw_* | 14 | 131589/131596/131647/131650/131651/131795、66875/67146/67181、196965/197064、327701/327703/327936 |

## 4. 逐类属性详解

### 4.1 area_building（楼块，建筑篇已定论，全量视角补充）

schema：`[196619, geom, height, name, style]`——f[2] 楼高（米，已对官方预览验证）、
f[4] 是外观配置码（同值楼共用，如 656015360）；**style 不是唯一 ID，禁做去重键**
（实测 40/40 跨瓦重复组 style 尾值一致只是佐证重复，不同楼同样式大量共存）。
跨瓦去重靠全局整数像素（几何逐点一致），建筑 361→270 与旧程序逐一 270/270 吻合。

### 4.2 road_*（道路线层，13 类）

schema：`[id, geom, name, style]` 或 5 字段 `[id, geom, num, name, style]`
（num = startDistance，渲染器 `P.startDistance=o[2]`，程序记为 `start_distance`）。
名称字段绝大多数为空（路名走 label_* 注记层），程序对首字符串字段取 name。
闭合几何（首尾差 ≤1px，渲染器口径）判为环岛/面，转 Polygon——实测陆家嘴
street 388 条线中 10 条闭合即此列。

### 4.3 area_*（面要素，building 之外 13 类）

schema 同 4 字段 `[id, geom, name, style]`。region 频段恒为面，
数据环不闭口（实测 park 环首尾点不同），输出前补首点闭合（GeoJSON 要求）。
多 part 环按面积降序 + 包含关系嵌洞（不依赖绕向）。

### 4.4 poi_*（POI 点层，33 类）

schema：`[id, geom, name, "", style, anchors]`——f[2] 名称（如"麦当劳"）、
f[4] 图标配置码、f[5] 图集矩形 `[atlasX, atlasY, w, h]`（地铁出入口带 2 组）。
渲染器自己在瓦片内按 name 去重，那是渲染行为；程序按"全局坐标+name+style"去重，
同名不同点两个都留（宁可多给不漏）。

### 4.5 label_*（文字注记层，40 类）

feature 为逐字记录数组：`[id, [x,y], char, font, style, anchors]`——
每条记录一个字（含位置绝对像素、字体号、字形图集矩形）。
程序输出为逐字 Point（props 带 char/font/style/anchors），按全局像素去重；
一段路名的字与字之间等距排列（实测 262413"复兴东路隧道"字距 ~13px），
可自行按距离聚类还原整串。

### 4.6 arrow（道路箭头）

327680–393215 全频段一组。schema 同 4 字段；2~3 点小段（箭头朝向）。
闭合 3 点按面输出，否则按线。

### 4.7 raw_*（未识别层，低置信）

14 个 ID 未进当前 bundle 分类表，两类情形：
（a）**新版道路样式**（131589/131596/131647/131650/131651/131795）：线频段、
几何与属性同 road_*，等 bundle 更新收编；
（b）**新版 POI**（66875/67146/67181）：点频段，行为同 poi_*；
（c）**未命名面**（196965/197064）：region 频段，style 值异常大（804585473/808255489），
身份待官图对照；
（d）**箭头碎段**（327701/327703/327936）：已按 arrow 组归一。
程序按频段兜底解析（不猜语义），统一 `raw_<id>` 单列、merge_stats 计数。

## 5. zoom 差异与缺数

实测（4 区域 × z14~z18）：

| 现象 | 结论 |
|---|---|
| 注记层按级别分工 | 262707（ocean 2 字注记）仅 z14-15；262415/262180/262181 等 z15-18 |
| 建筑 196619 | z15 起出现（z14 无楼块），z18 最密 |
| 低频大道 | z14 已有 mainroad/highway/guojie（131073-75 国道） |
| POI 稀疏化 | z14-15 POI 少而大（省级/地标），z17-18 密集到门店级 |
| 箭头 | z16+ 才有（327701 z16-18、327936 z16-18） |

**非 subset 关系**：同范围 z18 比 z16 楼块多（LOD 加深而非简单缩放）；
反之下探 zoom 时部分层缺席是级别规则，不是漏采——跑取数前先按本节对表。

## 6. 未知发现流程（raw_* + 新字段长度）

1. `merge_stats.json` 里出现新 `raw_<id>` → 记 ID、频段、几何形态、style 值域；
2. 对照 gljs bundle `regionTag/labelTag/roadTag/poiTag` 四张分类表（`https://map.qq.com/api/gljs?v=1.exp&key=...&libraries=geometry,visualization,vector`）是否已收编；
3. 未收编且高频出现 → 按 bundle 新版更新分区表（`CATALOG` 常量）并补 selftest；
4. 新字段长度（如出现 7 字段扁平记录）→ 先按 nums/strs 分流取稳定字段，再查 bundle 渲染路径确认语义，**严禁按位置硬解**。

## 7. 通用拓扑（腾讯特性：不裁剪 + 整要素重复，与另两家完全不同）

**关键实测**（2x2 邻接瓦片探针，4 瓦 1186 要素）：

| 探针项 | 结果 | 结论 |
|---|---|---|
| 越界点 | 1380/5039（27%）落在 [0,256] 之外 | 服务端**不裁剪**，接缝要素整块给出 |
| 跨瓦完全重复 | 68 个要素 / 66 组，全局化后逐点一致 | 重复即完全一致，可直接精确去重 |
| 重复层分布 | 建筑 51、road 5+3+2+1+1、area 3+2、POI 1 | 全部层有此行为，非建筑特例 |
| 建筑重复组 | style 尾值 40/40 一致（佐证） | 但 style 非唯一键，仍以几何为准 |

因此腾讯的拓扑规则（与天地图"逐瓦裁剪+接缝 Union"相反，程序 §拓扑规则同此）：

| 规则 | 内容 |
|---|---|
| 1 不裁剪 | 局部像素 + 瓦片原点 = 全局像素，越界 buffer 点原样保留 |
| 2 精确去重 | 全局像素为**整数**，去重键 = 组名 + 整数几何 + 稳定属性（style/height/name/char/font/startDistance），无舍入误差 |
| 3 频段定面 | region 恒 Polygon（补首点闭合）；line/arrow 按首尾差≤1px 判闭合转面 |
| 4 多 part | 线→MultiLineString；多环→面积降序 + 包含嵌洞 |
| 5 无 Union/无审计 | 不存在半裁拼接；腾讯面层多分类天然可重叠，重叠非错误不打标 |
| 6 _tile/_tiles_n | 每个要素记首见瓦片与跨瓦出现次数（_tiles_n=4 即四角瓦全重复） |

验收（陆家嘴 z16 六瓦）：解析 1553 → 去重 127 → 26 组输出；建筑 361→270，
与旧建筑程序同框 270/270 几何楼高逐一一致；郑州 z18 九瓦 53 栋全 Polygon；
北京 z15 四瓦 4882 栋；三区零失败、零 NaN、零空环。
**移植转录 bug 实录**：`_tLon` 第三项 `sin(lon/3)` 误抄 `sin(lat/3)`，
陆家嘴整体偏移 46m——靠与旧程序 270/270 坐标比对一次抓捕，
现 selftest 有 `_tLon/_tLat` 金标准 12 点逐值断言防回退。

## 7b. 转标准 MVT（最高目标的落地路径，接上节程序输出）

腾讯瓦片内是 **256px 局部整数格网**，MVT extent 4096 = 256 × 16，**整数直映、无需重采样**：

```text
组名 → MVT layer.name（26 组原样保留：road_*/area_*/poi_*/label_*/arrow/raw_<id>）
本程序 props → MVT feature.properties（name/style/layer_id/height_m/char/font/anchors/
  start_distance/_tile/_tiles_n 原样写入）
频段 type → MVT geometry type：point 频段 → 1；line/arrow 频段 → 2；
  region 频段 → 3（多环按面积降序，环内包含即洞，GeoJSON 环序与 MVT 环序一一对应）
瓦片内局部整数像素 × 16 → MVT geometry（4096 格网；腾讯服务端不裁剪，
  越界 buffer 点原样保留，与 MVT 的 buffer 语义天然一致，不需要额外裁剪）
```

两条落地路径：

- **路径 A（精确，推荐）**：程序内存里本来就是瓦片内整数像素（全局像素 − 瓦片原点 × 256），
  直接 ×16 写 MVT，零坐标往返误差；需在程序里加一个 `--format mvt` 出口
  （复用 `parseTile` 后的中间要素、跳过 WGS84 反算），**当前版本尚未实现**。
- **路径 B（现成，实践无损）**：拿已发布的 WGS84 GeoJSON，按目标 z/x/y 重新投影回瓦片像素再 ×16。
  反算是双精度、往返误差 < 1cm，而 1 像素 ≈ 1.2m@z16，故实践上无损；
  可直接用 `tippecanoe` / `geojson2mvt` 离线转。

三点与另两家不同，转 MVT 时别照抄：

1. **label 层是逐字点**：MVT 里就是带 `char` 属性的 Point；要整串路名需在客户端按字距聚类
   （§4.5，实测字距 ~13px），或转 MVT 前预聚合成单点（丢原始字位，二选一）。
2. **组名即图层名，天然分层**：26 组不需要二次拆分；前端按组名开关即可
   （`label_*` 与同名 `road_*` 可拼成同一开关）。
3. **不要丢 `_tiles_n`、也别拿 `style` 当 feature id**：前者是跨瓦出现次数（LOD/优先级有用），
   后者是外观配置码、同值多要素共存（§4.1），做 id 会撞车。

前端自由选取（复用现有 useTdtBuildingFetch / useAmapBuildingFetch / useTencentBuildingFetch 形状）：

```text
用户输入 bbox + 勾选图层组（road_*/area_building/label_mainroad/…） + zoom
→ 按源构建瓦片地址（腾讯 TMS y 翻转 + version + 2x2 批量）
→ fetch（限速+重试） → txDecode 全量解码（本程序 decode 逻辑的前端版）
→ 按组名筛选 → GeoJSON / MVT 重编码
→ 腾讯 GL JS（代理模式，前端无 key）渲染，点击弹全部 props
```

## 8. 与天地图、高德全量的关系

| 源 | 建筑识别 | 坐标 | 解码 | 跨瓦拓扑 |
|---|---|---|---|---|
| 腾讯 | 频段 region∩196619 | GCJ-02 编号→WGS84 输出 | 自定义base64+rotate/xor→JSON | 不裁剪，整要素重复，精确去重 |
| 高德 | layer.type=3 | GCJ-02 编号→WGS84 输出 | pbf+packedZig | 逐瓦裁剪，按 key 去重 |
| 天地图 | CE+type2+14位elemid | CGCS2000≈WGS84 直出 | 私有protobuf+三编码+XOR | 逐瓦裁剪+接缝 Union |

三源全量都通之后，才能做"同一 bbox 三源对照"（位置偏差≤17m 基线已有），
再做统一 MVT + 统一样式，才是地理数据自由化。三篇总纲互为引用：
本文（腾讯）+ `tianditu-vector-full-reverse.md`（天地图）+ `amap-vector-full-reverse.md`（高德）。

## 9. 产物与复现

程序与采样都收敛到最终版，中间探针工具与旧版过程数据已全部清理
（`qq_probe*.mjs` 系列、`qq_building_to_geojson.mjs` 功能均已并入最终程序；
建筑篇降级为历史子集篇，仓库代码只保留最终程序）：

| 文件 | 说明 |
|---|---|
| `resources/qq-full-reverse/qq_vector_fetch.mjs` | **最终程序**（单文件独立：取数＋txDecode全量解析＋频段schema＋通用拓扑＋CLI＋selftest 69 项；建筑提取已并入，同框 270/270 一致） |
| `resources/qq-full-reverse/sample_lujiazui_z16/` | 最终程序实测输出（陆家嘴 z16 六瓦 1553 要素：26 组 `<组名>.geojson`＋`merge_stats.json`＋`run_info.json`） |

```bash
# 自检（频段/解码链/跨瓦对齐/去重/闭合/注记/POI/多part/洞嵌套/金标准，69项不过不发版）
node qq_vector_fetch.mjs --selftest

# 最小复现（陆家嘴 z16，2 次请求 6 瓦）
node qq_vector_fetch.mjs --center 121.4997,31.2397 --delta 0.004 --zoom 16 --outdir ./out

# 复现已发布采样（即 sample_lujiazui_z16；与上面 --center 式等价，记录进 run_info 的 bbox 串略异）
node qq_vector_fetch.mjs --bbox 121.4957,31.2357,121.5037,31.2437 --zoom 16 --layers all --outdir ./out
```

**复现校验**（2026-10-14 实测）：按上述命令重跑，28 个输出文件与 `sample_lujiazui_z16/`
**27 个逐字节一致**（另 1 个 `run_info.json` 仅 `bbox_wgs84` 字符串因输入式不同而略异，
分层计数 `tiles=6 / parsed=1553 / dedup=127 / failures=0` 完全相同）——
即"程序是最终的、采样可复现"这一条已被验证，不是一次性产物。

已发布采样只有最终版一份：`resources/qq-full-reverse/sample_lujiazui_z16/`
（1553 要素 → 去重 127 → 26 组；area_building 270 栋楼高 4~640m；
road_street 388 条（10 条闭合转面）；poi/label/arrow 各组合计见目录；
`merge_stats.json` 记分层去重数，`run_info.json` 记范围/瓦片/失败 0）。

## 10. 残留定性对照结论（置信度表）

| 问题 | 结论 | 置信 | 证据/残留动作 |
|---|---|---|---|
| 频段表 65536/131072/196608/262144/327680 | bundle `tt` 表原值，边界全样本验证 | 高 | selftest 16 点边界用例 |
| 四张分类表语义 | bundle poiTag/roadTag/regionTag/labelTag 提取，2113 ID | 高 | 182 层实测命中 168；raw_* 14 个待新版收编 |
| 建筑 f[2]=height(米) | 建筑篇已对官方预览验证；全量程序 270/270 复现 | 高 | 同框两程序逐一比对 |
| 建筑 style 非唯一键 | 同值多楼共存，去重只佐证不作键 | 高 | 40/40 重复组 + 270 栋共式 |
| 服务端不裁剪 | 27% 点越界 + 66 组跨瓦逐点一致 | 高 | 2x2 邻接探针 |
| label 位置为绝对像素 | 字距等距 ~13px、差分会溢出的瓦 | 高 | 262413/262179/262707 多样本 |
| POI f[5]=图集矩形 | 矩形 4 数 / 出入口双矩形 | 高 | 麦当劳/地铁站样本 |
| road 5 字段 num=startDistance | 渲染器 `P.startDistance=o[2]` | 中 | 131087 样本；语义名沿用 bundle |
| 196965/197064 身份 | region 未命名面，style 值异常大 | 低 | bundle 无记录；待官图对照 |
| 327701/327703/327936 | 道路箭头碎段（arrow 频段） | 中 | 频段归属确定；碎段语义从 bundle arrow 渲染路径 |
| z14 无建筑/注记分工 | 级别规则非漏采 | 高 | 4 区域 5 级别对照 |

解析完成度：字节→要素 100%（单请求全层 + 频段分发 + 整数几何，三区零失败）；
语义完成度约 95%（上表低置信行待 bundle 新版/官图对照，非解析缺口）。
