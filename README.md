# NEGIAO.github.io

> 🌟 个人主页与技术作品集：WebGIS、地理空间可视化、学习工具与笔记系统。  
> 🌐 **在线访问**：[https://www.negiao.cn/](https://www.negiao.cn/) · [https://negiao.github.io/](https://negiao.github.io/)

## 概况 Overview

- 自适应深浅色主题静态站，整合课程表、笔记、词库、工具箱与可视化专题。
- **WebGIS 产品站**由 [WebGIS-Dev](https://github.com/NEGIAO/WebGIS-Dev) CI 构建后同步到本仓 `WebGIS/`。
- **边缘 Worker**（`workers/github-stats`）部署在 Cloudflare，经 `api.negiao.cn` 提供 GitHub 统计 / 贪吃蛇 / 活动折线图。
- 笔记：`note-viewer` 渲染器 + `plugins/` 插件 + `md/` 独立 Markdown。

## 速览 Quick Links

| 模块 | 路径 | 说明 |
| --- | --- | --- |
| 🏠 首页 | `index.html` | 个人介绍、项目、贡献日历/活动图 |
| 📅 课程表 | `Pages/schedule.html` | 实时课务状态、呼吸灯、移动端 |
| 📝 笔记索引 | `Pages/notes.html` | 统一渲染器、自动目录、高亮 |
| ✏️ Markdown 编辑器 | `Pages/Note/markdown_editor.html` | 实时预览 + MathJax |
| 📚 词汇学习 | `Pages/Note/note-viewer/note-viewer.html?note=word-learning-record` | 3500+ 词库、遮挡、按月归档 |
| 🎯 单词测试 | `Pages/Note/word-quiz.html` | 随机抽题、正确率 |
| 🧰 ArcGIS 工具箱 | `Pages/Note/note-viewer/note-viewer.html?note=negiao-toolbox` | NEGIAO 工具说明与下载 |
| 🖼️ 技术画廊 | `Pages/Note/gallery.html` | 多图展示 |
| 🗺️ WebGIS 演示 | `WebGIS/index.html` | Vue3 + OL/Cesium 构建产物 |
| 🏆 宝藏小城 | `Geoscene_宝藏小城/awesome.html` | Pyecharts 多城可视化 |
| ⚙️ GitHub Worker | `workers/github-stats/` | stats / snake / activity-graph API |

## 特色 Highlights

- **主题**：`body[data-theme]` 驱动；导航栏主题/语言/分享由 `Pages/navbar-widgets/` 统一。
- **笔记插件**：`plugins/loader.js` 按 md 名加载 `{name}/index.js` + `styles.css`。
- **词汇系统**：主文件只保留近 7 天，历史按月 `md/word-learning-archive/` 按需加载。
- **本地预览**：双击 `start_server.bat`，或 `python -m http.server 8080`。
- **自定义域名**：`CNAME` → `www.negiao.cn`。

## 边缘 API（Cloudflare Worker）

目录：`workers/github-stats/`（与站点解耦，需单独 `wrangler deploy`）。

| 路由 | 用途 |
| --- | --- |
| `GET /api/stats` | WebGIS-Dev Stars/Forks/版本 JSON |
| `GET /api/chart` | Star History 趋势图 SVG |
| `GET /api/snake` · `/api/snake-dark` | 贡献贪吃蛇 SVG |
| `GET /api/activity-graph.svg?username=NEGIAO` | 贡献活动折线图（tokyo-night，默认 31 天） |

```bash
cd workers/github-stats
npx wrangler login
npx wrangler deploy
npx wrangler secret put GITHUB_TOKEN   # 强烈建议
```

首页已引用：

```html
<img src="https://api.negiao.cn/api/activity-graph.svg?username=NEGIAO" alt="Activity Graph" />
<img src="https://api.negiao.cn/api/snake-dark" alt="Contribution snake" />
```

## 目录结构 Directory Map

```text
.
├── index.html                 # 首页
├── 404.html
├── CNAME                      # www.negiao.cn
├── start_server.bat           # 本地预览
├── Pages/                     # 子页面与公共资源
│   ├── css/                   # 模块化 CSS + home.css（首页合并包）
│   ├── navbar-widgets/        # 主题 / 语言 / 分享
│   ├── public/                # avatar.webp、main-enhanced.js
│   ├── Note/                  # 笔记渲染器、插件、md、编辑器、画廊
│   ├── WebGIS_task/           # 课程实验页
│   ├── notes.html / schedule.html / Self_Intro.html / phy.html
├── Geoscene_宝藏小城/          # Pyecharts 专题
├── WebGIS/                    # WebGIS-Dev 构建产物（CI 同步）
├── workers/github-stats/      # Cloudflare Worker 源码
├── demo/                      # 隐私与条款等
├── Others/                    # ArcGIS 工具箱等
├── images/                    # 全局图片（favicon、typing.svg 等）
├── .htaccess / .nojekyll
├── LICENSE
└── README.md
```

> `WebGIS_henu_trials_5_28_vue3/` 已不在本仓维护；现代 WebGIS 见 [WebGIS-Dev](https://github.com/NEGIAO/WebGIS-Dev)。

## 关键资源 Key Assets

| 类型 | 路径 |
| --- | --- |
| Favicon | `images/icon.webp` |
| 头像 | `Pages/public/avatar.webp` |
| 首页样式（合并） | `Pages/css/home.css`（由源 CSS + `build-home-css.mjs` 生成） |
| 全站交互 | `Pages/public/main-enhanced.js` |
| 导航栏 Widgets | `Pages/navbar-widgets/index.js` |
| 笔记渲染器 | `Pages/Note/note-viewer/note-viewer.html` |
| 插件加载器 | `Pages/Note/plugins/loader.js` |
| Worker | `workers/github-stats/src/index.js` |

## 开发 Development

- 编码 UTF-8；新增页面在 `<head>` 补 `rel="icon"`。
- 新笔记：`Pages/Note/note-viewer/notes-config.json` 加条目 + `md/` 放文件。
- 词汇：改 `md/word-learning-record.md` → 跑 `Pages/Note/resources/正则提取注入json.py`。
- 首页改样式后重跑 `Pages/css/build-home-css.mjs` 并更新 `home.css?v=`。
- GitHub Pages 从 `main` 根目录发布；WebGIS 产物由上游仓 CI 推入。

## 技术栈 Stack

HTML/CSS/JS · Vue 3 + Vite（WebGIS 产物）· OpenLayers / Cesium · ECharts/Pyecharts · Highlight.js / Marked / MathJax · Cloudflare Workers · Python 脚本

## 变更 Changelog

完整历史见 git log；下列为站点向节点摘要。

### 2026-09-14 · v2.3.0

- Worker 迁入本仓 `workers/github-stats`；新增 `/api/activity-graph.svg`（Chartist 风格活动折线图）。
- 首页贡献区接入自托管 activity graph；`home.css` 增加展示样式。
- README 全面按当前目录结构重写（移除已不存在的 Vue3 独立仓路径等）。

### 2026-08-30 · v2.2.0 · 配色回退蓝青体系

- 从 Claude 暖橙回退原创蓝青双主题，**保留变量驱动**（详见 git 历史）。

### 2026-08-30 · v2.1.x · 主题体系

- v2.1.0 尝试 Claude 风格；v2.1.1 硬编码色清理；v2.1.2 绿色饱和度；v2.1.3 浅色 Hero 动效修复。

### 2026-06-01 · v2.0.0 · 笔记架构

- note-viewer 独立目录、插件文件夹化、词汇 md 拆分与按月加载、大量路径/404 修复。

### 更早

- v1.9.x CSS 模块化与响应式统一；v1.8.x 词汇交互 / LaTeX / 动态尺寸；v1.7 及以前见 `git log`。

## 路线 Roadmap

- [ ] Worker 部署后验证 `api.negiao.cn` 全路由与 `GITHUB_TOKEN`
- [ ] 活动图浅色主题变体（可选 `?theme=`）
- [ ] 笔记与画廊资源按需加载继续瘦身

---

MIT License · [GitHub @NEGIAO](https://github.com/NEGIAO) · [WebGIS-Dev](https://github.com/NEGIAO/WebGIS-Dev)
