# NEGIAO.github.io

> 🌟 个人主页与技术作品集，聚焦 WebGIS、地理空间数据可视化与学习工具的静态网站。  
> 🌐 **在线访问**：[https://negiao.github.io/](https://negiao.github.io/)

## 目录/Table of Contents
- [Overview](#overview)
- [Quick Links](#quick-links)
- [Feature Highlights](#feature-highlights)
- [Directory Map](#directory-map)
- [Key Assets](#key-assets)
- [Development & Authoring](#development--authoring)
- [Technical Stack](#technical-stack)
- [Changelog](#changelog)
- [Roadmap](#roadmap)

## 概况/Overview
- 自适应深色主题站点，整合课程表、笔记、工具箱、词汇学习与可视化展示。
- 所有页面使用统一 favicon (`/images/icon.webp`)，由 `Pages/public/main-enhanced.js` 在运行时保障回退。
- 导航栏工具按钮（主题切换、语言切换、分享）统一由 `Pages/navbar-widgets/` 模块管理。
- 笔记系统采用 `note-viewer/` 核心三件套 + `plugins/` 插件架构，按 md 文件名按需加载交互功能。
- 词汇学习系统支持 md 物理拆分 + 按月归档 + 前端按需加载，主文件仅保留最近 7 天。
- 宝藏小城、WebGIS、技术笔记等子项目独立维护，便于扩展与部署。

## 速览/Quick Links
| 模块              | 路径                                              | 功能亮点                                                |
| ----------------- | ------------------------------------------------- | ------------------------------------------------------- |
| 🏠 网站首页        | `index.html`                                      | 个人介绍、项目概览、导航入口                            |
| 📅 智能课程表      | `Pages/schedule.html`                             | 实时课务状态、呼吸灯效果、移动端适配                    |
| 📝 技术笔记索引    | `Pages/notes.html`                                | 统一笔记渲染器、自动目录、语法高亮                      |
| ✏️ Markdown 编辑器 | `Pages/Note/markdown_editor.html`                 | 实时预览、侧栏布局、辅助按钮                            |
| 📚 英语词库笔记    | `Note/note-viewer/note-viewer.html?note=word-learning-record` | 3500+ 词汇库、释义遮挡、按月存档按需加载   |
| 🎯 单词测试        | `Pages/Note/word-quiz.html`                       | 随机抽题、答对自动跳转、正确率统计                      |
| 🧰 NEGIAO 工具箱   | `Note/note-viewer/note-viewer.html?note=negiao-toolbox` | ArcGIS Pro 工具箱说明与下载                        |
| 🖼️ 技术成果画廊    | `Pages/Note/gallery.html`                         | 多图展示、图集元数据 (`resources/display`)              |
| 🗺️ WebGIS 演示     | `WebGIS/index.html`                               | OpenLayers 地图、交互式信息栏                           |
| 🏆 宝藏小城专题    | `Geoscene_宝藏小城/awesome.html`                  | ECharts/Pyecharts 可视化合集                            |
| 🚀 WebGIS Vue3     | `WebGIS_henu_trials_5_28_vue3/`                   | 基于 Vue3 + Vite + Cesium/OpenLayers 的现代 WebGIS 项目 |

## 特色/Feature Highlights

### UI/Interface & UX
- 响应式布局覆盖桌面、平板与移动端。
- 渐变标题、毛玻璃卡片与动画过渡带来统一视觉体验。
- 导航栏支持滚动隐藏、移动端抽屉菜单、平滑滚动定位。

### 工具/Learning & Study Tools
- 课程表支持秒级时间同步与课程状态自动识别，含呼吸灯提示。
- 英语学习系统提供分主题高阶词库、例句、记忆技巧与互动测试。
- 词汇笔记支持释义/例句折叠模式：默认折叠、支持单行展开，并提供顶部“一键展开/遮挡”全局切换。
- `note-viewer.html` 新增 Markdown 表格移动端自适应增强：超宽表格可横向滑动，避免列内容被裁切。
- `note-viewer.html` 与 `markdown_editor.html` 均已支持 MathJax，可渲染复杂 LaTeX 公式。
- LaTeX 学习内容已并入 `markdown_editor.html` 示例区域，可边写边看即时效果。
- **数据同步**：通过 Python 脚本自动将 HTML 中的 Markdown 表格同步至 JSON 题库，实现数据源统一。
- Markdown 编辑器配套实时预览、复制/清空等基础写作能力。

### 数据可视化/Data Visualization (Geoscene)
- 各城市词云、季节/年内/年际变化图表直接由 Pyecharts 导出。
- `Geoscene_宝藏小城/wordcloud.html` 汇总城市词云，便于快速浏览。
- 每个子页面均嵌入 favicon 链接，确保独立访问时的一致性。

### WebGIS & Maps
- **WebGIS (Classic)**: `WebGIS/index.html` 结合 OpenLayers、定制顶栏与信息面板。
- **WebGIS (Vue3)**: `WebGIS_henu_trials_5_28_vue3/` 采用现代前端技术栈 (Vue3, Vite) 构建，集成 Cesium 三维地球与 OpenLayers 二维地图。
- 静态资源拆分为 `assets/`、`images/` 与核心库 (`ol.js`, `ol.css`)。
- 支持多底图切换、热点提示、学院新闻联动展示。

### 自动化/Automation & Tooling
- `Others/NEGIAO工具.atbx` 提供 ArcGIS Pro 自定义工具箱及示例。
- `Scripts_based_on_cloud/Python_based_on_cloud.py` 记录云端自动化脚本范例。
- `Pages/Note/negiao-toolbox.html` 详细说明工具箱功能、安装方法与截图。
- **本地预览工具**: `start_server.bat` 一键启动本地 Python HTTP 服务器，解决 CORS 跨域问题。

### 性能优化/Performance & Infrastructure
- `.htaccess` 配置 CSS/JS/图片缓存期限，兼顾更新与性能。
- `Pages/main-enhanced.js` 精简事件监听，使用 requestAnimationFrame 优化滚动。
- 首屏关键 CSS 内联加载，其余资源按需加载或延迟执行。

### 笔记系统/Note System Architecture
- **统一渲染器架构**：采用 `note-viewer/note-viewer.html` 作为通用 Markdown 渲染入口，通过 URL 参数动态加载笔记内容。
- **插件化增强**：`plugins/` 目录支持文件夹形式插件（`{name}/index.js` + `styles.css`），按 md 名称自动匹配，loader 自动加载 `styles.css` 并提供 `NotePluginUtils` 公共工具。
- **词汇学习插件**：整合自定义渲染、释义遮挡（一键展开/遮挡）、月度存档按需加载于一体。
- **内容与样式分离**：所有笔记内容以独立 `.md` 文件存储于 `Pages/Note/md/` 目录，便于编辑、版本控制与维护。
- **自动目录生成**：基于 `notes-toc.js` 实时解析 Markdown 标题层级，生成可折叠的侧边导航栏。
- **代码高亮**：集成 Highlight.js，支持 100+ 编程语言的语法高亮显示。

### 增强/Global Enhancements
- 全站 favicon 在构建期与运行时双重注入（HTML `<link>` + JS fallback）。
- `notes-toc.js`/`notes-toc.min.js` 自动生成目录并区分标题层级。
- CDN 资源仅用于字体与图表库，站点主体资源自托管。

## 文件树/Directory Map
```
.
├── .github/                                          # GitHub Actions 工作流配置
├── .idea/                                            # JetBrains IDE 配置文件
├── .vscode/                                          # VS Code 编辑器配置
├── Geoscene_宝藏小城/                                # Pyecharts 数据可视化专题项目
│   ├── 季节变化/                                     # 各城市气温/降水季节变化图表
│   │   ├── 利川市_季节变化.html
│   │   ├── 淮安市_季节变化.html
│   │   ├── 荣成市_季节变化.html
│   │   ├── 象山县_季节变化.html
│   │   ├── 铜仁市_季节变化.html
│   │   └── 隰县_季节变化.html
│   ├── 年内变化/                                     # 各城市气象数据年内变化分析
│   │   ├── 利川市_年内变化.html
│   │   ├── 淮安市_年内变化.html
│   │   ├── 荣成市_年内变化.html
│   │   ├── 象山县_年内变化.html
│   │   ├── 铜仁市_年内变化.html
│   │   └── 隰县_年内变化.html
│   ├── 年际变化/                                     # 各城市气象数据年际趋势分析
│   │   ├── 利川市_年际变化.html
│   │   ├── 淮安市_年际变化.html
│   │   ├── 荣成市_年际变化.html
│   │   ├── 象山县_年际变化.html
│   │   ├── 铜仁市_年际变化.html
│   │   └── 隰县_年际变化.html
│   ├── awesome.html                                  # 可视化图表总览页面
│   ├── wordcloud.html                                # 城市印象词云集合页
│   ├── 词云图_利川.html
│   ├── 词云图_淮安.html
│   ├── 词云图_荣成.html
│   ├── 词云图_象山.html
│   ├── 词云图_铜仁.html
│   └── 词云图_隰县.html
├── images/                                           # 站点全局图片资源（图标、背景等）
│   ├── icon.webp                                     # 网站 favicon 主图标
│   ├── icon1.webp                                    # 备用图标
│   ├── typing.svg                                    # 首页动态打字效果 SVG（本地化）
│   ├── images_to_webp.py                             # 图片格式批量转换脚本
│   ├── 周迪.webp
│   ├── 地球日活动.webp
│   ├── 大河南.webp
│   ├── 学部大会.webp
│   ├── 年级大会.webp
│   └── 院徽.webp
├── Others/                                           # 其他工具与文档资源
│   ├── NEGIAO工具.atbx                               # ArcGIS Pro 自定义工具箱文件
│   ├── NEGIAO工具_V1_0_1.zip                         # 工具箱压缩包
│   ├── NEGIAO工具_V1_0_1/                            # 工具箱解压目录
│   ├── 使用说明.txt                                  # 工具箱使用说明文档
│   ├── decoder.html                                  # 二维码解析、部署
│   └── 流程图/                                       # 项目相关流程图
│       └── GEE流程图.drawio
├── Pages/                                            # 站点主要子页面与公共资源
│   ├── navbar-widgets/                               # 导航栏工具按钮模块（主题/语言/分享）
│   │   ├── index.js                                  # 统一入口，自动加载所有 widget
│   │   ├── theme-toggle.js                           # 浅色/深色主题切换
│   │   ├── i18n-toggle.js                            # 中英文语言切换
│   │   └── share-btn.js                              # 分享按钮（复制当前页 URL）
│   ├── Note/                                         # 技术笔记与学习记录归档
│   │   ├── note-viewer/                              # 统一笔记渲染器（核心三件套）
│   │   │   ├── note-viewer.html                      # 渲染入口（URL 参数加载 md）
│   │   │   ├── note-viewer.js                        # 渲染器核心逻辑（fetch、marked、hljs、MathJax）
│   │   │   ├── note-viewer.css                       # 渲染器页面样式
│   │   │   └── notes-config.json                     # 笔记元数据配置（标题、描述、分类、图标）
│   │   ├── plugins/                                  # 笔记增强插件系统（按 md 名称按需加载）
│   │   │   ├── loader.js                             # 插件加载器（NotePluginUtils + 生命周期 + 自动 CSS）
│   │   │   ├── Google_tiles/                         # Google Tiles 地图预览插件
│   │   │   │   ├── index.js                          # 插件入口（OpenLayers 地图预览面板 + 降级提示）
│   │   │   │   └── styles.css                        # 地图预览面板样式（loader 自动加载）
│   │   │   └── word-learning-record/                 # 英语词汇学习插件
│   │   │       ├── index.js                          # 插件入口（渲染 + 释义遮挡 + 存档加载 + 生命周期）
│   │   │       └── styles.css                        # 动态注入样式（loader 自动加载）
│   │   ├── md/                                       # Markdown 笔记内容目录
│   │   │   ├── word-learning-archive/                # 词汇学习月度存档（按需加载）
│   │   │   │   ├── index.json                        # 存档文件索引（倒序排列）
│   │   │   │   ├── 2025-09.md ~ 2026-05.md          # 每月一个存档文件（日期倒序）
│   │   │   ├── word-learning-record.md               # 英语词汇学习记录（最近 7 天，自动更新）
│   │   │   ├── ZhouDi_learning/                      # 周迪学习记录子目录
│   │   │   │   └── word-learning-record.md
│   │   │   ├── AmapAPI.md                            # 高德地图 API 笔记
│   │   │   ├── ArcPy.md                              # ArcPy 自动化脚本笔记
│   │   │   ├── Docker.md                             # Docker 容器技术笔记
│   │   │   ├── Google_tiles.md                       # Google 地图瓦片接口详解
│   │   │   ├── Hexo.md                               # Hexo 博客框架笔记
│   │   │   ├── WebKnowledge.md                       # Web 前端知识整理
│   │   │   ├── WebService.md                         # Web 服务开发笔记
│   │   │   ├── WebSite_Deploy.md                     # 网站部署指南
│   │   │   ├── Wind2D_Prompt.md                      # Wind2D 提示词笔记
│   │   │   ├── arcgis-engine.md                      # ArcGIS Engine 开发笔记
│   │   │   ├── arcgis-engine-project.md              # ArcGIS Engine 项目笔记
│   │   │   ├── calculus-key-points.md                # 微积分重要结论与复习笔记
│   │   │   ├── gee-coursework.md                     # GEE 结课作业
│   │   │   ├── linearAlgebra.md                      # 线性代数笔记
│   │   │   ├── ml-dl-learning.md                     # 机器学习与深度学习笔记
│   │   │   ├── negiao-toolbox.md                     # 工具箱详细介绍
│   │   │   ├── non-standard-xyz-and-gcj02.md         # 非标准 XYZ 瓦片与火星坐标系
│   │   │   ├── note-template.md                      # 笔记模板
│   │   │   ├── qrcode-generator.md                   # 二维码生成器说明
│   │   │   ├── spatial-analysis-R.md                 # 机器学习与智能算法（R）
│   │   │   ├── vue3-webgis-practice-essentials.md    # Vue3 WebGIS 实践要点
│   │   │   └── xyzTilesFormat.md                     # XYZ 瓦片格式说明
│   │   ├── resources/                                # 笔记引用的图片与附件资源
│   │   │   ├── display/                              # 画廊图片资源目录（183 张 webp）
│   │   │   │   └── gallery-data.json                 # 画廊元数据（标题、描述、分类）
│   │   │   ├── Lecture8_GeoAI/                       # GeoAI 课程样例数据
│   │   │   ├── Lecture8_GeoAI.zip                    # GeoAI 样例数据压缩包
│   │   │   ├── icon.webp                             # 笔记专用图标
│   │   │   ├── nanyang_feature_importance.webp       # GEE 课程作业图片
│   │   │   ├── 工具箱截图.webp                        # 工具箱截图资源
│   │   │   └── 正则提取注入json.py                    # 词库同步 + md 拆分脚本
│   │   ├── notes-toc.js                              # 笔记目录自动生成与滚动同步脚本
│   │   ├── gallery.html                              # 技术成果展示画廊
│   │   ├── note-template.html                        # 旧版模板（md 内嵌在 html 中）
│   │   ├── markdown_editor.html                      # 在线 Markdown 编辑器工具
│   │   ├── word-quiz.html                            # 独立单词测试页面
│   │   └── word-list.json                            # 英语学习系统核心词库数据（~1.1 MB）
│   ├── css/                                          # 模块化 CSS 样式目录
│   │   ├── style-new.css                             # 主入口文件（@import 各模块）
│   │   ├── base.css                                  # 变量、重置、通用样式
│   │   ├── components.css                            # 网格、卡片、按钮、标签
│   │   ├── layout.css                                # 导航栏、侧边栏、页脚
│   │   ├── hero.css                                  # Hero 区域、头像、浮动装饰
│   │   ├── notes.css                                 # 笔记内容、目录（TOC）
│   │   ├── projects.css                              # 项目网格、项目卡片
│   │   └── responsive.css                            # 统一响应式断点、打印、无障碍
│   ├── public/                                       # 公共静态资源
│   │   ├── avatar.webp                               # 个人头像图片
│   │   └── main-enhanced.js                          # 全站核心交互脚本（导航、动画、分析）
│   ├── notes.html                                    # 技术笔记索引主页
│   ├── schedule.html                                 # 智能课程表页面
│   └── phy.html                                      # 物理相关页面
├── WebGIS/                                           # Vue 架构由 GitHub Action 自动 build 后的静态文件
│   ├── assets/                                       # WebGIS 项目静态资源（Vite 构建产物）
│   ├── avatars/                                      # WebGIS 用户头像 SVG 资源
│   ├── images/                                       # WebGIS 项目图片资源（webp 格式）
│   ├── ShareData/                                    # 共享地理数据（KML/KMZ）
│   ├── tiles/                                        # 本地离线 GIS 地图瓦片数据（0-18 级）
│   ├── .nojekyll                                     # 禁用 Jekyll（防止 _ 开头文件被忽略）
│   ├── adcode.json                                   # 行政区划编码数据
│   ├── favicon.ico                                   # 网站浏览器图标
│   ├── index.html                                    # WebGIS 项目入口文件
│   ├── min-enhanced.js                               # WebGIS 增强脚本
│   ├── ol.css                                        # OpenLayers 样式库
│   └── ol.js                                         # OpenLayers 核心库
├── .gitignore                                        # Git 版本控制忽略规则配置
├── .htaccess                                         # Apache 服务器配置文件（缓存策略等）
├── .nojekyll                                         # 根目录禁用 Jekyll
├── index.html                                        # 网站首页（个人作品集入口）
├── LICENSE                                           # 项目开源许可证
├── README.md                                         # 项目说明文档（本文件）
└── start_server.bat                                  # Windows 本地预览启动脚本
```

**注**：`WebGIS_henu_trials_5_28_vue3/` 项目位于工作区根目录，但作为独立的 Vue3 项目维护，具有完整的前端工程结构。

## 关键资源/Key Assets
| 类型            | 路径                                          | 用途                                     |
| --------------- | --------------------------------------------- | ---------------------------------------- |
| Favicon         | `images/icon.webp`                            | 全站浏览器图标，JS fallback 亦引用该文件 |
| 头像图片        | `Pages/public/avatar.webp`                    | 首页与各页面展示的个人头像               |
| 动态效果        | `images/typing.svg`                           | 首页打字动画效果（本地化优化）           |
| 主样式入口      | `Pages/css/style-new.css`                     | 模块化 CSS 主入口（@import 7 个子模块）  |
| 导航/交互脚本   | `Pages/public/main-enhanced.js`               | 导航栏、移动菜单、平滑滚动、分析统计    |
| 导航栏 Widget   | `Pages/navbar-widgets/index.js`               | 主题切换、语言切换、分享按钮统一入口     |
| 目录脚本        | `Pages/Note/notes-toc.js`                     | 笔记页面自动目录生成与滚动同步           |
| 笔记渲染器      | `Pages/Note/note-viewer/note-viewer.html`     | 统一 Markdown 渲染入口，URL 参数加载     |
| 笔记插件系统    | `Pages/Note/plugins/loader.js`                | 按 md 名称按需加载增强插件               |
| 笔记内容        | `Pages/Note/md/*.md`                          | 独立 Markdown 笔记文件（24 篇）          |
| 词汇数据        | `Pages/Note/word-list.json`                   | 英语学习系统题库与统计数据源             |
| 词库同步脚本    | `Pages/Note/resources/正则提取注入json.py`     | md 单词提取 → JSON + 按月自动拆分归档    |
| 工具箱          | `Others/NEGIAO工具.atbx`                      | ArcGIS Pro 定制工具集合                  |
| WebGIS 构建产物 | `WebGIS/assets/*`                             | Vite 打包后的 JS/CSS                     |
| 启动脚本        | `start_server.bat`                            | Windows 下一键启动本地预览服务器         |

## Development & Authoring
- 推荐使用 VS Code，确保保存为 UTF-8 与 Windows 兼容行结尾。
- 静态页面新增后需在 `<head>` 内同步添加 `rel="icon"` 链接（已由脚本兜底）。
- 笔记新增：在 `Notes/note-viewer/notes-config.json` 添加条目，在 `md/` 放 `.md` 文件。
- 词汇更新流程：编辑 `md/word-learning-record.md` → 运行 `正则提取注入json.py` → 自动同步 JSON + 拆分归档。
- Pyecharts 导出的可视化位于 `Geoscene_宝藏小城`，如需更新请在 Python 中重新生成。
- WebGIS 子项目可通过原始工程重新构建，再覆盖 `WebGIS/` 下产物。

### 本地运行/Local Preview
**推荐方式**：直接双击根目录下的 `start_server.bat` 脚本。

或者手动运行：
```powershell
python -m http.server 8080
# 打开 http://localhost:8080 访问首页
```
- GitHub Pages 会自动从 `main` 分支根目录部署站点。

## 技术栈/Technical Stack
- **HTML5 / CSS3 / JavaScript (ES6+)**：核心页面与交互逻辑。
- **Vue 3 / Vite**：现代 WebGIS 项目构建。
- **ECharts & Pyecharts**：宝藏小城数据可视化。
- **OpenLayers / Cesium**：WebGIS 地图渲染与交互（2D/3D）。
- **Highlight.js / Marked**：笔记语法高亮与 Markdown 渲染（已优化 CDN 源）。
- **Python**：云端脚本、词汇数据处理、本地服务器。

## 变更/Changelog

### 2026-06-01 · v2.0.0 · 架构重构与性能优化

**目录结构重组**：
- **note-viewer 独立目录**：`note-viewer.html`、`note-viewer.js`、`note-viewer.css`、`notes-config.json` 从 `Pages/Note/` 移入 `Pages/Note/note-viewer/`，核心渲染器与笔记内容解耦。
- **插件目录化**：`Google_tiles.js/css` 移入 `plugins/Google_tiles/`（index.js + styles.css），支持文件夹形式插件。
- **word-learning 插件整合**：`chinese-meaning-mask.js` 功能合入 `plugins/word-learning-record/index.js`，释义遮挡、自定义渲染、存档加载统一在一个入口。旧文件已删除。
- **公共资源目录**：新增 `Pages/public/`，`main-enhanced.js` 和 `avatar.webp` 移入。
- **notes-toc.js** 移入 `Pages/Note/`。
- **清理遗留**：删除空的 `font-awesome/webfonts/`、旧版 `style.css`、重复的 `shortcut icon` 标签。

**插件系统三阶段重构**：
- **NotePluginUtils**：loader 提供公共工具（`loadCSS` / `loadScript` / `getPluginPath` / `safeSelector`），插件不再需要自实现。
- **扩展 init 入参**：`{ container, noteName, basePath, utils, registerCleanup }`，插件可获取自身目录路径和清理回调。
- **自动加载 styles.css**：loader 在调用 init 前自动尝试加载插件目录下的 `styles.css`，约定优于配置。
- **生命周期**：支持 `destroy()` 方法 + `registerCleanup()` 回调 + `destroyNotePlugin(noteName)` API。
- **安全修复**：`safeSelector()` 替代 `querySelector` 属性拼接，防止 Selector Injection。
- **CSS 约一**：所有插件统一使用 `styles.css` 命名，由 loader 自动加载。

**词汇学习系统性能优化**：
- **md 物理拆分**：`word-learning-record.md`（286KB/4784行）拆分为主文件（最近 7 天，~5KB）+ 9 个月度存档。
- **增量式拆分**：Python 脚本每日运行时自动检测 >7 天的条目，将最旧的剥离到对应月份存档。
- **按需加载**：前端通过 `index.json` 索引按月 fetch 存档文件，点击"继续浏览"加载。
- **日期倒序**：主文件和存档文件内部按日期倒序排列，最新内容优先显示。
- **初始 parse 减少 98%**：从 286KB 降到 ~5KB，DOM 节点从 6000+ 降到 ~150。

**Code Review 修复**：
- 修复 `notes.html` 第 22 行多余反引号语法错误。
- 修复 `schedule.html` `<header>` 语义错误，改为 `<nav>`。
- 修复 `gallery.html`、`note-template.html` 中 `main-enhanced.js` 和 `notes-toc.js` 的错误引用路径。
- 修复 `schedule.html`、`markdown_editor.html` 中 `og:image` 头像路径错误。
- 统一所有 7 个 HTML 的 favicon 为单一 `rel="icon"`，删除冗余 `rel="shortcut icon"`。
- 修复 `note-viewer.html` 中 `notes-toc.js` 路径错误（`../../` → `../`）。
- 修复 loader.js 的 `loadPluginScript` 探测顺序（优先文件夹形式，消除 404 噪声）。
- 修复 `destroyNotePlugin` 中 CSS 路径匹配逻辑（相对路径 → 目录名匹配）。

**修改的文件路径**：
- `Pages/Note/note-viewer/`（新建目录，4 个文件）
- `Pages/Note/plugins/loader.js`（重写：NotePluginUtils + 生命周期 + 自动 CSS + 安全修复）
- `Pages/Note/plugins/Google_tiles/`（新建目录，index.js + styles.css）
- `Pages/Note/plugins/word-learning-record/index.js`（新建：整合渲染 + 遮挡 + 存档 + 生命周期）
- 删除 `Pages/Note/plugins/word-learning-record/chinese-meaning-mask.js`（死代码，709 行）
- `Pages/Note/md/word-learning-archive/`（新建目录，10 个文件）
- `Pages/Note/resources/正则提取注入json.py`（修改：增量式拆分 + 倒序写入）
- `Pages/public/`（新建目录，2 个文件）
- `Pages/Note/note-viewer/note-viewer.html`（修改：修复 notes-toc.js 路径）
- `Pages/notes.html`（修改：修复语法错误、更新链接）
- `Pages/schedule.html`（修改：修复语义、更新链接）
- `Pages/Note/gallery.html`（修改：修复路径）
- `Pages/Note/note-template.html`（修改：修复路径）
- `Pages/Note/markdown_editor.html`（修改：修复 og:image）
- 7 个 HTML 文件 favicon 去重
- `README.md` + `Pages/Note/md/README.md`（修改：更新文件树、插件文档、笔记列表）

---

### 2026-05-27 · v1.9.3 · 浅色主题重设计

**问题分析**：
- 原有浅色主题只是简单反转颜色，视觉效果粗糙
- 纯白底 (#FFFFFF) 过于刺眼，长时间阅读不适
- 缺乏层次感和细节处理
- 组件在浅色模式下样式不一致

**设计目标**：
- 温润质感风格，视觉舒适
- 柔和灰底，减少视觉疲劳
- 清晰层次，适度留白

**优化内容**：

#### 色彩系统
- **背景色**：温润灰底 (#EFF1F5)，辅以更浅灰 (#E5E8ED)
- **主色调**：专业蓝 (#2563EB)，替代原荧光蓝
- **文字色系**：深色文字 (#111827)，确保高可读性
- **边框**：适度灰线 (rgba(0,0,0,0.08-0.1))

#### 组件适配
- **导航栏**：灰底半透明，轻微阴影
- **卡片**：白底，悬浮时明显阴影提升
- **按钮**：保持活力，增加柔和阴影
- **标签/徽章**：淡色背景，清晰边框
- **侧边栏**：白底，清晰的激活状态指示
- **代码块**：淡灰背景，保持可读性
- **目录 (TOC)**：白底，清晰的层级缩进

#### 阴影系统
- 使用柔和扩散阴影替代发光效果
- 悬浮状态：增加阴影深度，提供浮起感
- 保持一致性：所有组件使用统一阴影规范

**修改的文件路径**：
- `d:\Dev\GitHub\NEGIAO.github.io\Pages\css\base.css`（修改）
- `d:\Dev\GitHub\NEGIAO.github.io\Pages\css\hero.css`（修改）
- `d:\Dev\GitHub\NEGIAO.github.io\Pages\css\components.css`（修改）
- `d:\Dev\GitHub\NEGIAO.github.io\Pages\css\notes.css`（修改）
- `d:\Dev\GitHub\NEGIAO.github.io\Pages\css\projects.css`（修改）

---

### 2026-05-27 · v1.9.1 · 代码组织优化

**问题分析**：
- CSS/JS 文件体量过大，维护成本高
- 样式定义存在大量重复和不一致
- 内联样式过多，代码可读性差
- 第三方脚本加载策略不统一

**优化内容**：

#### P0: 结构修复
- **修复 notes.html HTML 结构错误**：
  - 修复 XYZ切片格式解析 和 Google切片 两个笔记卡片未被 `<section>` 正确包裹的问题
  - 移除多余的 `</section>` 关闭标签

#### P1: 样式优化
- **提取 index.html 内联样式**：
  - 新增 `.contact-card-icon`、`.contact-card-title`、`.contact-card-desc` 等 CSS 类
  - 新增 `.footer__nav-section`、`.footer__brand-section`、`.footer__contact-panel` 等页脚样式类
  - 联系区域和页脚区域代码行数减少约 60%
- **移除重复 CSS 变量定义**：
  - 删除 index.html 中内联的 `:root` CSS 变量（与 style.css 重复）
  - 保留首屏渲染关键样式（loading-screen），优化首屏加载性能
- **提取侧边栏样式**：
  - 将 sidebar 相关样式从 index.html 内联样式移至 style.css
  - 统一侧边栏样式管理

#### P2: 资源加载优化
- **统一 Font Awesome 加载方式**：
  - notes.html 和 note-viewer.html 从 `all.min.css`（完整版）改为精简版加载
  - 仅加载 `fontawesome.min.css` + `solid.min.css` + `brands.min.css`
  - 减少约 30% 的 Font Awesome 文件体积

#### P3: 可维护性提升
- **笔记配置外部化**：
  - 新增 `Pages/Note/notes-config.json` 外部配置文件
  - 将 24 篇笔记的元数据（标题、描述、分类、图标）从 JavaScript 代码中抽离
  - 修改 note-viewer.js 支持从 JSON 动态加载配置
  - 添加新笔记无需修改 JavaScript 代码
- **清理死代码**：
  - 删除 main-enhanced.js 中注释掉的 Supabase 统计代码（约 30 行）
  - 更新函数注释，移除对已删除功能的引用

**优化成果**：
- index.html 代码行数从 820+ 行减少至约 650 行
- 消除了 HTML 结构错误，提升 SEO 友好度
- 统一了资源加载策略，减少不必要的文件下载
- 笔记系统扩展性提升，新增笔记只需编辑 JSON 配置

**待优化项**：
- ~~CSS 文件拆分（style.css 3400+ 行）~~ ✅ 已在 v1.9.2 完成
- ~~响应式断点统一~~ ✅ 已在 v1.9.2 完成

---

### 2026-05-27 · v1.9.2 · CSS 模块化与响应式断点统一

**问题分析**：
- `style.css` 文件体量过大（3504 行），维护成本高
- 响应式断点定义分散，存在多个不同断点值（375px、576px、768px、1024px、1200px、1400px）
- 样式分类不清晰，查找困难

**优化内容**：

#### CSS 文件拆分
将 `style.css` 拆分为 7 个模块化文件：

| 文件 | 行数 | 职责 |
|------|------|------|
| `base.css` | ~317 行 | CSS 变量、重置、通用样式、工具类 |
| `components.css` | ~280 行 | 网格、卡片、按钮、标签、加载状态 |
| `layout.css` | ~450 行 | 导航栏、移动端菜单、侧边栏、页脚、联系区域 |
| `hero.css` | ~250 行 | Hero 区域、头像、浮动装饰、动画 |
| `notes.css` | ~480 行 | 笔记内容排版、目录（TOC）、笔记卡片 |
| `projects.css` | ~180 行 | 项目网格、项目卡片 |
| `responsive.css` | ~350 行 | 统一响应式断点、打印样式、无障碍 |

新增主入口文件 `css/style-new.css`，通过 `@import` 按顺序加载各模块。

#### 响应式断点统一
统一为 5 个标准断点：

| 断点 | 变量 | 值 | 目标设备 |
|------|------|------|----------|
| sm | `--breakpoint-sm` | 576px | 手机 |
| md | `--breakpoint-md` | 768px | 平板 |
| lg | `--breakpoint-lg` | 1024px | 小笔记本 |
| xl | `--breakpoint-xl` | 1200px | 桌面 |
| 2xl | `--breakpoint-2xl` | 1400px | 大屏 |

#### HTML 文件更新
所有 8 个 HTML 文件的 CSS 引用已更新为新的模块化入口：
- `index.html` → `Pages/css/style-new.css`
- `Pages/notes.html` → `css/style-new.css`
- `Pages/schedule.html` → `css/style-new.css`
- `Pages/Note/note-viewer.html` → `../css/style-new.css`
- `Pages/Note/note-template.html` → `../css/style-new.css`
- `Pages/Note/word-quiz.html` → `../css/style-new.css`
- `Pages/Note/gallery.html` → `../css/style-new.css`

**优化成果**：
- 单一 3504 行文件拆分为 7 个职责清晰的模块
- 响应式断点统一，消除不一致问题
- 样式查找效率提升，按模块快速定位
- 便于后续维护和团队协作

**修改的文件路径**：
- `d:\Dev\GitHub\NEGIAO.github.io\Pages\css\base.css`（新建）
- `d:\Dev\GitHub\NEGIAO.github.io\Pages\css\components.css`（新建）
- `d:\Dev\GitHub\NEGIAO.github.io\Pages\css\layout.css`（新建）
- `d:\Dev\GitHub\NEGIAO.github.io\Pages\css\hero.css`（新建）
- `d:\Dev\GitHub\NEGIAO.github.io\Pages\css\notes.css`（新建）
- `d:\Dev\GitHub\NEGIAO.github.io\Pages\css\projects.css`（新建）
- `d:\Dev\GitHub\NEGIAO.github.io\Pages\css\responsive.css`（新建）
- `d:\Dev\GitHub\NEGIAO.github.io\Pages\css\style-new.css`（新建）
- `d:\Dev\GitHub\NEGIAO.github.io\index.html`（修改）
- `d:\Dev\GitHub\NEGIAO.github.io\Pages\notes.html`（修改）
- `d:\Dev\GitHub\NEGIAO.github.io\Pages\schedule.html`（修改）
- `d:\Dev\GitHub\NEGIAO.github.io\Pages\Note\note-viewer.html`（修改）
- `d:\Dev\GitHub\NEGIAO.github.io\Pages\Note\note-template.html`（修改）
- `d:\Dev\GitHub\NEGIAO.github.io\Pages\Note\word-quiz.html`（修改）
- `d:\Dev\GitHub\NEGIAO.github.io\Pages\Note\gallery.html`（修改）
- `d:\Dev\GitHub\NEGIAO.github.io\README.md`（修改）

---

### 2026-05-27 · v1.9.0
- **Navbar Widget 模块化重构**：
    - 新建 `Pages/navbar-widgets/` 文件夹，将主题切换、语言切换、分享按钮三个功能整合为统一模块。
    - `index.js` 作为统一入口，页面只需加载一个 `<script>` 即可自动初始化所有 widget。
    - 从 `main-enhanced.js` 提取 `initThemeToggle`，从 `note-viewer.js` 提取 `initShareButton`。
    - 统一主题 localStorage key 为 `'site-theme'`，消除 note-viewer 独立的 `'note-theme'`。
    - 所有页面（35 个）的 `i18n-toggle.js` 引用统一更新为 `navbar-widgets/index.js`。
    - 移动端三按钮定位使用 CSS `:has()` 区分有/无汉堡菜单的页面，避免 UI 重叠。
- **笔记插件系统**：
    - 新增 `Pages/Note/plugins/` 目录，支持按 md 文件名按需加载交互增强插件。
    - `loader.js` 提供 `registerNotePlugin()` / `loadNotePlugins()` 注册与加载机制。
    - 首个插件：`Google_tiles.js` — 为 Google 地图瓦片笔记提供 OpenLayers 地图预览面板。
- **笔记内容扩充**：
    - 新增 `Google_tiles.md`、`Docker.md`、`Hexo.md`、`WebKnowledge.md` 等 12 篇技术笔记。
    - 笔记总量从 13 篇扩展至 25 篇。
- **资源格式统一**：
    - 全站图片从 PNG/JPG 统一转换为 WebP 格式，减小传输体积。
    - 新增 `font-awesome/` 本地图标字体资源，减少外部 CDN 依赖。
- **代码清理**：
    - 移除 `initCodeCopyButtons` 函数及相关样式。
    - 移除卡片蓝色涟漪点击动画效果。
    - 删除旧的 `Pages/i18n-toggle.js` 文件。

### 2026-03-15 · v1.8.5
- **📚 词汇笔记折叠交互升级**：
    - `Pages/Note/chinese-meaning-mask.js` 新增顶部全局按钮，支持“一键展开/遮挡”。
    - 释义列与例句列统一为“默认折叠”，桌面端与移动端均可按行展开/收起。
    - 移动端继续默认隐藏“词性”列，降低一屏信息密度。
- **🧹 交互逻辑精简**：
    - 移除旧的模糊遮挡方案，改为纯折叠交互，视觉更直观。

### 2026-03-12 · v1.8.4
- **∑ LaTeX 学习体系补全**：
    - 将 LaTeX 学习内容并入 `Pages/Note/markdown_editor.html`，减少入口分散。
- **🧮 编辑器能力升级**：
    - `Pages/Note/markdown_editor.html` 接入 MathJax，支持复杂数学公式实时预览。
    - 示例内容新增 LaTeX 章节，开箱即用。
- **📚 渲染器与文档同步**：
    - 清理独立 LaTeX 学习笔记入口与相关配置。
    - README 更新功能说明、目录结构与关键资源条目。

### 2026-03-12 · v1.8.3
- **🧠 词汇学习交互增强**：
    - 新增 `Pages/Note/chinese-meaning-mask.js` 模块。
    - 初始版本支持中文释义默认遮挡、点击显示/隐藏与全局开关。
    - 仅在 `word-learning-record` 类笔记中按需启用，不影响其他通用 Markdown 笔记。

### 2026-03-10 · v1.8.2
- **🎨 动态尺寸适配系统**：
    - 新增 `initDynamicSizing()` JS 模块，根据实际视口大小动态计算并注入 CSS 自定义属性（`--dynamic-avatar`、`--dynamic-avatar-container`），实现 Hero 高度与 Avatar 尺寸的多设备无断点平滑适配。
    - Hero 区域始终精确填满视口高度（`window.innerHeight`），自动响应窗口缩放和移动端横竖屏切换。
    - Avatar 尺寸基于 `vmin * 0.36` 平滑缩放（桌面端 ~200px、平板 ~160px、手机 ~130-140px、小屏 ~100px），取代原有 4 个断点的固定像素值。
- **🐛 UI 修复**：
    - 修复桌面端侧边栏宽度（100px）与主内容区 `margin-left`（80px）不匹配导致的 20px 内容重叠问题。
    - 移除 Avatar 的导航栏偏移 margin-top（桌面端使用侧边栏，不存在顶部导航栏）。
    - 清除 768px 媒体查询中的重复 Avatar 声明（180/160px 被 140/120px 覆盖的死代码）。
- **🧹 代码精简**：
    - 移除 CSS 中 Hero 和 Avatar 的 5 组硬编码断点尺寸，统一由 JS CSS 变量驱动。
    - 精简 `index.html` 内联样式中冗余的 `!important` Hero 覆盖规则。
    - CSS 媒体查询中 Avatar 仅保留 margin 调整，尺寸完全委托 JS 计算。

### 2026-03-9 · v1.8.1
- **🏷️ 品牌标识**：
    - 将页面 `<title>` 从通用的 `My WebGIS` 更新为 `NEGIAO's WebGIS`，强化项目归属与个人品牌。
- **📊 访问统计**：
    - 在侧边栏底部新增访客数角标（via [visitor-badge.laobi.icu](https://visitor-badge.laobi.icu)），实时显示页面访问量。
    - 增加百度统计

### 2026-01-30 · v1.8.0
- **笔记系统架构重构**：
    - **统一渲染器**：新增 `note-viewer.html` 通用笔记渲染入口，通过 `?note=xxx` URL 参数动态加载 Markdown 内容。
    - **内容分离**：将 11 篇技术笔记从 HTML 内嵌 Markdown 迁移至独立 `.md` 文件，存储于 `Pages/Note/md/` 目录。
    - **维护效率提升**：笔记内容与渲染逻辑解耦，支持直接编辑 Markdown 文件，无需触碰 HTML 结构。
    - **子目录支持**：支持 `ZhouDi_learning/` 等子目录结构，URL 路由自动适配。
    - **路由统一**：更新 `notes.html` 所有笔记链接为新的 URL 参数格式。
- **单词测试模块分离**：
    - **独立测试页面**：新增 `word-quiz.html` 作为专用单词测试入口，与笔记内容解耦。
    - **测试功能增强**：随机抽题、答对自动跳转、正确率统计、进度显示、一键重置。
    - **多入口访问**：笔记索引页双按钮（阅读笔记 / 开始测试），md 笔记顶部快捷入口。
    - **脚本更新**：`正则提取注入json.py` 改为直接从 `.md` 文件读取，无需 HTML 解析。
- **文件清理**：删除 11 个已迁移的原始 HTML 笔记文件，项目结构更清晰。

### 2026-01-14 · v1.7.0
- **首页 UI 重大改版**：
    - **项目区域重新设计**：移除过度的 AI 感设计元素，采用简洁专业的 2×2 网格布局。
    - **卡片设计优化**：
        - 使用序号标识（01-04）增强视觉层次与专业感。
        - 去除复杂的渐变背景和大图标，改用简洁的边框和背景设计。
        - 悬停时左侧蓝色条从上到下展开，提供视觉反馈。
        - 优化标签样式，使用统一的半透明背景。
    - **交互体验提升**：
        - 链接箭头悬停时右移，提供清晰的方向引导。
        - GitHub 图标独立按钮设计，操作更直观。
        - 减少夸张动画，保留必要的悬停效果。
    - **移除"专业技能"板块**：精简页面内容，聚焦核心项目展示。
    - **响应式优化**：桌面端固定 2 列布局，移动端自动切换为单列。

### 2026-01-31 · v1.6.1
- **英语单词学习记录倒序显示**：
    - 优化 `note-viewer.html` 渲染逻辑，针对 `word-learning-record` 类型笔记自动按日期倒序排列。
    - 最新学习记录优先展示，提升日常复习效率。
    - 保持 Markdown 源文件正序书写习惯不变，无需改变日常记录流程。
- **词库持续扩容**：
    - 2026年1月新增多批次词汇，涵盖 Marginal、Verdict、Hedge、Courtesy 等高频考研词汇。
    - 词库总量突破 1270+ 词条。
- **本地开发工具**：
    - 新增 `Pages/start_pages_server.bat`，便捷启动 Pages 子目录本地预览服务器。

### 2025-12-23 · v1.6.0
- **机器学习与智能算法（R）笔记重构**：
    - 将 `spatial-analysis-R.html` 从空间分析笔记升级为机器学习/AI算法R语言实践合集。
    - 新增9大主题完整代码示例：
        - 神经网络（ANN）回归 - Boston房价预测
        - 梯度下降优化可视化
        - 支持向量机（SVM）分类 - Iris数据集与遥感影像分类
        - 决策树/随机森林 - 回归树可视化、RFSI空间插值、遥感分类
        - 深度学习（CNN）- Keras3遥感影像分类
        - 遗传算法（GA）- 旅行商问题（TSP）
        - 元胞自动机 - 生命游戏（Game of Life）
        - 智能体模型（ABM）- Boids鸟群模拟
    - **交互体验升级**：所有代码块右上角添加一键复制按钮，采用渐变主题样式（毛玻璃效果、悬停发光）。
    - **资源配套完善**：新增Lecture8_GeoAI样例数据包（遥感影像、训练数据、坐标文件等），支持在线下载与本地运行。
    - **笔记索引同步**：更新 `notes.html` 卡片标题、图标（🤖）、描述与日期，保持全站一致性。

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

## 未来计划/Roadmap
- ✅ 完成考研英语词汇核心功能、互动测试与词库扩容（3500+）。
- ✅ 智能课程表性能与体验迭代。
- ✅ 导航栏工具按钮模块化重构（主题/语言/分享）。
- ✅ 笔记插件系统（按需加载交互增强）。
- ✅ 词汇笔记物理拆分 + 按月归档 + 增量式同步（286KB → 5KB）。
- ✅ note-viewer 核心最小化 + 插件化架构。
- 🔄 扩展词汇至 5000+，新增发音模块、错题本与进度可视化。
- 🔄 增补 WebGIS 功能组件与更多专题可视化案例。
- 🔄 构建全站搜索、多语言与访问统计面板。
- 🔄 修复 gallery.html 嵌套 script 标签解析问题、schedule.html 内联样式外部化。

---

**建议使用现代浏览器（Chrome / Firefox / Safari）以获得最佳体验。**
