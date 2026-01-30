# ArcPy 学习笔记

这是关于 ArcPy 和空间分析的学习笔记集合。

## 1. ArcPy 基础

ArcPy是用于地理处理自动化的Python包，是ArcGIS的核心组件。

### 1.1 基本概念

- 地理处理工具
- 要素类和栅格
- 空间参考系统.

## 2. 代码示例

### 2.1 创建要素类并添加要素的完整示例

```python
import arcpy
import os

# --- 准备工作 ---
gdb_path = r"E:\arc_pro_project\C# Code 调试用\最短路径.gdb"
output_fc_name = "MyNewRoads"
output_fc_path = os.path.join(gdb_path, output_fc_name)
sr = arcpy.SpatialReference(4549) # 假设使用 CGCS2000 3度带坐标系

# 如果存在则删除
if arcpy.Exists(output_fc_path):
    arcpy.management.Delete(output_fc_path)

# 创建一个新的线要素类，包含一个文本字段
arcpy.CreateFeatureclass_management(gdb_path, output_fc_name, "POLYLINE", spatial_reference=sr)
arcpy.AddField_management(output_fc_path, "Name", "TEXT")

print("要素类创建完毕。")

# --- 核心：创建并写入一个新要素 ---

# 1. 在内存中创建几何对象 (Polyline)
#    一条线由一个或多个点数组(Array)构成
point_array = arcpy.Array([
    arcpy.Point(1000, 2000),
    arcpy.Point(1500, 2500),
    arcpy.Point(2000, 2000)
])
#    用点数组创建线对象
polyline_geom = arcpy.Polyline(point_array, sr)

# 2. 准备其他属性值
road_name = "新创建的道路"

# 3. 使用 InsertCursor "组合" 并写入
#    注意字段顺序: ["Name", "SHAPE@"]
with arcpy.da.InsertCursor(output_fc_path, ["Name", "SHAPE@"]) as cursor:
    # 准备一行数据，其顺序必须与上面的字段顺序完全对应
    # 第一个元素是 'Name' 字段的值 (一个字符串)
    # 第二个元素是 'SHAPE@' 字段的值 (一个Polyline几何对象)
    row_to_insert = (road_name, polyline_geom)
    
    # 插入这一行，arcpy会自动将几何对象写入.shp部分，属性写入.dbf部分
    cursor.insertRow(row_to_insert)

print(f"要素 '{road_name}' 已成功创建。")
```

### 2.2 代码关键点解析

**准备工作阶段：**
- 设置地理数据库路径和输出要素类名称
- 定义空间参考系统（CGCS2000 3度带坐标系）
- 检查并删除已存在的要素类
- 创建新的线要素类并添加文本字段

**核心创建要素阶段：**
- 使用 `arcpy.Array` 和 `arcpy.Point` 创建点序列
- 用点数组构建 `arcpy.Polyline` 几何对象
- 使用 `InsertCursor` 将几何对象和属性数据写入要素类

### 2.3 基础操作示例

```python
import arcpy

# 设置工作空间
arcpy.env.workspace = r"C:\GIS\data.gdb"

# 列出所有要素类
featureClasses = arcpy.ListFeatureClasses()
for fc in featureClasses:
    print(fc)
```
#怎么说呢
*笔记持续更新中...*