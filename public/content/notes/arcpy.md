---
title: ArcPy 自动化处理
date: 2024-06-15
tags: [Python, ArcGIS, 自动化]
description: Python 在 ArcGIS 中的自动化应用，批量处理地理数据
icon: fab fa-python
---

# ArcPy 自动化处理

## 简介

ArcPy 是 Esri 提供的 Python 站点包，用于执行地理数据分析、数据转换、数据管理和地图自动化。

## 环境配置

### 使用 ArcGIS Pro 的 Python 环境

```python
# ArcGIS Pro 默认 Python 路径
# C:\Program Files\ArcGIS\Pro\bin\Python\envs\arcgispro-py3\python.exe

import arcpy
print(arcpy.GetInstallInfo())
```

### 设置工作空间

```python
import arcpy

# 设置工作空间
arcpy.env.workspace = r"C:\Data\MyProject.gdb"

# 设置输出覆盖
arcpy.env.overwriteOutput = True

# 设置坐标系
arcpy.env.outputCoordinateSystem = arcpy.SpatialReference(4326)
```

## 常用操作

### 批量裁剪栅格

```python
import arcpy
import os

def batch_clip_raster(input_folder, clip_feature, output_folder):
    """
    批量裁剪栅格数据
    
    Parameters:
    -----------
    input_folder : str
        输入栅格文件夹
    clip_feature : str
        裁剪要素路径
    output_folder : str
        输出文件夹
    """
    arcpy.env.workspace = input_folder
    rasters = arcpy.ListRasters("*", "TIF")
    
    for raster in rasters:
        output_path = os.path.join(output_folder, f"clip_{raster}")
        arcpy.management.Clip(
            in_raster=raster,
            out_raster=output_path,
            in_template_dataset=clip_feature,
            clipping_geometry="ClippingGeometry"
        )
        print(f"已处理: {raster}")

# 使用示例
batch_clip_raster(
    r"C:\Data\Rasters",
    r"C:\Data\Boundary.shp",
    r"C:\Data\Output"
)
```

### 批量投影转换

```python
import arcpy

def batch_project(input_gdb, output_gdb, target_sr):
    """
    批量投影要素类
    """
    arcpy.env.workspace = input_gdb
    feature_classes = arcpy.ListFeatureClasses()
    
    for fc in feature_classes:
        output_fc = os.path.join(output_gdb, fc)
        arcpy.management.Project(fc, output_fc, target_sr)
        print(f"投影完成: {fc}")

# 使用示例
target_sr = arcpy.SpatialReference(4547)  # CGCS2000 / 3-degree Gauss-Kruger CM 117E
batch_project(
    r"C:\Data\Input.gdb",
    r"C:\Data\Output.gdb",
    target_sr
)
```

### 字段计算

```python
import arcpy

def calculate_area(feature_class, area_field="Area_km2"):
    """
    计算多边形面积（平方公里）
    """
    # 添加字段
    if area_field not in [f.name for f in arcpy.ListFields(feature_class)]:
        arcpy.management.AddField(feature_class, area_field, "DOUBLE")
    
    # 计算面积
    arcpy.management.CalculateGeometryAttributes(
        feature_class,
        [[area_field, "AREA"]],
        area_unit="SQUARE_KILOMETERS"
    )
```

## 游标操作

### 搜索游标

```python
import arcpy

# 使用 SearchCursor 读取数据
with arcpy.da.SearchCursor("cities", ["NAME", "POPULATION"]) as cursor:
    for row in cursor:
        print(f"{row[0]}: {row[1]}")
```

### 更新游标

```python
import arcpy

# 使用 UpdateCursor 更新数据
with arcpy.da.UpdateCursor("cities", ["NAME", "POPULATION"]) as cursor:
    for row in cursor:
        if row[1] > 1000000:
            row[0] = row[0] + " (大城市)"
            cursor.updateRow(row)
```

### 插入游标

```python
import arcpy

# 使用 InsertCursor 插入数据
with arcpy.da.InsertCursor("points", ["SHAPE@XY", "NAME"]) as cursor:
    cursor.insertRow([(116.4, 39.9), "北京"])
    cursor.insertRow([(121.5, 31.2), "上海"])
```

## 最佳实践

1. **使用 `with` 语句管理游标**：确保游标正确释放
2. **设置 `overwriteOutput = True`**：避免重复运行报错
3. **使用绝对路径**：避免路径问题
4. **添加进度输出**：方便监控批量处理进度

## 参考资料

- [ArcPy 官方文档](https://pro.arcgis.com/en/pro-app/latest/arcpy/main/arcgis-pro-arcpy-reference.htm)
- [ArcPy 函数参考](https://pro.arcgis.com/en/pro-app/latest/arcpy/functions/alphabetical-list-of-arcpy-functions.htm)
