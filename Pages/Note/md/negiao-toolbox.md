# NEGIAO ArcGIS Pro 工具箱

这是一个自定义的 ArcGIS Pro 工具箱文件 (`.atbx`)，其中集成了我在日常工作中开发和整理的地理处理工具。

## 1. 资源下载

<div style="padding: 20px; background: rgba(0, 217, 255, 0.1); border-radius: 8px; border-left: 4px solid var(--primary); margin: 20px 0;">
    <i class="fas fa-download" style="margin-right: 10px; color: var(--primary);"></i>
    <a href="../../Others/NEGIAO工具.atbx" download style="font-weight: bold; font-size: 1.1em; color: var(--primary); text-decoration: none;">点击下载 NEGIAO工具.atbx</a>
</div>

## 2. 工具箱简介

![NEGIAO工具箱预览](resources/工具箱截图.png)

该工具箱旨在提高 WebGIS 数据处理和空间分析的效率。最新版将脚本按功能拆分为三个分组：`Demo`、`NC数据` 与 `网络分析`，便于在 Catalog 中快速定位。

### 2.1 Demo 示例组
- **Demo**: 预留示例工具与测试脚本，方便验证运行环境是否配置正确，也可作为自定义工具开发的模板入口。

### 2.2 NC 数据处理
- **NC批量转栅格**: 将单个 NetCDF (.nc) 文件中的变量批量转换为 Raster 数据，自动命名输出栅格。
- **NC文件夹批量**: 针对整批 NetCDF 文件的栅格化流程，支持选择文件夹后一次性完成所有栅格输出。

### 2.3 网络分析与坐标处理
- **批量最短路径**: 自动化计算多组起终点间的最短路径，适合路网应急调度与物流选线。
- **网络分析图层构建**: 一键生成网络分析所需的节点、连线及权重字段，显著减少前期数据准备时间。
- **火星坐标<=>WGS-84坐标转换**: 在 GCJ-02 与 WGS-84 坐标系之间进行双向批量转换，解决国内数据偏移问题。
- **直线段转曲线段**: 将折线或直线要素平滑拟合为曲线段，可用于成果图的美化与道路几何调整。

## 3. 使用方法

### 3.1 环境要求
- **软件**: ArcGIS Pro 3.x 或更高版本
- **系统**: Windows 10/11

### 3.2 安装步骤

1. **下载文件**: 点击上方的下载链接，将 `NEGIAO工具.atbx` 文件保存到本地目录（建议保存到项目文件夹或固定的工具箱目录）。
2. **打开 ArcGIS Pro**: 启动你的 ArcGIS Pro 项目。
3. **打开目录窗格**: 确保 "Catalog" (目录) 窗格是可见的。如果未显示，请在顶部菜单栏点击 `View` -> `Catalog Pane`。
4. **添加工具箱**:
   - 在 Catalog 窗格中，找到 **Toolboxes** 节点。
   - 右键点击 **Toolboxes**，选择 **Add Toolbox** (添加工具箱)。
   - 在弹出的文件浏览窗口中，定位并选中刚才下载的 `NEGIAO工具.atbx`。
   - 点击 **OK**。
5. **运行工具**:
   - 展开新添加的 `NEGIAO工具`，你将看到其中包含的脚本工具。
   - 双击工具即可打开运行界面。

## 4. 注意事项

- 请确保你的 ArcGIS Pro 许可支持运行自定义 Python 脚本工具。
- 如果工具运行报错，请检查输入数据的路径是否包含特殊字符。
- 建议定期查看本页面获取工具箱的更新版本。

---

*最后更新时间: 2025-11-28*