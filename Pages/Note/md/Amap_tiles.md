# WebGIS 开发实战：高德地图 XYZ 瓦片服务、`style/ltype/scl` 全参数拆解与在线预览指南

在 WebGIS 开发中，高德地图（AutoNavi / AMap）是在国内项目中访问速度最稳定、覆盖最精细的公开栅格底图源之一。然而，由于高德并未公开其 `appmaptile` 接口的完整参数规范，网上流传的博客往往存在各种冲突说法——比如把 `webrd` 和 `webst` 混为一谈、分不清 `scale` 与 `scl` 谁真正生效、或者发现加上 `ltype` 参数后却完全不起作用。

本文基于对高德在线切片服务的**逐参数实测与像素级比对**，系统梳理 `webrd` / `webst` / `wprd` 三组域名的真实管线差异、`style` 样式代号、`ltype` 四位二进制图层掩码、`lang` 语言分支以及 `scl` 高清缩放机制，并在上方提供可实时组合任意参数的**在线瓦片预览面板**。

---

## 一、高德地图 XYZ 瓦片服务基础架构

高德栅格切片采用标准 **Web 墨卡托投影（EPSG:3857）** 金字塔模型，但平面坐标经过国家测绘规范加密，属于 **GCJ-02（火星坐标系）**。其完整请求 URL 范式如下：

```text
https://{host}.is.autonavi.com/appmaptile?lang={lang}&size={size}&scale={scale}&style={style}&ltype={ltype}&scl={scl}&x={x}&y={y}&z={z}
```

### 1. 域名前缀的真实管线差异（`webrd` / `webst` / `wprd`）

高德瓦片域名由「前缀 + 并发编号 `01~04`」组成（如 `webrd01`~`webrd04`）。实测同一前缀下 `01~04` 返回结果完全一致（仅用于浏览器多路并发负载均衡），但**不同前缀对应的后端渲染管线存在本质区别**：

| 域名前缀 | 后端管线定位 | `style=6`（卫星） | `style=7`（电子图） | `style=8`（电子/叠加） | `style=9 / 10` |
| :--- | :--- | :---: | :--- | :--- | :---: |
| **`webrd01~04`** | 标准电子底图管线 | `404`（不支持） | **早期经典版电子图**（偏黄底色，忽略 `ltype`/`lang`/`scl`） | **新版标准不透明电子图**（含道路名 + POI 图标） | `404`（不支持） |
| **`webst01~04`** | 卫星与分层渲染管线 | **纯卫星影像（JPEG）** | **新版电子图（偏 POI，无道路名）** | **全透明背景叠加层**（专用于盖在卫星图上方） | **去图标纯文字版** |
| **`wprd01~04`** | 与 `webst` 完全同源 | 同 `webst`（SHA-256 一致） | 同 `webst`（SHA-256 一致） | 同 `webst`（SHA-256 一致） | 同 `webst` |

> **关键发现**：日常开发中最容易混淆的就是 **`webrd` 的 `style=8`** 与 **`webst` 的 `style=8`**——前者是不透明完整电子底图，后者是透明背景的卫星叠加图层。

### 2. 全请求参数总览

| 参数 | 是否必填 | 实测作用与真伪辨析 |
| :--- | :---: | :--- |
| `x`, `y`, `z` | 必填 | 标准 Google XYZ 瓦片列号、行号与缩放级别（左上角原点） |
| `style` | 必填 | 主样式与渲染模式控制，独立有效值为 `6`、`7`、`8`、`9`、`10` |
| `ltype` | 可选 | **4-bit 图层要素位掩码**（`0~15`），可独立开关地貌、路网、注记、建筑轮廓 |
| `lang` | 强烈建议 | 控制文字语言及管线分支：`zh_cn`（现代中文）、`en`（英文）、`zh_en`（双语） |
| `scl` | 可选 | **真正控制高清尺寸的参数**：`scl=1` 返回 `256×256`；`scl=2` 返回 `512×512`（无文字） |
| `size` | 兼容占位 | 实测 `0~4` 或省略均返回字节级相同瓦片，无实际渲染差异 |
| `scale` | 兼容占位 | 实测 `1~3` 或省略均返回字节级相同瓦片，真正生效的是 `scl` |

---

## 二、`style` 参数：五大视觉样式深度对比

经遍历 `style=0~50, 99, 100` 测试，高德切片实际仅有 **`6 / 7 / 8 / 9 / 10`** 五种独立渲染风格（部分尾数如 `17/27/37/47` 复用 `7`、`18/28` 复用 `8`、`19/29/99` 复用 `9`、`100` 复用 `10`，其余均返回 `404`）：

