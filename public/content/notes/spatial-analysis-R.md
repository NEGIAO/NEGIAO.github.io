---
title: R 语言空间分析
date: 2024-08-20
tags: [R, 空间分析, 统计]
description: 使用 R 进行空间数据分析与可视化
icon: fas fa-chart-bar
---

# R 语言空间分析

## 简介

R 语言在空间数据分析领域有着丰富的生态系统，包括 `sf`、`terra`、`ggplot2` 等强大的包。

## 环境配置

```r
# 安装必要的包
install.packages(c("sf", "terra", "ggplot2", "dplyr", "tmap"))

# 加载包
library(sf)
library(terra)
library(ggplot2)
library(dplyr)
library(tmap)
```

## 矢量数据处理

### 读取和写入

```r
# 读取 Shapefile
cities <- st_read("data/cities.shp")

# 查看数据结构
print(cities)
str(cities)

# 写入 GeoJSON
st_write(cities, "output/cities.geojson", driver = "GeoJSON")
```

### 几何操作

```r
# 缓冲区分析
buffer_10km <- st_buffer(cities, dist = 10000)

# 空间连接
joined <- st_join(points, polygons)

# 空间交集
intersection <- st_intersection(layer1, layer2)

# 合并
union <- st_union(polygons)
```

### 坐标系转换

```r
# 查看当前坐标系
st_crs(cities)

# 转换坐标系
cities_wgs84 <- st_transform(cities, crs = 4326)
cities_utm <- st_transform(cities, crs = 32650)
```

## 栅格数据处理

### 使用 terra 包

```r
library(terra)

# 读取栅格
dem <- rast("data/dem.tif")

# 查看信息
print(dem)

# 栅格计算
slope <- terrain(dem, "slope", unit = "degrees")
aspect <- terrain(dem, "aspect", unit = "degrees")

# 重采样
dem_resample <- resample(dem, template_raster, method = "bilinear")

# 裁剪
dem_clip <- crop(dem, extent_vector)
dem_mask <- mask(dem_clip, polygon)
```

### 统计分析

```r
# 区域统计
zonal_stats <- extract(dem, polygons, fun = mean, na.rm = TRUE)

# 直方图
hist(dem, main = "DEM 高程分布", xlab = "高程 (m)")
```

## 空间可视化

### 使用 ggplot2

```r
ggplot(data = cities) +
    geom_sf(aes(fill = population), color = "white") +
    scale_fill_viridis_c() +
    theme_minimal() +
    labs(
        title = "城市人口分布",
        fill = "人口"
    )
```

### 使用 tmap

```r
# 交互式地图
tmap_mode("view")

tm_shape(dem) +
    tm_raster(palette = "terrain", title = "高程") +
tm_shape(cities) +
    tm_dots(col = "red", size = 0.5) +
    tm_text("name", size = 0.8)
```

## 空间统计

### 空间自相关

```r
library(spdep)

# 创建空间权重矩阵
nb <- poly2nb(polygons, queen = TRUE)
lw <- nb2listw(nb, style = "W")

# Moran's I 检验
moran.test(polygons$value, lw)

# 局部 Moran's I
local_moran <- localmoran(polygons$value, lw)
```

### 点模式分析

```r
library(spatstat)

# 创建点模式对象
ppp_obj <- as.ppp(st_coordinates(points), W = as.owin(boundary))

# 核密度估计
density_map <- density(ppp_obj, sigma = 1000)
plot(density_map, main = "点密度分布")
```

## 参考资源

- [sf 包文档](https://r-spatial.github.io/sf/)
- [terra 包文档](https://rspatial.org/terra/)
- [Geocomputation with R](https://r.geocompx.org/)
