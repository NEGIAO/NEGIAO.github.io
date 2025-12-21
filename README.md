# NEGIAO.github.io

> 🌟 个人主页与技术作品集，聚焦 WebGIS、地理空间数据可视化与学习工具的静态网站。  
> 🌐 **在线访问**：[https://negiao.github.io/](https://negiao.github.io/)

## Table of Contents
- [Overview](#overview)
- [Quick Links](#quick-links)
- [Feature Highlights](#feature-highlights)
- [Directory Map](#directory-map)
- [Key Assets](#key-assets)
- [Development & Authoring](#development--authoring)
- [Technical Stack](#technical-stack)
- [Changelog](#changelog)
- [Roadmap](#roadmap)

## Overview
- 自适应深色主题站点，整合课程表、笔记、工具箱、词汇学习与可视化展示。
- 所有页面使用统一 favicon (`images/icon.png`)，并由 `Pages/main-enhanced.js` 在运行时保障回退。
- 宝藏小城、WebGIS、技术笔记等子项目独立维护，便于扩展与部署。

## Quick Links
| 模块              | 路径                                   | 功能亮点                                                |
| ----------------- | -------------------------------------- | ------------------------------------------------------- |
| 🏠 网站首页        | `index.html`                           | 个人介绍、项目概览、导航入口                            |
| 📅 智能课程表      | `Pages/schedule.html`                  | 实时课务状态、呼吸灯效果、移动端适配                    |
| 📝 技术笔记索引    | `Pages/notes.html`                     | Markdown 渲染、自动目录、语法高亮                       |
| ✏️ Markdown 编辑器 | `Pages/markdown_editor.html`           | 实时预览、侧栏布局、辅助按钮                            |
| 📚 英语学习系统    | `Pages/Note/word-learning-record.html` | 600+ 词汇库、随机测试、统计面板                         |
| 🧰 NEGIAO 工具箱   | `Pages/Note/negiao-toolbox.html`       | ArcGIS Pro 工具箱说明与下载                             |
| 🖼️ 技术成果画廊    | `Pages/Note/gallery.html`              | 多图展示、图集元数据 (`resources/display`)              |
| 🗺️ WebGIS 演示     | `WebGIS/index.html`                    | OpenLayers 地图、交互式信息栏                           |
| 🏆 宝藏小城专题    | `Geoscene_宝藏小城/awesome.html`       | ECharts/Pyecharts 可视化合集                            |
| 🚀 WebGIS Vue3     | `WebGIS_henu_trials_5_28_vue3/`        | 基于 Vue3 + Vite + Cesium/OpenLayers 的现代 WebGIS 项目 |

## Feature Highlights

### Interface & UX
- 响应式布局覆盖桌面、平板与移动端。
- 渐变标题、毛玻璃卡片与动画过渡带来统一视觉体验。
- 导航栏支持滚动隐藏、移动端抽屉菜单、平滑滚动定位。

### Learning & Study Tools
- 课程表支持秒级时间同步与课程状态自动识别，含呼吸灯提示。
- 英语学习系统提供分主题高阶词库、例句、记忆技巧与互动测试。
- **数据同步**：通过 Python 脚本自动将 HTML 中的 Markdown 表格同步至 JSON 题库，实现数据源统一。
- Markdown 编辑器配套实时预览、复制/清空等基础写作能力。

### Data Visualization (Geoscene)
- 各城市词云、季节/年内/年际变化图表直接由 Pyecharts 导出。
- `Geoscene_宝藏小城/wordcloud.html` 汇总城市词云，便于快速浏览。
- 每个子页面均嵌入 favicon 链接，确保独立访问时的一致性。

### WebGIS & Maps
- **WebGIS (Classic)**: `WebGIS/index.html` 结合 OpenLayers、定制顶栏与信息面板。
- **WebGIS (Vue3)**: `WebGIS_henu_trials_5_28_vue3/` 采用现代前端技术栈 (Vue3, Vite) 构建，集成 Cesium 三维地球与 OpenLayers 二维地图。
- 静态资源拆分为 `assets/`、`images/` 与核心库 (`ol.js`, `ol.css`)。
- 支持多底图切换、热点提示、学院新闻联动展示。

### Automation & Tooling
- `Others/NEGIAO工具.atbx` 提供 ArcGIS Pro 自定义工具箱及示例。
- `Scripts_based_on_cloud/Python_based_on_cloud.py` 记录云端自动化脚本范例。
- `Pages/Note/negiao-toolbox.html` 详细说明工具箱功能、安装方法与截图。
- **本地预览工具**: `start_server.bat` 一键启动本地 Python HTTP 服务器，解决 CORS 跨域问题。

### Performance & Infrastructure
- `.htaccess` 配置 CSS/JS/图片缓存期限，兼顾更新与性能。
- `Pages/main-enhanced.js` 精简事件监听，使用 requestAnimationFrame 优化滚动。
- 首屏关键 CSS 内联加载，其余资源按需加载或延迟执行。

### Global Enhancements
- 全站 favicon 在构建期与运行时双重注入（HTML `<link>` + JS fallback）。
- `notes-toc.js`/`notes-toc.min.js` 自动生成目录并区分标题层级。
- CDN 资源仅用于字体与图表库，站点主体资源自托管。

## Directory Map
```
.
├── .github/                  # GitHub Actions 工作流配置
├── .idea/                    # JetBrains IDE 配置文件
├── .vscode/                  # VS Code 编辑器配置
├── Geoscene_宝藏小城/         # Pyecharts 数据可视化专题项目
│   ├── 季节变化/             # 各城市气温/降水季节变化图表
│   │   ├── 利川市_季节变化.html
│   │   ├── 淮安市_季节变化.html
│   │   ├── 荣成市_季节变化.html
│   │   ├── 象山县_季节变化.html
│   │   ├── 铜仁市_季节变化.html
│   │   └── 隰县_季节变化.html
│   ├── 年内变化/             # 各城市气象数据年内变化分析
│   │   ├── 利川市_年内变化.html
│   │   ├── 淮安市_年内变化.html
│   │   ├── 荣成市_年内变化.html
│   │   ├── 象山县_年内变化.html
│   │   ├── 铜仁市_年内变化.html
│   │   └── 隰县_年内变化.html
│   ├── 年际变化/             # 各城市气象数据年际趋势分析
│   │   ├── 利川市_年际变化.html
│   │   ├── 淮安市_年际变化.html
│   │   ├── 荣成市_年际变化.html
│   │   ├── 象山县_年际变化.html
│   │   ├── 铜仁市_年际变化.html
│   │   └── 隰县_年际变化.html
│   ├── awesome.html          # 可视化图表总览页面
│   ├── wordcloud.html        # 城市印象词云集合页
│   ├── 词云图_利川.html
│   ├── 词云图_淮安.html
│   ├── 词云图_荣成.html
│   ├── 词云图_象山.html
│   ├── 词云图_铜仁.html
│   └── 词云图_隰县.html
├── images/                   # 站点全局图片资源（图标、背景等）
│   ├── icon.png              # 网站 favicon 主图标
│   ├── icon1.png             # 备用图标
│   ├── typing.svg            # 首页动态打字效果 SVG（本地化）
│   ├── 周迪.png
│   ├── 地球日活动.jpg
│   ├── 学部大会.png
│   ├── 年级大会.jpg
│   └── 院徽.png
├── Others/                   # 其他工具与文档资源
│   ├── NEGIAO工具.atbx       # ArcGIS Pro 自定义工具箱文件
│   ├── NEGIAO工具_V1_0_1.zip # 工具箱压缩包
│   ├── 使用说明.txt          # 工具箱使用说明文档
│   └── 流程图/               # 项目相关流程图
│       └── GEE流程图.drawio
├── Pages/                    # 站点主要子页面与公共资源
│   ├── Note/                 # 技术笔记与学习记录归档
│   │   ├── resources/        # 笔记引用的图片与附件资源
│   │   │   ├── display/      # 图片展示资源目录
│   │   │   ├── nanyang_feature_importance.png # GEE作业图片
│   │   │   └── ...
│   │   ├── ZhouDi_learning/  # 周迪个人学习记录子目录
│   │   │   ├── word-learning-record.html
│   │   │   └── word-list.json
│   │   ├── arcgis-engine-project.html # ArcGIS Engine 项目笔记
│   │   ├── arcgis-engine.html # ArcGIS Engine 开发笔记
│   │   ├── ArcPy.html        # ArcPy 自动化脚本笔记
│   │   ├── gallery.html      # 技术成果展示画廊
│   │   ├── gee-coursework.html # GEE结课作业 (新增)
│   │   ├── ml-dl-learning.html # 机器学习与深度学习笔记
│   │   ├── negiao-toolbox.html # 工具箱详细介绍页
│   │   ├── note-template.html # 笔记页面标准模板
│   │   ├── spatial-analysis-R.html # R 语言空间分析笔记
│   │   ├── word-learning-record.html # 英语词汇学习与测试系统
│   │   └── word-list.json    # 英语学习系统核心词库数据
│   ├── avatar.jpg            # 个人头像图片
│   ├── main-enhanced.js      # 全站核心交互脚本（导航、动画、favicon）
│   ├── markdown_editor.html  # 在线 Markdown 编辑器工具
│   ├── notes-toc.js          # 笔记目录自动生成与滚动同步脚本
│   ├── notes.html            # 技术笔记索引主页
│   ├── schedule.html         # 智能课程表页面
│   └── style.css             # 全站通用样式表
├── Scripts_based_on_cloud/   # 云端自动化脚本存放区
│   └── Python_based_on_cloud.py # 自动化处理与数据同步脚本
├── WebGIS/                   # 基于原生 JS/OpenLayers 的 WebGIS 项目
│   ├── assets/               # WebGIS 项目静态资源（Vite 构建产物）
│   │   ├── index-CAyyoyHz.js
│   │   └── index-jh0DpwuT.css
│   ├── images/               # WebGIS 项目图片资源
│   ├── index.html            # WebGIS 项目入口
│   ├── ol.css                # OpenLayers 样式库
│   └── ol.js                 # OpenLayers 核心库
├── .htaccess                 # Apache 服务器配置文件（缓存策略等）
├── index.html                # 网站首页（个人作品集入口）
├── README.md                 # 项目说明文档（本文件）
├── start_server.bat          # Windows 本地预览启动脚本
└── 大河南.jpg                # 河南地图图片资源
```

**注**：`WebGIS_henu_trials_5_28_vue3/` 项目位于工作区根目录，但作为独立的 Vue3 项目维护，具有完整的前端工程结构。

## Key Assets
| 类型            | 路径                        | 用途                                     |
| --------------- | --------------------------- | ---------------------------------------- |
| Favicon         | `images/icon.png`           | 全站浏览器图标，JS fallback 亦引用该文件 |
| 头像图片        | `Pages/avatar.jpg`          | 首页与各页面展示的个人头像               |
| 动态效果        | `images/typing.svg`         | 首页打字动画效果（本地化优化）           |
| 主样式          | `Pages/style.css`           | 全站主题与组件样式                       |
| 导航/交互脚本   | `Pages/main-enhanced.js`    | 导航栏、移动菜单、平滑滚动、favicon 注入 |
| 目录脚本        | `Pages/notes-toc.js`        | 笔记页面自动目录生成与滚动同步           |
| 词汇数据        | `Pages/Note/word-list.json` | 英语学习系统题库与统计数据源             |
| 工具箱          | `Others/NEGIAO工具.atbx`    | ArcGIS Pro 定制工具集合                  |
| WebGIS 构建产物 | `WebGIS/assets/*`           | Vite 打包后的 JS/CSS                     |
| 启动脚本        | `start_server.bat`          | Windows 下一键启动本地预览服务器         |

## Development & Authoring
- 推荐使用 VS Code，确保保存为 UTF-8 与 Windows 兼容行结尾。
- 静态页面新增后需在 `<head>` 内同步添加 favicon 链接（已由脚本兜底）。
- Pyecharts 导出的可视化位于 `Geoscene_宝藏小城`，如需更新请在 Python 中重新生成。
- WebGIS 子项目可通过原始工程重新构建，再覆盖 `WebGIS/` 下产物。

### Local Preview
**推荐方式**：直接双击根目录下的 `start_server.bat` 脚本。

或者手动运行：
```powershell
python -m http.server 8080
# 打开 http://localhost:8080 访问首页
```
- GitHub Pages 会自动从 `main` 分支根目录部署站点。

## Technical Stack
- **HTML5 / CSS3 / JavaScript (ES6+)**：核心页面与交互逻辑。
- **Vue 3 / Vite**：现代 WebGIS 项目构建。
- **ECharts & Pyecharts**：宝藏小城数据可视化。
- **OpenLayers / Cesium**：WebGIS 地图渲染与交互（2D/3D）。
- **Highlight.js / Marked**：笔记语法高亮与 Markdown 渲染（已优化 CDN 源）。
- **Python**：云端脚本、词汇数据处理、本地服务器。

## Changelog

### 2025-12-17 · v1.5.2
- **首页性能与代码质量优化**：
    - **CSS 变量规范化**：补充完整的 CSS 变量定义（添加 `--gradient-accent`、`--gradient-success`、`--space-xs`、`--radius-sm` 等），提升样式系统一致性。
    - **Meta 标签优化**：调整 meta 标签顺序，将 `theme-color` 前置，移除重复定义，提升页面加载性能。
    - **资源版本管理**：更新 CSS/JS 资源缓存版本号至 `202512`，确保用户获取最新优化版本。
    - **代码注释改进**：优化关键代码注释说明，提高代码可维护性。
    - **笔记 TOC 功能增强**：改进技术笔记页面的目录（TOC）滚动同步功能，提升阅读体验。

### 2025-12-12 · v1.5.1
- **性能与稳定性优化**：
    - **CDN 源切换**：将全站笔记页面的 `highlight.js` 和 `marked.js` 依赖源从 `bootcdn` 切换至 `cdnjs.loli.net`，显著提升国内访问速度与稳定性。
    - **资源本地化**：将首页 Hero 区域的动态打字效果 SVG (`typing.svg`) 本地化存储至 `images/` 目录，彻底解决外部服务不稳定导致的加载缓慢问题。
    - **WebGIS 样式微调**：优化 Vue3 WebGIS 项目 (`WebGIS_henu_trials_5_28_vue3`) 的 Cesium 容器样式与布局。

### 2025-12-06 · v1.5.0
- **英语学习系统重大更新**：
    - 实现 HTML Markdown 表格到 JSON 数据的全量同步。
    - 词汇库扩容至 600+，覆盖 2025 年 9 月至今的所有学习记录。
    - 修复本地开发时的 CORS 跨域问题，新增 `start_server.bat` 启动脚本。
- **WebGIS 维护**：
    - 修复 Vue3 项目中的 Google Maps 图层 URL 问题。
    - 更新 TopBar 导航链接。
- **基础设施**：
    - 优化 `main-enhanced.js`，引入 IntersectionObserver 提升滚动性能。
    - 修复本地图片路径引用问题。

### 2025-11-14 · v1.4.6
- 英语学习系统新增 10 个词汇，总量达到 370。
- 更新学习周期统计与主题标签，覆盖 21 大主题。
- 全站补充 `rel="shortcut icon"` 链接，配合脚本回退确保 favicon 生效。

### 2025-11-11 · v1.4.4
- 扩充生物医学相关词汇，完善日均进度统计。
- 优化 Markdown 页面目录样式与滚动体验。

### 2025-09-23 · v1.3.0
- 互动单词测试系统上线：随机出题、正确自动跳题、统计面板。
- 词库扩展至 68 个词汇，为后续 300+ 词汇扩容打基础。

<details>
<summary>Earlier Releases</summary>

- **2025-09-16 · v1.2.1**：新增 8 个词汇，清理课程表冗余样式。
- **2025-09-14 · v1.2.0**：考研高阶词汇计划上线，按七大主题分类。
- **2025-09-10 · v1.1.0**：词汇记录系统发布，课程表动画优化。
- **2025-09-07 · v1.0.8**：智能课程表首版上线。

</details>

## Roadmap
- ✅ 完成考研英语词汇核心功能、互动测试与词库扩容（370/500）。
- ✅ 智能课程表性能与体验迭代。
- 🔄 扩展词汇至 500+，新增发音模块、错题本与进度可视化。
- 🔄 增补 WebGIS 功能组件与更多专题可视化案例。
- 🔄 构建全站搜索、多语言与访问统计面板。

---

**建议使用现代浏览器（Chrome / Firefox / Safari）以获得最佳体验。**