| `style` | 适用域名 | 图像格式与模式 | 图层特征与实测内容 | 缩放级别表现（城区实测） |
| :---: | :--- | :--- | :--- | :--- |
| **`6`** | `webst` / `wprd` | `JPEG` `256×256` `RGB` | **纯卫星遥感影像**，不含路网与标注；完全忽略 `ltype`、`lang`、`scl` | 实测至 `z=18`，`z=19` 返回“此区域无卫星图”占位图 |
| **`7`** | `webrd` | `PNG` `256×256` `P` | **早期经典版电子地图**，米黄底色、粗橘色道路、旧式地铁与隧道虚线；忽略 `ltype`/`lang`/`scl` | 兼容常规缩放层级 |
| **`7`** | `webst` / `wprd` | `PNG` `256×256` `P` | **新版电子地图（POI 优先）**，含彩色 POI 图标与地名，**省略主要道路名称**（如不标路名）；支持 `ltype`/`lang`/`scl` | 实测支持至 **`z=19`** |
| **`8`** | `webrd` | `PNG` `256×256` `P` | **新版标准全要素电子地图**，米白底色（`#FCF9F2`），同时包含**道路名、彩色 POI 图标与地名**；支持 `ltype`/`lang`/`scl` | 实测至 `z=18`（`z=19` 为空白） |
| **`8`** | `webst` / `wprd` | `PNG` `256×256` `RGBA` | **透明叠加图层**（背景全透明，保留黄白高亮路网、地铁线及白描边路名/POI）；**忽略 `lang` 参数** | 专为叠加于 `style=6` 卫星图上方设计 |
| **`9`** | `webst` / `wprd` | `PNG` `256×256` `RGBA` | **去图标纯文字电子地图**，完整底图+路网，**移除全部圆形 POI 图标**，保留路名与 POI 纯文字 | 支持 `ltype`/`scl` |
| **`10`** | `webst` / `wprd` | `PNG` `256×256` `RGBA` | **极简纯文字电子地图**，同样移除全部 POI 图标，**同时去掉道路名**，只留精简地标纯文字 | 支持 `ltype`/`scl` |

---

## 三、`ltype` 4-Bit 图层位掩码与三大联动机制

`ltype` 是高德切片最核心的“要素剥离开关”。它并非简单的枚举编号，而是一个标准的 **4 位二进制位掩码（Bitmask）**：

$$\text{ltype} = b_3 \times 8 + b_2 \times 4 + b_1 \times 2 + b_0 \times 1$$

### 1. 四个比特位的独立控制内容

| 二进制位 | 十进制权重 | 控制要素 | 说明与细节 |
| :---: | :---: | :--- | :--- |
| **Bit 0** | **`1`** | **地貌与面状底图** | 浅米色陆地背景（`#FCF9F2`）、公园绿地、江河湖泊水系、院区地块底色；在 `webst style=8` 透明模式中该位被屏蔽 |
| **Bit 1** | **`2`** | **路网与轨道交通线** | 高架/主干道/支路/小区路、桥梁与隧道虚线、地铁线路线（如绿色 2 号线）；在不透明模式下填充米白底，在 `webst style=8` 下背景全透明 |
| **Bit 2** | **`4`** | **文字注记与 POI 标注** | 路名、地名、地铁站与彩色 POI 图标；**`webrd` 与 `webst` 的 `style=7/8/9/10` 视觉差异几乎全部发生在这一层** |
| **Bit 3** | **`8`** | **建筑物基底轮廓** | 2D 楼宇/场馆基底多边形轮廓；**仅在 `z >= 17` 的大比例尺下出现**，`z <= 16` 时该层为空白 |

### 2. `ltype = 0 ~ 15` 全值组合实测映射表

