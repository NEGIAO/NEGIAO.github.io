# ArcPy 空间数据处理与地理处理自动化实战指南

> 本文系统整理了基于 **ArcGIS Pro (Python 3)** 与 **ArcMap (Python 2.7)** 的 `arcpy` 地理处理自动化核心范式。涵盖环境控制、`arcpy.da` 高性能数据访问游标、几何拓扑构建、多维栅格（NetCDF）批处理、坐标转换、网络分析及 `.atbx` 自定义脚本工具封装。

---

## 一、核心模块架构与环境配置 (`arcpy.env`)

ArcPy 并非单一模块，而是由地理处理工具集、高性能数据访问模块、空间分析扩展与制图模块共同构成的完整空间编程体系：

| 模块 / 命名空间 | 核心职责 | 典型高频接口 |
| :--- | :--- | :--- |
| **`arcpy` (Root)** | 环境配置、数据检索、空间参考、通用地理处理调用 | `env.workspace`, `ListFeatureClasses`, `SpatialReference`, `Describe` |
| **`arcpy.da`** | 高性能数据访问游标（C++ 底层实现，比旧版游标快 5~10 倍） | `SearchCursor`, `InsertCursor`, `UpdateCursor`, `Walk`, `TableToNumPyArray` |
| **`arcpy.management`** | 数据管理、投影转换、字段与表操作、栅格基础管理 | `Project`, `AddField`, `CalculateField`, `MakeNetCDFRasterLayer` |
| **`arcpy.analysis`** | 经典矢量空间分析（缓冲区、裁剪、叠加、近邻统计） | `Buffer`, `Clip`, `Intersect`, `Union`, `Near`, `SpatialJoin` |
| **`arcpy.sa`** | 空间分析扩展（栅格代数、掩膜提取、地形水文分析） | `Raster`, `ExtractByMask`, `Con`, `Slope`, `ZonalStatisticsAsTable` |
| **`arcpy.na` / `arcpy.nax`** | 网络分析（最短路径、服务区、OD 成本矩阵） | `MakeRouteAnalysisLayer`, `Solve`, `arcpy.nax.Route` |
| **`arcpy.mp`** | ArcGIS Pro 工程与自动化制图（替代旧版 `arcpy.mapping`） | `ArcGISProject`, `Map`, `Layout`, `exportToPNG`, `exportToPDF` |

### 1.1 标准批处理脚本起手式

在编写任何批处理脚本前，统一配置工作空间、覆盖策略、输出坐标系与并行处理因子可以避免 90% 的路径报错与锁表问题：

```python
import arcpy
import os

# 1. 基础环境配置
arcpy.env.workspace = r"D:\GIS_Workspace\ProjectData.gdb"
arcpy.env.scratchWorkspace = r"D:\GIS_Workspace\Scratch.gdb"
arcpy.env.overwriteOutput = True              # 允许覆盖同名输出结果
arcpy.env.parallelProcessingFactor = "75%"    # 启用多核并行地理处理

# 2. 统一定义输出空间参考（如 CGCS2000 3度带 38号带 = EPSG:4526，或无带号 114E = EPSG:4547）
target_sr = arcpy.SpatialReference(4547)
arcpy.env.outputCoordinateSystem = target_sr

# 3. 递归遍历目录树下所有要素类（优于单层 ListFeatureClasses）
for dirpath, dirnames, filenames in arcpy.da.Walk(arcpy.env.workspace, datatype="FeatureClass"):
    for filename in filenames:
        fc_path = os.path.join(dirpath, filename)
        desc = arcpy.Describe(fc_path)
        print(f"[{desc.shapeType}] {desc.name} | 坐标系: {desc.spatialReference.name} | 要素数: {arcpy.management.GetCount(fc_path)[0]}")
```

---

## 二、`arcpy.da` 高性能游标与几何令牌实战

切忌在生产脚本中使用已废弃的 `arcpy.SearchCursor`，一律使用支持 `with` 上下文管理（自动释放数据库文件锁 `.lock`）的 **`arcpy.da` 游标**。

### 2.1 常用几何令牌（Geometry Tokens）速查

