# NEGIAO.github.io

个人主页与作品集（静态网站），聚焦 WebGIS、地理空间可视化与专题展示。

- 主页：根目录 `index.html`
- WebGIS 演示：`WebGIS/index.html`
- 宝藏小城专题（Pyecharts 导出）：`Geoscene_宝藏小城/awesome.html`
- 技术笔记：`Pages/notes.html`

## 功能与亮点

- 响应式设计：移动端、平板与桌面自适应布局
- 现代化样式：渐变标题、卡片式信息块、图标与占位图样式
- 基础动效：平滑滚动、入场/悬停效果（轻量且不打扰）
- 内容组织：按专题分类（词云、季节/年内/年际变化）、WebGIS 实例、静态图文

## 目录结构

```
├── index.html                 # 首页
├── Pages/                     # 页面与样式目录
│   ├── notes.html             # 技术笔记
│   ├── style.css              # 全站样式
│   └── avatar.jpg             # 头像
├── 大河南.jpg                 # 示例图片
├── Geoscene_宝藏小城/         # 专题（Pyecharts/ECharts 导出）
│   ├── awesome.html
│   ├── wordcloud.html
│   ├── 词云图_*.html          # 各城市词云
│   ├── 季节变化/               # 各城市季节变化
│   ├── 年内变化/               # 各城市年内变化
│   └── 年际变化/               # 各城市年际变化
├── WebGIS/                    # OpenLayers WebGIS 演示
│   ├── index.html
│   ├── ol.css / ol.js
│   ├── assets/                # 打包静态资源（JS/CSS）
│   └── images/                # 示例图片
├── images/                    # 站点通用图片
│   ├── icon.png
│   └── ...
└── README.md                  # 本文件
```

## 本地预览

你可以使用任意静态服务器在本地打开项目根目录。

PowerShell（Windows）示例：

```powershell
# 在仓库根目录启动本地服务（需要安装 Python 3）
python -m http.server 8080
# 然后在浏览器访问
# http://localhost:8080
```

> 主页入口为 `index.html`，子页面使用相对路径即可直接访问。

## 开发与内容说明

-- 样式集中在 `Pages/style.css`（同时页头内联了关键 CSS 用于首屏渲染优化）
- 页面为纯静态 HTML，子项目（如 WebGIS、Geoscene）各自维护子目录
- WebGIS 使用 OpenLayers；专题图表由 ECharts/Pyecharts 导出生成

## 部署

该仓库可作为 GitHub Pages 个人主页仓库（`<username>.github.io`）。
将更新推送到默认分支后，GitHub Pages 将自动托管并从根目录提供 `index.html`。

## 致谢

- OpenLayers（WebGIS）
- ECharts / Pyecharts（图表可视化）
- 其他字体与图标资源的作者与社区

## 许可与使用

本仓库主要用于个人展示。若需引用其中图片与图表，请先联系作者并获得许可。