| `ltype` | 二进制 | 开启要素 | 不透明模式（`webrd style=8` / `webst style=7`） | 透明叠加模式（`webst style=8`） |
| :---: | :---: | :--- | :--- | :--- |
| **`0`** | `0000` | 等同 `7` | 地貌 + 路网 + 注记（动态 RGBA，不含建筑） | 透明底 + 路网 + 注记 |
| **`1`** | `0001` | 仅地貌 | 纯米白底 + 绿地 + 水系（无路无字） | **全透明空白瓦片** |
| **`2`** | `0010` | 仅路网 | 米白底 + 道路网 + 地铁线（无绿地水系无字） | **透明底纯路网骨架** |
| **`3`** | `0011` | 地貌 + 路网 | **经典无标注底图**（绿地水系 + 路网，不含建筑） | 同 `ltype=2`（透明底纯路网） |
| **`4`** | `0100` | 仅注记 | 米白底 + 纯文字/POI 标注 | **透明底纯文字/POI 标注** |
| **`5`** | `0101` | 地貌 + 注记 | 绿地水系 + 注记（无道路线） | 同 `ltype=4`（透明底纯注记） |
| **`6`** | `0110` | 路网 + 注记 | 道路 + 注记（去掉绿地与水系） | 透明底路网 + 注记 |
| **`7`** | `0111` | 地貌+路网+注记 | 完整地图但 `z>=17` 不画建筑轮廓（动态 RGBA） | 透明底路网 + 注记 |
| **`8`** | `1000` | 仅建筑轮廓 | `z<=16` 空白；**`z>=17` 仅显示建筑物轮廓** | **全透明空白瓦片** |
| **`11`** | `1011` | 地貌+路网+建筑 | **`z>=17` 带建筑轮廓的无标注底图** | 同 `ltype=2`（透明底纯路网） |
| **`15` / 省略** | `1111` | 全部 4 层 | **全要素预渲染索引色 PNG（`mode=P`，体积最小 ~18KB）** | 透明底路网 + 注记 |
| **`>= 16`** | — | 溢出回落 | 实测 `16~255` 全部回落等同 `ltype=7` | 同 `ltype=7` |

### 3. 极易踩坑的三大参数联动规则

1. **`ltype` 必须配合 `lang=zh_cn` 才会生效**
   * 实测表明：只有明确传入 `lang=zh_cn` 时，后端才会走按位动态合成管线；如果省略 `lang` 或传 `lang=en` / `lang=zh_en`，无论 `ltype` 设为何值都会被**直接忽略**。
2. **省略 `lang` ≠ `lang=zh_cn`**
   * 省略 `lang` 参数并非默认等同 `zh_cn`，而是会命中高德较早期的中文缓存版本（例如隧道虚线与部分 POI 集明显不同），且同样导致 `ltype` 失效。建议所有正式请求显式携带 `lang=zh_cn`。
   * `lang=en`（纯英文）与 `lang=zh_en`（中英双语）在 `webrd style=8` 及 `webst style=7` 上有效，但均走独立多语言缓存，不支持 `ltype`。
3. **`scl=2` 高清模式会强制剥离注记层**
   * 传入 `scl=2` 后，返回尺寸变为 **`512×512` RGBA**，但服务端会**自动隐藏所有文字注记与 POI**（等效叠加屏蔽了 `Bit 2`）：
     * 在 `webrd style=8` / `webst style=7,9,10` 上返回 `512×512` 无标注电子底图；
     * 在 `webst style=8` 上返回 `512×512` **透明底纯路网**；
     * 若此时再指定 `ltype=4&scl=2`，则会直接返回纯空白图片。

---

## 四、高德全场景地图切片 URL 模板大全

### 1. 标准电子底图系列

#### 新版标准中文电子地图（全要素：道路名 + POI 图标）

```text
https://webrd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}
```

#### 新版电子地图（偏 POI、省略道路名，支持至 `z=19`）

```text
https://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}
```

#### 早期经典风格电子地图（怀旧偏黄底色）

```text
https://webrd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}
```

### 2. 卫星影像与透明叠加系列

#### 纯卫星影像底图（JPEG，无路网无标注）

```text
https://webst0{1-4}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}
```

#### 卫星叠加层：透明路网 + 路名 + POI 标注

```text
https://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&style=8&x={x}&y={y}&z={z}
```

#### 卫星叠加层：仅透明路网（不含文字与 POI）

```text
https://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&style=8&ltype=2&x={x}&y={y}&z={z}
```

#### 卫星叠加层：仅透明文字与 POI（不含道路线条）

```text
https://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&style=8&ltype=4&x={x}&y={y}&z={z}
```

### 3. 去标注 / 定制要素 / 多语言与高清系列

#### 无标注标准底图（适合叠加业务热力图、轨迹与自定义标注）

```text
https://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&ltype=3&x={x}&y={y}&z={z}
```

#### 无标注底图（`z>=17` 仍保留建筑物轮廓）

```text
https://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&style=7&ltype=11&x={x}&y={y}&z={z}
```

#### 去图标纯文字电子图（无圆形 POI 图标）

```text
https://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&style=9&x={x}&y={y}&z={z}
```

#### 仅建筑物基底轮廓（`z>=17` 生效）

```text
https://webrd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&style=8&ltype=8&x={x}&y={y}&z={z}
```

#### 高清 `512×512` 无标注底图 & 高清 `512×512` 透明路网

```text
# 512×512 不透明底图（无标注）
https://webrd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&style=8&scl=2&x={x}&y={y}&z={z}

# 512×512 透明纯路网（无标注）
https://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&style=8&scl=2&x={x}&y={y}&z={z}
```