通过几何令牌可以直接按需读取要素的坐标、面积、长度或标准几何编码，避免反序列化完整 `Geometry` 对象带来的性能开销：

| 几何令牌 | 返回类型 | 说明与推荐场景 |
| :--- | :--- | :--- |
| **`OID@`** | `int` | 要素唯一标识（`OBJECTID` / `FID`），无需事先硬编码主键字段名 |
| **`SHAPE@`** | `arcpy.Geometry` | 完整几何对象，支持调用 `.buffer()`、`.intersect()`、`.projectAs()` 等空间算子 |
| **`SHAPE@XY`** | `(float, float)` | 要素质心坐标元组 `(x, y)`，点要素读取坐标或面要素提取质心最快方式 |
| **`SHAPE@XYZ`** | `(float, float, float)` | 含 Z 值的三维坐标元组 `(x, y, z)` |
| **`SHAPE@LENGTH`** | `float` | 要素周长或折线长度（单位与要素类坐标系一致），比读取 `Shape_Length` 更稳健 |
| **`SHAPE@AREA`** | `float` | 多边形面积（单位与坐标系一致） |
| **`SHAPE@WKT`** | `str` | OGC Well-Known Text 字符串，适合与 PostGIS / Shapely / GEOS 互操作 |
| **`SHAPE@JSON`** | `str` | Esri JSON 字符串 |

### 2.2 `SearchCursor`：带 SQL 过滤与空间范围检索

```python
import arcpy

fc_path = r"D:\GIS_Workspace\ProjectData.gdb\LandUse"
fields = ["OID@", "DLBM", "DLMC", "SHAPE@AREA", "SHAPE@XY"]
where_clause = "DLBM LIKE '01%' AND Shape_Area > 5000"  # 筛选大于 5000 ㎡ 的耕地

with arcpy.da.SearchCursor(fc_path, fields, where_clause=where_clause) as cursor:
    for oid, code, name, area, (cx, cy) in cursor:
        print(f"OID={oid} | {code}({name}) | 面积={area:.2f}㎡ | 质心=({cx:.3f}, {cy:.3f})")
```

### 2.3 `InsertCursor`：从零创建要素类并写入自定义几何

```python
import arcpy
import os

gdb_path = r"D:\GIS_Workspace\ProjectData.gdb"
fc_name = "DesignedRoads"
fc_path = os.path.join(gdb_path, fc_name)
sr = arcpy.SpatialReference(4549)  # CGCS2000 / 3-degree Gauss-Kruger CM 120E

if arcpy.Exists(fc_path):
    arcpy.management.Delete(fc_path)

# 1. 创建线要素类并批量添加属性字段
arcpy.management.CreateFeatureclass(gdb_path, fc_name, "POLYLINE", spatial_reference=sr)
arcpy.management.AddFields(fc_path, [
    ["RoadName", "TEXT", "道路名称", 64],
    ["Grade", "SHORT", "道路等级"],
    ["CalcLength", "DOUBLE", "计算长度(m)"]
])

# 2. 构建 Polyline 几何并写入要素类
coords = [(500120.0, 3850100.0), (500680.0, 3850450.0), (501200.0, 3850200.0)]
point_array = arcpy.Array([arcpy.Point(x, y) for x, y in coords])
polyline_geom = arcpy.Polyline(point_array, sr)

with arcpy.da.InsertCursor(fc_path, ["RoadName", "Grade", "CalcLength", "SHAPE@"]) as cursor:
    cursor.insertRow(("迎宾大道东段", 1, polyline_geom.length, polyline_geom))
```

### 2.4 `UpdateCursor`：属性批量清洗与几何原地修正

```python
import arcpy

fc_path = r"D:\GIS_Workspace\ProjectData.gdb\Buildings"

# 计算容积率并剔除面积小于 10㎡ 的碎多边形
with arcpy.da.UpdateCursor(fc_path, ["Floors", "FAR", "SHAPE@AREA", "SHAPE@"]) as cursor:
    for floors, far, area, geom in cursor:
        if geom is None or area < 10.0:
            cursor.deleteRow()  # 直接删除异常碎图斑
            continue
        floors_val = floors if (floors and floors > 0) else 1
        cursor.updateRow((floors_val, round(floors_val * 0.85, 2), area, geom))
```

