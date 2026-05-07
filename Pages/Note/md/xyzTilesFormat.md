# 深入浅出 GIS 图像格式：JPEG、PNG 与 TIFF 的数据结构及异同分析

在 WebGIS 开发中，后端经常需要处理成千上万的 XYZ 瓦片。虽然前端只负责渲染，但后端在进行空间分析、瓦片合成或格式转换（如转换为带有坐标系的 GeoTIFF）时，必须深入理解这些图像格式的底层数据结构。

本文将详细解析 JPEG、PNG、TIFF 三种主流格式，并重点探讨它们在瓦片服务中的特殊表现。

---

## 1. JPEG (Joint Photographic Experts Group)

### 1.1 数据结构
JPEG 是一种**有损压缩**格式，其核心是基于 **DCT（离散余弦变换）** 的频率域压缩。
* **颜色空间**：通常使用 YCbCr（亮度、蓝色色度、红色色度），这比 RGB 更利于压缩。
* **组成结构**：由一系列标记码（Markers）组成。
    * `SOI (Start of Image)`: 图像开始。
    * `DQT (Define Quantization Table)`: 定义量化表，决定压缩比和质量。
    * `SOF (Start of Frame)`: 包含图像高度、宽度、分量数（通常为 3，即 RGB）。
    * `SOS (Start of Scan)`: 实际的扫描数据开始。

### 1.2 在 XYZ 瓦片中的特点
* **波段**：固定为 3 个波段（RGB）。不支持透明度（Alpha 通道）。
* **适用场景**：底图瓦片为**影像图（Satellite/Aerial）**时。由于影像图细节极其复杂，JPEG 的压缩率远高于 PNG，可以显著减少网络带宽占用。
* **缺点**：边缘会有“伪影”，不适合存储具有精确像元值的属性数据。

---

## 2. PNG (Portable Network Graphics)

### 2.1 数据结构
PNG 是基于 **LZ77 派生的无损压缩算法**。其结构由一个 8 字节的签名和一系列**数据块（Chunks）**组成：
* **IHDR (Image Header)**：包含宽、高、位深、颜色类型。
* **PLTE (Palette)**：**调色板块**。这是你提到的关键点。
* **IDAT (Image Data)**：实际存储图像数据的地方。
* **IEND**：图像结束。

### 2.2 调色板 (Palette) 与 RGBA 的区别
在处理 XYZ 瓦片时，你会遇到两种截然不同的 PNG：
1.  **真彩色 PNG (RGBA)**：每个像素占 32 位（R, G, B, A 各 8 位）。适用于图标、带透明度的矢量切片叠加层。
2.  **索引色 PNG (Palette PNG)**：
    * **原理**：图像中并不直接存储 RGB 值，而是存储一个索引号（0-255）。`PLTE` 块定义了每个索引号对应的具体颜色。
    * **为什么 XYZ 常用？**：对于地图（尤其是只有几种颜色的行政区划图或简单地形图），索引色 PNG 的体积比 JPEG 还要小，且能保持 100% 的无损清晰度。
    * **后端坑点**：使用 GDAL 读取时，需要注意将其从索引色通过 `ExpandRPC` 或相关函数转换为 RGB 才能进行正常的数值运算。

### 2.3 特殊应用：Terrain-RGB
现在很多高程瓦片（DEM）也采用 PNG 格式。它利用 R, G, B 三个通道联合编码一个高度值（$Height = (R*256*256 + G*256 + B) / 10 - 10000$）。这种情况下，PNG 被当作**数据容器**而非视觉图像。

---

## 3. TIFF / GeoTIFF (Tagged Image File Format)

### 3.1 数据结构
TIFF 是一个基于**标签（Tags）**的灵活容器结构。
* **Header**：指明字节序（大端或小端）及指向第一个 IFD 的偏移量。
* **IFD (Image File Directory)**：图像文件目录。它像一个索引表，记录了图像的宽、高、压缩方式、条带（Strips）或分块（Tiles）的存储位置。
* **Values**：实际存储的数据，可以是 8位、16位甚至 32位浮点数。

### 3.2 为什么它是 GIS 的标准？
TIFF 能够成为 GIS 行业的通用格式，是因为它具有极强的**扩展性**：
* **GeoTIFF 扩展**：在 TIFF 的标签中增加了特定的地理空间标签（如 `GeoKeyDirectoryTag`），记录坐标系（CRS）、仿射变换参数（六参数）、投影信息等。
* **多波段支持**：TIFF 可以存储成百上千个波段，而不限于 RGB。
* **无损/有损兼容**：它支持 LZW、Deflate（无损）压缩，也支持像 JPEG 格式那样的压缩。

---

## 4. 总结与对比

| 特性 | JPEG | PNG | TIFF / GeoTIFF |
| :--- | :--- | :--- | :--- |
| **压缩性质** | 有损压缩 (Lossy) | 无损压缩 (Lossless) | 可选（通常为无损 LZW/Deflate） |
| **透明度** | 不支持 | 支持 (Alpha 通道) | 支持 |
| **波段数** | 通常 3 (RGB) | 1, 3, 或 4 | 无限制（支持多光谱、高光谱） |
| **地理元数据** | 无（需配套世界文件 .jgw） | 无（需配套世界文件 .pgw） | **原生支持 (Tags 嵌入)** |
| **XYZ 瓦片场景** | 卫星/正射影像 | 矢量渲染地图 / 索引色切片 | 原始遥感数据 / 后端处理产物 |
| **典型位深** | 8-bit | 1-bit 到 16-bit | 8, 16, 32, 64-bit (整型/浮点型) |

---

## 5. 后端处理实践建议 (基于 GDAL)

在你的后端流程中（请求 XYZ -> 解析 -> 转为 TIFF），有几个技术细节需要注意：

1.  **处理索引色 PNG**：
    如果请求到的瓦片是 Palette 模式，GDAL 读取后会得到一个波段。在转换为 TIFF 前，如果需要生成可见光 TIFF，建议将其转换为 RGB：
    ```python
    # 伪代码：检测并转换
    ds = gdal.Open(png_path)
    if ds.GetRasterBand(1).GetColorTable() is not None:
        # 使用 GDAL 工具或 VRT 扩展为 RGB
    ```

2.  **坐标系注入**：
    XYZ 瓦片本身是不含坐标信息的，它们遵循 Web Mercator (EPSG:3857) 投影。在转 TIFF 时，你需要手动计算其空间范围（Extent）：
    * 根据瓦片的 `z/x/y` 计算出该瓦片的左上角和右下角坐标。
    * 使用 `ds.SetGeoTransform()` 设置六参数。
    * 使用 `ds.SetProjection('EPSG:3857')` 设置投影。

3.  **压缩选项**：
    返回给客户端的 TIFF 如果体积过大，建议在 GDAL 写入时开启压缩：
    ```python
    options = ["COMPRESS=LZW", "TILED=YES"]
    gdal.CreateCopy(out_path, src_ds, options=options)
    ```