#### 英文版 / 中英双语版电子地图

```text
# 纯英文
https://webrd0{1-4}.is.autonavi.com/appmaptile?lang=en&style=8&x={x}&y={y}&z={z}

# 中英双语
https://webrd0{1-4}.is.autonavi.com/appmaptile?lang=zh_en&style=8&x={x}&y={y}&z={z}
```

---

## 五、坐标系与动态纠偏说明（GCJ-02 ↔ WGS-84）

与谷歌地图（卫星图 WGS-84、国内街道图 GCJ-02）不同，高德地图的**卫星影像（`style=6`）与电子路网/透明叠加层（`style=7/8`）在国内全部统一采用 GCJ-02（火星坐标系）**：

- **高德内部混用零偏移**：将高德 `style=6` 卫星底图与高德 `webst style=8` 透明路网叠加时，天然完全对齐，无需任何纠偏。
- **跨源混用需纠偏**：当项目底层使用 **WGS-84**（如天地图、OSM、谷歌纯卫星 `lyrs=s`、原始 GPS 轨迹点）而想叠加高德路网/底图时，会产生数百米偏移。此时可配合 Hugging Face 部署的动态切片重投影代理 `https://negiao-webgis.hf.space/proxy/gcj2wgs/{target_url}` 将高德瓦片实时转换为 WGS-84。

---

## 六、WebGIS 前端代码集成实战（OpenLayers）

### 实战案例 1：高德卫星影像 + 透明路网注记双层叠加

```javascript
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';

// 1. 高德卫星底图（GCJ-02）
const amapSatelliteLayer = new TileLayer({
  name: '高德卫星影像',
  source: new XYZ({
    url: 'https://webst0{1-4}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
    crossOrigin: 'anonymous',
    maxZoom: 18
  }),
  zIndex: 1
});

// 2. 高德透明路网与注记叠加层（GCJ-02，直接与卫星图严丝合缝对齐）
const amapOverlayLayer = new TileLayer({
  name: '高德透明路网注记',
  source: new XYZ({
    url: 'https://webst0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&style=8&x={x}&y={y}&z={z}',
    crossOrigin: 'anonymous',
    maxZoom: 18
  }),
  zIndex: 2
});
```

### 实战案例 2：加载高清 `512×512` 无标注底图（`scl=2`）

由于 `scl=2` 返回的是覆盖同一 XYZ 网格的 `512×512` 图像，在 OpenLayers 中应显式设置 `tilePixelRatio: 2`，才能让高清渲染细节精确匹配视口：

```javascript
const amapHdBaseLayer = new TileLayer({
  name: '高德 512px 无标注高清底图',
  source: new XYZ({
    url: 'https://webrd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&style=8&scl=2&x={x}&y={y}&z={z}',
    tilePixelRatio: 2,
    crossOrigin: 'anonymous',
    maxZoom: 18
  })
});
```

### 实战案例 3：在 WGS-84 底图上叠加经代理纠偏的高德透明纯路网

```javascript
// 1. 定义高德透明纯路网（ltype=2 只留道路骨架，必须带 lang=zh_cn）
const rawAmapRoadUrl =
  'https://webst01.is.autonavi.com/appmaptile?lang=zh_cn&style=8&ltype=2&x={x}&y={y}&z={z}';

// 2. 通过 gcj2wgs 代理接口实时转为 WGS-84 坐标系，无缝叠加到天地图或 Google 卫星图上
const wgsAmapRoadLayer = new TileLayer({
  name: '高德纠偏纯路网(WGS-84)',
  source: new XYZ({
    url: `https://negiao-webgis.hf.space/proxy/gcj2wgs/${rawAmapRoadUrl}`,
    crossOrigin: 'anonymous',
    maxZoom: 18
  }),
  zIndex: 10
});
```

---

## 七、总结与最佳实践

1. **标准底图优先用 `webrd` + `style=8` + `lang=zh_cn`**：兼顾最新配色、道路名与彩色 POI 图标，避免省略 `lang` 退回旧版缓存或使用 `webrd style=7` 的早期样式。
2. **卫星图叠加用 `webst style=6` + `webst style=8`**：利用 `webst style=8` 自带透明通道与高对比白边文字的特性，在卫星底图上获得最佳可读性。
3. **自绘业务图层先剥离干扰要素**：做热力图、缓冲区或大屏态势展示时，使用 `webst style=7&ltype=3`（或 `ltype=11`、`scl=2`）去掉文字与 POI 抢占视觉焦点；若需保留完整底图样式但去除图标遮挡，可直接选用 `webst style=9`。