---

## 三、几何算子与多边形构建（含内环孔洞）

### 3.1 构建带孔洞的复杂多边形（Polygon with Inner Ring）

在 ArcPy 中，外环与内环之间通过向外层 `arcpy.Array` 传入多个子 `Array`（或在点序列中插入 `None` 空点）来区分：

```python
import arcpy

sr = arcpy.SpatialReference(4326)

# 外环（顺时针）与内环孔洞（逆时针）
outer_ring = arcpy.Array([
    arcpy.Point(114.300, 34.810),
    arcpy.Point(114.300, 34.820),
    arcpy.Point(114.310, 34.820),
    arcpy.Point(114.310, 34.810),
    arcpy.Point(114.300, 34.810)
])
inner_hole = arcpy.Array([
    arcpy.Point(114.303, 34.813),
    arcpy.Point(114.307, 34.813),
    arcpy.Point(114.307, 34.817),
    arcpy.Point(114.303, 34.817),
    arcpy.Point(114.303, 34.813)
])

donut_polygon = arcpy.Polygon(arcpy.Array([outer_ring, inner_hole]), sr)
# 测地线面积（平方米，不受投影变形影响）
geodesic_area = donut_polygon.getArea("GEODESIC", "SQUAREMETERS")
```

### 3.2 内存几何对象直接参与空间计算

无需落地中间图层文件，`arcpy.Geometry` 实例本身可直接执行空间关系判断与几何裁切：

- **空间谓词**：`geom1.contains(geom2)`、`geom1.within(geom2)`、`geom1.overlaps(geom2)`、`geom1.crosses(geom2)`、`geom1.disjoint(geom2)`
- **拓扑算子**：
  - `geom1.buffer(distance)`：生成缓冲区几何
  - `geom1.intersect(geom2, dimension)`：`dimension=1` 取交集点，`2` 取交集线，`4` 取交集面
  - `geom1.union(geom2)` / `geom1.difference(geom2)` / `geom1.symmetricDifference(geom2)`
  - `geom1.projectAs(target_sr, transformation_name)`：内存中动态重投影

> **性能提示**：当需要创建临时图层供 GP 工具链串联调用时，优先写入内存工作空间 `memory\temp_fc`（ArcGIS Pro 首选，速度极快）或 `in_memory\temp_fc`，任务结束后调用 `arcpy.management.Delete("memory")` 一键释放。

---

## 四、栅格分析与 NetCDF 多维数据批处理

气象、水文与遥感研究中经常需要将 NetCDF (`.nc`) 多维气象网格按时间步批量导出为 GeoTIFF，并进行掩膜裁剪或栅格代数运算：

### 4.1 批量提取 NetCDF 时间序列为 GeoTIFF

```python
import arcpy
import os

def batch_nc_to_tif(nc_path, variable_name, x_dim, y_dim, time_dim, out_folder):
    os.makedirs(out_folder, exist_ok=True)
    arcpy.env.overwriteOutput = True

    nc_props = arcpy.NetCDFFileProperties(nc_path)
    time_len = nc_props.getDimensionSize(time_dim)

    for idx in range(time_len):
        time_val = nc_props.getDimensionValue(time_dim, idx)
        # 清洗时间字符串作为文件名后缀
        safe_tag = str(time_val).replace("/", "-").replace(":", "").replace(" ", "_")
        layer_name = f"nc_lyr_{idx}"
        out_tif = os.path.join(out_folder, f"{variable_name}_{safe_tag}.tif")

        # 按指定时间维切片创建内存栅格图层并导出为压缩 TIFF
        arcpy.md.MakeNetCDFRasterLayer(
            in_netCDF_file=nc_path,
            variable=variable_name,
            x_dimension=x_dim,
            y_dimension=y_dim,
            out_raster_layer=layer_name,
            dimension_values=[[time_dim, time_val]],
            value_selection_method="BY_VALUE"
        )
        arcpy.management.CopyRaster(layer_name, out_tif, pixel_type="32_BIT_FLOAT")
        arcpy.management.Delete(layer_name)
```

