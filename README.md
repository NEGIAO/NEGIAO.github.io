# NEGIAO.github.io

> 🌟 个人主页与技术作品集，聚焦 WebGIS、地理空间数据可视化与学习工具的静态网站。

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
| 模块 | 路径 | 功能亮点 |
|------|------|----------|
| 🏠 网站首页 | `index.html` | 个人介绍、项目概览、导航入口 |
| 📅 智能课程表 | `Pages/schedule.html` | 实时课务状态、呼吸灯效果、移动端适配 |
| 📝 技术笔记索引 | `Pages/notes.html` | Markdown 渲染、自动目录、语法高亮 |
| ✏️ Markdown 编辑器 | `Pages/markdown_editor.html` | 实时预览、侧栏布局、辅助按钮 |
| 📚 英语学习系统 | `Pages/Note/word-learning-record.html` | 370 词汇库、随机测试、统计面板 |
| 🧰 NEGIAO 工具箱 | `Pages/Note/negiao-toolbox.html` | ArcGIS Pro 工具箱说明与下载 |
| 🖼️ 技术成果画廊 | `Pages/Note/gallery.html` | 多图展示、图集元数据 (`resources/display`) |
| 🗺️ WebGIS 演示 | `WebGIS/index.html` | OpenLayers 地图、交互式信息栏 |
| 🏆 宝藏小城专题 | `Geoscene_宝藏小城/awesome.html` | ECharts/Pyecharts 可视化合集 |

## Feature Highlights

### Interface & UX
- 响应式布局覆盖桌面、平板与移动端。
- 渐变标题、毛玻璃卡片与动画过渡带来统一视觉体验。
- 导航栏支持滚动隐藏、移动端抽屉菜单、平滑滚动定位。

### Learning & Study Tools
- 课程表支持秒级时间同步与课程状态自动识别，含呼吸灯提示。
- 英语学习系统提供分主题高阶词库、例句、记忆技巧与互动测试。
- Markdown 编辑器配套实时预览、复制/清空等基础写作能力。

### Data Visualization (Geoscene)
- 各城市词云、季节/年内/年际变化图表直接由 Pyecharts 导出。
- `Geoscene_宝藏小城/wordcloud.html` 汇总城市词云，便于快速浏览。
- 每个子页面均嵌入 favicon 链接，确保独立访问时的一致性。

### WebGIS & Maps
- `WebGIS/index.html` 结合 OpenLayers、定制顶栏与信息面板。
- 静态资源拆分为 `assets/`、`images/` 与核心库 (`ol.js`, `ol.css`)。
- 支持多底图切换、热点提示、学院新闻联动展示。

### Automation & Tooling
- `Others/NEGIAO工具.atbx` 提供 ArcGIS Pro 自定义工具箱及示例。
- `Scripts_based_on_cloud/Python_based_on_cloud.py` 记录云端自动化脚本范例。
- `Pages/Note/negiao-toolbox.html` 详细说明工具箱功能、安装方法与截图。

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
├── .github/
│   └── workflows/
├── .htaccess
├── README.md
├── Geoscene_宝藏小城/
│   ├── awesome.html
│   ├── wordcloud.html
│   ├── 词云图_利川.html 等词云页面
│   ├── 季节变化/
│   │   ├── 利川市_季节变化.html 等
│   ├── 年内变化/
│   │   ├── 利川市_年内变化.html 等
│   └── 年际变化/
│       ├── 利川市_年际变化.html 等
├── Others/
│   ├── NEGIAO工具.atbx
│   └── 使用说明.txt
├── Pages/
│   ├── main-enhanced.js
│   ├── markdown_editor.html
│   ├── notes.html
│   ├── notes-toc.js
│   ├── notes-toc.min.js
│   ├── schedule.html
│   ├── style.css
│   ├── avatar.jpg
│   └── Note/
│       ├── arcgis-engine.html
│       ├── ArcPy.html
│       ├── gallery.html
│       ├── negiao-toolbox.html
│       ├── note-template.html
│       ├── spatial-analysis-R.html
│       ├── word-learning-record.html
│       ├── word-list.json
│       └── resources/
│           ├── display/
│           ├── icon.png
│           └── 工具箱截图.png
├── Scripts_based_on_cloud/
│   └── Python_based_on_cloud.py
├── WebGIS/
│   ├── index.html
│   ├── ol.css
│   ├── ol.js
│   ├── assets/
│   │   ├── index-CAyyoyHz.js
│   │   └── index-jh0DpwuT.css
│   └── images/
│       └── 校园相关图片若干
├── images/
│   ├── icon.png
│   ├── 大河南.jpg
│   ├── 地球日活动.jpg
│   ├── 学部大会.png
│   ├── 年级大会.jpg
│   └── 院徽.png
├── index.html
├── b22528f0881a8f77363f449ce10d0209.txt
├── 大河南.jpg
└── .vscode/
```

## Key Assets
| 类型 | 路径 | 用途 |
|------|------|------|
| Favicon | `images/icon.png` | 全站浏览器图标，JS fallback 亦引用该文件 |
| 主样式 | `Pages/style.css` | 全站主题与组件样式 |
| 导航/交互脚本 | `Pages/main-enhanced.js` | 导航栏、移动菜单、平滑滚动、favicon 注入 |
| 目录脚本 | `Pages/notes-toc.js` | 笔记页面自动目录生成与标题层级样式 |
| 词汇数据 | `Pages/Note/word-list.json` | 英语学习系统题库与统计数据源 |
| 工具箱 | `Others/NEGIAO工具.atbx` | ArcGIS Pro 定制工具集合 |
| WebGIS 构建产物 | `WebGIS/assets/*` | Vite 打包后的 JS/CSS |

## Development & Authoring
- 推荐使用 VS Code，确保保存为 UTF-8 与 Windows 兼容行结尾。
- 静态页面新增后需在 `<head>` 内同步添加 favicon 链接（已由脚本兜底）。
- Pyecharts 导出的可视化位于 `Geoscene_宝藏小城`，如需更新请在 Python 中重新生成。
- WebGIS 子项目可通过原始工程重新构建，再覆盖 `WebGIS/` 下产物。

### Local Preview
```powershell
python -m http.server 8080
# 打开 http://localhost:8080 访问首页
```
- GitHub Pages 会自动从 `main` 分支根目录部署站点。

## Technical Stack
- **HTML5 / CSS3 / JavaScript (ES6+)**：核心页面与交互逻辑。
- **ECharts & Pyecharts**：宝藏小城数据可视化。
- **OpenLayers**：WebGIS 地图渲染与交互。
- **Highlight.js / Marked**：笔记语法高亮与 Markdown 渲染。
- **Python**：云端脚本、词汇数据处理。

## Changelog

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
