---
title: NEGIAO 工具箱
date: 2024-09-01
tags: [ArcGIS, 工具, Python]
description: 自制 ArcGIS 工具箱使用说明与功能介绍
icon: fas fa-toolbox
---

# NEGIAO 工具箱

## 概述

NEGIAO 工具箱是一个基于 ArcPy 开发的 ArcGIS 工具箱，集成了多种常用的地理数据处理功能，旨在提高日常 GIS 工作效率。

## 功能列表

### 1. 批量格式转换

将多种格式的数据批量转换为目标格式。

**支持格式：**
- Shapefile → Geodatabase Feature Class
- KML/KMZ → Shapefile
- CSV（含坐标）→ Point Feature Class
- GeoJSON → Shapefile

### 2. 栅格批处理

批量处理栅格数据的常用操作。

**功能包括：**
- 批量裁剪
- 批量投影
- 批量镶嵌
- 批量计算 NDVI

### 3. 空间分析工具

常用的空间分析功能封装。

**功能包括：**
- 多环缓冲区
- 叠加分析
- 邻近分析
- 网络分析

### 4. 数据质检

检查地理数据的质量问题。

**检查项目：**
- 几何错误（自交、空洞）
- 属性完整性
- 拓扑错误
- 坐标系一致性

## 安装方法

1. 下载工具箱文件 `NEGIAO工具.atbx`
2. 在 ArcGIS Pro 中，右键点击"工具箱"
3. 选择"添加工具箱"
4. 浏览并选择下载的 `.atbx` 文件

## 使用示例

### 批量裁剪栅格

```
工具位置：NEGIAO工具箱 > 栅格批处理 > 批量裁剪

参数说明：
- 输入栅格文件夹：包含待裁剪栅格的文件夹
- 裁剪要素：用于裁剪的多边形要素类
- 输出文件夹：裁剪结果输出位置
- 保留裁剪区域外的像元：是/否
```

### 多环缓冲区

```
工具位置：NEGIAO工具箱 > 空间分析 > 多环缓冲区

参数说明：
- 输入要素：点、线或面要素
- 缓冲距离列表：以逗号分隔的距离值（如：100,200,500,1000）
- 输出要素类：结果多边形位置
- 溶解类型：全部溶解/按距离溶解/不溶解
```

## 代码示例

### 自定义工具开发

```python
import arcpy

class BatchClipTool:
    def __init__(self):
        self.label = "批量裁剪栅格"
        self.description = "将文件夹中的所有栅格按照指定范围裁剪"
        
    def getParameterInfo(self):
        params = []
        
        # 输入文件夹
        param0 = arcpy.Parameter(
            displayName="输入栅格文件夹",
            name="input_folder",
            datatype="DEFolder",
            parameterType="Required",
            direction="Input"
        )
        params.append(param0)
        
        # 裁剪要素
        param1 = arcpy.Parameter(
            displayName="裁剪要素",
            name="clip_feature",
            datatype="GPFeatureLayer",
            parameterType="Required",
            direction="Input"
        )
        params.append(param1)
        
        # 输出文件夹
        param2 = arcpy.Parameter(
            displayName="输出文件夹",
            name="output_folder",
            datatype="DEFolder",
            parameterType="Required",
            direction="Input"
        )
        params.append(param2)
        
        return params
    
    def execute(self, parameters, messages):
        input_folder = parameters[0].valueAsText
        clip_feature = parameters[1].valueAsText
        output_folder = parameters[2].valueAsText
        
        arcpy.env.workspace = input_folder
        rasters = arcpy.ListRasters()
        
        for i, raster in enumerate(rasters):
            arcpy.AddMessage(f"处理 {i+1}/{len(rasters)}: {raster}")
            output_path = os.path.join(output_folder, f"clip_{raster}")
            arcpy.management.Clip(raster, "", output_path, clip_feature, 
                                  clipping_geometry="ClippingGeometry")
        
        arcpy.AddMessage("批量裁剪完成！")
```

## 常见问题

### Q: 工具运行出错怎么办？

A: 请检查以下几点：
1. 输入数据路径是否正确
2. 输入数据是否有几何错误
3. 磁盘空间是否充足
4. 查看 ArcGIS Pro 的"消息"窗口获取详细错误信息

### Q: 如何自定义工具参数？

A: 可以修改工具箱中的 Python 脚本，调整参数定义和执行逻辑。

## 更新日志

- **v1.2** (2024-09-01): 新增数据质检工具
- **v1.1** (2024-07-15): 优化栅格批处理性能
- **v1.0** (2024-05-01): 初始版本发布

## 反馈与建议

如有问题或建议，请通过以下方式联系：

- GitHub: [NEGIAO](https://github.com/NEGIAO)
- Email: negiao@example.com