### 4.2 栅格代数与 NumPy 矩阵互操作

```python
import arcpy
from arcpy.sa import Raster, ExtractByMask, Con
import numpy as np

arcpy.CheckOutExtension("Spatial")

# 1. 掩膜裁剪与条件重分类（提取研究区内 NDVI > 0.3 的植被区）
b4_red = Raster(r"D:\RS\Sentinel2_B4.tif")
b8_nir = Raster(r"D:\RS\Sentinel2_B8.tif")
study_mask = r"D:\RS\StudyArea.shp"

ndvi = (b8_nir - b4_red) / (b8_nir + b4_red + 1e-6)
ndvi_clipped = ExtractByMask(ndvi, study_mask)
veg_raster = Con(ndvi_clipped >= 0.3, ndvi_clipped)
veg_raster.save(r"D:\RS\Output\NDVI_Veg.tif")

# 2. 转为 NumPy 数组进行自定义矩阵统计或机器学习推理
arr = arcpy.RasterToNumPyArray(ndvi_clipped, nodata_to_value=np.nan)
print(f"研究区 NDVI 均值: {np.nanmean(arr):.4f}, 标准差: {np.nanstd(arr):.4f}")
```

---

## 五、GCJ-02 ⇄ WGS-84 矢量要素原地坐标转换

国内互联网地图（高德、腾讯）采集的 POI 或路网属于 GCJ-02（火星坐标系），与 WGS-84 / CGCS2000 底图叠加时存在 300~500m 偏移。结合 `arcpy.da.UpdateCursor` 与 `getPart()` 可以对点、线、面要素类进行原地顶点级纠偏：

```python
import arcpy
import math

A = 6378245.0
EE = 0.00669342162296594323

def _out_of_china(lon, lat):
    return not (72.004 <= lon <= 137.8347 and 0.8293 <= lat <= 55.8271)

def _transform_lat(x, y):
    ret = -100.0 + 2.0 * x + 3.0 * y + 0.2 * y * y + 0.1 * x * y + 0.2 * math.sqrt(abs(x))
    ret += (20.0 * math.sin(6.0 * x * math.pi) + 20.0 * math.sin(2.0 * x * math.pi)) * 2.0 / 3.0
    ret += (20.0 * math.sin(y * math.pi) + 40.0 * math.sin(y / 3.0 * math.pi)) * 2.0 / 3.0
    ret += (160.0 * math.sin(y / 12.0 * math.pi) + 320 * math.sin(y * math.pi / 30.0)) * 2.0 / 3.0
    return ret

def _transform_lon(x, y):
    ret = 300.0 + x + 2.0 * y + 0.1 * x * x + 0.1 * x * y + 0.1 * math.sqrt(abs(x))
    ret += (20.0 * math.sin(6.0 * x * math.pi) + 20.0 * math.sin(2.0 * x * math.pi)) * 2.0 / 3.0
    ret += (20.0 * math.sin(x * math.pi) + 40.0 * math.sin(x / 3.0 * math.pi)) * 2.0 / 3.0
    ret += (150.0 * math.sin(x / 12.0 * math.pi) + 300.0 * math.sin(x / 30.0 * math.pi)) * 2.0 / 3.0
    return ret

def wgs84_to_gcj02(lon, lat):
    if _out_of_china(lon, lat):
        return lon, lat
    dlat = _transform_lat(lon - 105.0, lat - 35.0)
    dlon = _transform_lon(lon - 105.0, lat - 35.0)
    radlat = lat / 180.0 * math.pi
    magic = math.sin(radlat)
    magic = 1 - EE * magic * magic
    sqrtmagic = math.sqrt(magic)
    dlat = (dlat * 180.0) / ((A * (1 - EE)) / (magic * sqrtmagic) * math.pi)
    dlon = (dlon * 180.0) / (A / sqrtmagic * math.cos(radlat) * math.pi)
    return lon + dlon, lat + dlat

def gcj02_to_wgs84(lon, lat):
    if _out_of_china(lon, lat):
        return lon, lat
    glon, glat = wgs84_to_gcj02(lon, lat)
    return lon * 2 - glon, lat * 2 - glat

def transform_feature_class(in_fc, out_fc, mode="GCJ02_TO_WGS84"):
    """支持 POINT / POLYLINE / POLYGON 的通用坐标系转换"""
    func = gcj02_to_wgs84 if mode == "GCJ02_TO_WGS84" else wgs84_to_gcj02
    arcpy.management.CopyFeatures(in_fc, out_fc)
    desc = arcpy.Describe(out_fc)
    sr = desc.spatialReference
    shape_type = desc.shapeType.upper()

    with arcpy.da.UpdateCursor(out_fc, ["SHAPE@"]) as cursor:
        for (geom,) in cursor:
            if geom is None:
                continue
            if shape_type == "POINT":
                pt = geom.firstPoint
                nx, ny = func(pt.X, pt.Y)
                cursor.updateRow((arcpy.PointGeometry(arcpy.Point(nx, ny), sr),))
            else:
                parts = arcpy.Array()
                for part in geom:
                    ring = arcpy.Array()
                    for pt in part:
                        if pt is None:
                            ring.add(None)  # 保留多边形内环孔洞分隔符
                        else:
                            nx, ny = func(pt.X, pt.Y)
                            ring.add(arcpy.Point(nx, ny))
                    parts.add(ring)
                new_geom = arcpy.Polygon(parts, sr) if shape_type == "POLYGON" else arcpy.Polyline(parts, sr)
                cursor.updateRow((new_geom,))
```

