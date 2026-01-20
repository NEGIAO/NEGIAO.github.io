---
title: Google Earth Engine 课程笔记
date: 2024-07-10
tags: [GEE, 遥感, JavaScript]
description: GEE 遥感数据处理与分析课程学习笔记
icon: fas fa-globe
---

# Google Earth Engine 课程笔记

## 简介

Google Earth Engine (GEE) 是一个用于分析地理空间数据的云计算平台。它提供了海量的卫星影像和地理空间数据集，以及强大的计算能力。

## 基础概念

### 数据类型

- **Image**: 单个栅格影像
- **ImageCollection**: 影像集合
- **Feature**: 单个矢量要素
- **FeatureCollection**: 要素集合
- **Geometry**: 几何对象

### 代码编辑器

访问 [GEE Code Editor](https://code.earthengine.google.com/) 开始编写代码。

## 常用操作

### 加载影像

```javascript
// 加载单个影像
var image = ee.Image('LANDSAT/LC08/C02/T1_L2/LC08_123032_20200815');

// 加载影像集合
var collection = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')
    .filterDate('2020-01-01', '2020-12-31')
    .filterBounds(geometry);

// 取中值合成
var median = collection.median();
```

### NDVI 计算

```javascript
// 使用 Landsat 8 计算 NDVI
function calculateNDVI(image) {
    var nir = image.select('SR_B5');
    var red = image.select('SR_B4');
    var ndvi = nir.subtract(red).divide(nir.add(red)).rename('NDVI');
    return image.addBands(ndvi);
}

var ndviImage = calculateNDVI(image);

// 可视化参数
var ndviVis = {
    min: -1,
    max: 1,
    palette: ['blue', 'white', 'green']
};

Map.addLayer(ndviImage.select('NDVI'), ndviVis, 'NDVI');
```

### 云掩膜处理

```javascript
// Landsat 8 云掩膜函数
function maskL8sr(image) {
    var cloudShadowBitMask = (1 << 4);
    var cloudsBitMask = (1 << 3);
    var qa = image.select('QA_PIXEL');
    var mask = qa.bitwiseAnd(cloudShadowBitMask).eq(0)
        .and(qa.bitwiseAnd(cloudsBitMask).eq(0));
    return image.updateMask(mask);
}

var cleanCollection = collection.map(maskL8sr);
```

### 统计分析

```javascript
// 区域统计
var stats = ndviImage.select('NDVI').reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: studyArea,
    scale: 30,
    maxPixels: 1e9
});

print('平均 NDVI:', stats.get('NDVI'));

// 时间序列分析
var timeSeries = collection.map(function(image) {
    var mean = image.select('SR_B4').reduceRegion({
        reducer: ee.Reducer.mean(),
        geometry: studyArea,
        scale: 30
    });
    return ee.Feature(null, mean)
        .set('date', image.date().format('YYYY-MM-dd'));
});

print(timeSeries);
```

### 导出数据

```javascript
// 导出影像到 Google Drive
Export.image.toDrive({
    image: ndviImage.select('NDVI'),
    description: 'NDVI_Export',
    folder: 'GEE_Exports',
    region: studyArea,
    scale: 30,
    maxPixels: 1e13
});

// 导出矢量数据
Export.table.toDrive({
    collection: featureCollection,
    description: 'Features_Export',
    folder: 'GEE_Exports',
    fileFormat: 'SHP'
});
```

## 高级功能

### 机器学习分类

```javascript
// 准备训练数据
var training = image.select(bands).sampleRegions({
    collection: trainingPoints,
    properties: ['class'],
    scale: 30
});

// 训练随机森林分类器
var classifier = ee.Classifier.smileRandomForest(50).train({
    features: training,
    classProperty: 'class',
    inputProperties: bands
});

// 分类
var classified = image.select(bands).classify(classifier);

Map.addLayer(classified, {min: 0, max: 3, palette: ['green', 'yellow', 'blue', 'red']}, '分类结果');
```

### 变化检测

```javascript
// 两期影像变化检测
var before = ee.Image('...');
var after = ee.Image('...');

var difference = after.subtract(before);
var changeThreshold = difference.abs().gt(0.2);

Map.addLayer(changeThreshold, {palette: ['white', 'red']}, '变化区域');
```

## 参考资料

- [GEE 官方文档](https://developers.google.com/earth-engine/guides)
- [GEE 数据目录](https://developers.google.com/earth-engine/datasets)
- [Awesome GEE](https://github.com/giswqs/Awesome-GEE)
