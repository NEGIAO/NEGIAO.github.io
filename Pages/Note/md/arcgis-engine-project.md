# 🗺️ ArcGIS Engine 桌面 GIS 开发实战

> 基于 **C#** 和 **ArcGIS Engine 10.2.2** 的桌面地理信息系统开发项目。
> 实现了从基础地图操作到高级空间分析的完整功能闭环。

---

## 📚 项目概述

本项目是 GIS 开发课程的结课作业，旨在构建一个功能完善的桌面 GIS 系统。
源码已开源：[<i class="fab fa-github"></i> 前往 GitHub 仓库](https://github.com/NEGIAO/GIS-Engine-CSharp)

---

## 🌟 核心功能模块

### 1. 🗺️ 基础地图交互
- **地图浏览**：支持无级缩放、平移漫游、全图显示。
- **鹰眼导航**：提供鸟瞰图导航功能，快速定位主视图范围。
- **图层管理**：TOC（Table of Contents）控件实现图层的可见性控制与顺序调整。

### 2. 🔍 空间数据查询
- **属性查询**：查看矢量数据的属性表信息。
- **空间选择**：支持按矩形、多边形等几何形状选择地图要素。

### 3. 📏 空间量算工具
- **距离测量**：计算折线长度。
- **面积测量**：计算多边形覆盖面积。

### 4. 🎨 专题地图制作
支持多种专业的符号化渲染方式：
- **简单渲染** (Simple Renderer)
- **唯一值渲染** (Unique Value Renderer)
- **分级色彩渲染** (Class Breaks Renderer)
- **点密度渲染** (Dot Density Renderer)
- **比例符号渲染** (Proportional Symbol Renderer)
- **统计图表渲染** (Chart Renderer)

### 5. ✏️ 数据编辑
- 支持点、线、面要素的创建与几何编辑。
- 属性数据的录入与更新。

### 6. 🖨️ 制图与输出
- **地图整饰**：添加指北针、比例尺、图例等整饰要素。
- **地图导出**：将当前地图视图导出为高分辨率图片。

---

## 🛠️ 技术栈与开发环境

| 组件 | 版本/要求 | 说明 |
|------|-----------|------|
| **开发语言** | C# | 基于 .NET Framework |
| **IDE** | Visual Studio 2012 | 兼容旧版 ArcEngine SDK |
| **GIS 内核** | ArcGIS Engine 10.2.2 | 核心 GIS 组件库 |

### 💻 环境配置指南

> ⚠️ **注意**：由于 ArcGIS Engine 10.2.2 属于较旧版本，建议使用 **虚拟机** 隔离环境进行开发。

#### 1. 虚拟机环境准备
推荐使用 **VMware Workstation** 运行 **Windows 10** 系统。

- **VMware Workstation Pro 25H2**: [百度网盘下载](https://pan.baidu.com/s/15G0UjTjupaLpNkf0o6uEvQ) (提取码: GIS0)
- **Windows 10 ISO**: [百度网盘下载](https://pan.baidu.com/s/1mWKw_rjU0Kga_dT4qDvXdg) (提取码: GIS0)

#### 2. 开发工具安装
在虚拟机中依次安装 Visual Studio 2012 和 ArcGIS Engine 10.2.2。

- **Visual Studio 2012**: [百度网盘下载](https://pan.baidu.com/s/16_spKRn97O-H9OwWkYIvXg) (提取码: GIS0)
- **ArcGIS Engine 10.2.2**: [百度网盘下载](https://pan.baidu.com/s/1VjS9ih8xEt4h5UyVsINLSQ) (提取码: GIS0)

> 💡 **安装提示**：Engine 10.2.2 的安装流程可参考网盘中的 `安装流程.jpg` 或访问 [详细安装教程](https://malagis.com/arcgis-10-2-2-download.html)。

> ⚖️ **免责声明**：
> 上述链接提供的软件均为网络学习版本，**仅限个人学习研究使用，严禁用于商业用途**。

---

## 📂 项目结构解析

```text
Project_Root
├── 📁 Data (数据目录)
│   ├── CAD数据 (.dwg)
│   ├── Mxd文件 (Qingdao.mxd)
│   ├── SHP数据 (矢量数据)
│   ├── GDB数据 (.mdb/.gdb)
│   └── 栅格数据 (影像)
│
├── 📁 Engine_Dev (核心源码目录)
│   ├── 📄 GIS_2310130172_ (主程序)
│   │   ├── FrmMain.cs (主窗体逻辑)
│   │   ├── MapManager.cs (地图管理)
│   │   └── CreateFeatureToolClass.cs (要素编辑)
│   │
│   ├── 📄 自定义DLL_SymbologyMenu (符号化类库)
│   │   └── (封装各类渲染器)
│   │
│   └── 📄 自定义窗体控件 (功能模块)
│       ├── FormAttribute (属性表)
│       ├── 地图导出窗口
│       ├── 地图量测窗口
│       └── 统计选择集
│
└── 📁 课堂文件 (笔记与文档)
```

### 1. 📁 Data (数据目录)
> 存放项目运行所需的各类测试数据。

- **CAD数据**: `.dwg` 格式的 CAD 图纸。
- **Mxd文件**: 预配置好的地图文档 (`Qingdao.mxd`)。
- **SHP数据**: 包含点、线、面等多种矢量数据。
- **GDB数据**: 个人地理数据库 (`.mdb`) 和文件地理数据库 (`.gdb`)。
- **栅格数据**: 遥感影像等栅格文件。

### 2. 📁 Engine_Dev (核心源码目录)
> 项目的核心开发目录，包含完整的 Visual Studio 解决方案。

- **📄 GIS_2310130172_ (主程序)**
  - `FrmMain.cs`: 主窗体逻辑，集成了地图控件、TOC控件和鹰眼控件。
  - `MapManager.cs`: 地图管理类，处理图层加载与渲染。
  - `CreateFeatureToolClass.cs`: 负责要素创建与编辑的核心工具类。

- **📄 自定义DLL_SymbologyMenu (符号化类库)**
  - 封装了所有专题图渲染逻辑，独立编译为 DLL。
  - 包含 `UniqueValueRender` (唯一值)、`ClassBreakRender` (分级色彩) 等渲染器。

- **📄 自定义窗体控件 (功能模块)**
  - `FormAttribute`: 属性表查看与查询窗口。
  - `地图导出窗口`: 地图整饰与导出设置。
  - `地图量测窗口`: 距离与面积量测工具。
  - `统计选择集`: 空间统计分析窗口。

### 3. 📁 课堂文件
- 包含课程相关的笔记与说明文档。

---

## 🚀 快速开始

1. **环境准备**：确保安装 VS2012 和 ArcEngine 10.2.2 SDK。
2. **获取代码**：
   ```bash
   git clone https://github.com/NEGIAO/GIS-Engine-CSharp.git
   ```
3. **修复引用**：打开 `Engine_Dev.sln`，检查 `ESRI.ArcGIS.*` 引用是否丢失，必要时重新添加。
4. **运行测试**：使用 `Data` 目录下的 `Qingdao.mxd` 或 `community.mdb` 进行功能测试。

---
*注：本项目主要用于学习交流，代码中包含详细注释，适合 GIS 开发初学者参考。*