---

## 六、制图自动化 (`arcpy.mp`) 与脚本工具箱封装 (`.atbx`)

### 6.1 `arcpy.mp` 批量更新图幅并导出高清专题图

```python
import arcpy

aprx = arcpy.mp.ArcGISProject(r"D:\GIS_Workspace\ThematicMap.aprx")
layout = aprx.listLayouts("MainLayout")[0]
title_elm = layout.listElements("TEXT_ELEMENT", "MapTitle")[0]

for city_name in ["郑州市", "开封市", "洛阳市"]:
    title_elm.text = f"2026年{city_name}生态环境遥感监测专题图"
    layout.exportToPNG(rf"D:\GIS_Workspace\Exports\{city_name}_专题图.png", resolution=300)

del aprx  # 释放工程句柄
```

### 6.2 封装 `.atbx` 脚本工具的参数与进度规范

将 Python 脚本封装为 ArcGIS Pro 工具箱（如本站开源的 [NEGIAO ArcGIS Pro 工具箱](?note=negiao-toolbox)）时，使用 `GetParameterAsText` 接收用户输入，并配合 `SetProgressor` 实时推送进度条：

```python
import arcpy

in_fc = arcpy.GetParameterAsText(0)
out_fc = arcpy.GetParameterAsText(1)
mode = arcpy.GetParameterAsText(2) or "GCJ02_TO_WGS84"

total = int(arcpy.management.GetCount(in_fc)[0])
arcpy.SetProgressor("step", "正在转换要素坐标...", 0, total, 1)
arcpy.AddMessage(f"开始处理 {in_fc}，共 {total} 个要素，模式：{mode}")

try:
    transform_feature_class(in_fc, out_fc, mode=mode)
    arcpy.AddMessage("✅ 坐标转换全部完成！")
except arcpy.ExecuteError:
    arcpy.AddError(arcpy.GetMessages(2))
except Exception as ex:
    arcpy.AddError(f"运行异常: {ex}")
finally:
    arcpy.ResetProgressor()
```

---

## 七、延伸阅读与配套资源

- **现成工具箱下载**：[NEGIAO ArcGIS Pro 工具箱 (`.atbx`)](?note=negiao-toolbox) —— 已封装 NC 批量转栅格、批量最短路径、火星坐标 ⇄ WGS-84 双向转换、直线转平滑曲线等脚本工具。
- **瓦片与坐标系专题**：[非标准 XYZ 切片图源与 GCJ-02 适配实战总结](?note=non-standard-xyz-and-gcj02)
