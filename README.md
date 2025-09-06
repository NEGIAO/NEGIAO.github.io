# NEGIAO.github.io

个人主页与作品集（静态网站），聚焦 WebGIS、地理空间可视化与专题展示。项目采用现代化前端设计，支持自适应布局，并包含技术笔记系统、数据可视化和WebGIS演示。

- 主页：根目录 `index.html`
- WebGIS 演示：`WebGIS/index.html`
- 宝藏小城专题（Pyecharts 导出）：`Geoscene_宝藏小城/awesome.html`
- 技术笔记：`Pages/notes.html`（支持自动章节目录生成与格式化）
- Markdown 编辑器：`Pages/markdown_editor.html`

## 功能与亮点

- 响应式设计：移动端、平板与桌面自适应布局
- 现代化样式：渐变标题、卡片式信息块、图标与占位图样式
- 基础动效：平滑滚动、入场/悬停效果（轻量且不打扰）
- 内容组织：按专题分类（词云、季节/年内/年际变化）、WebGIS 实例、静态图文
- 技术笔记：自动生成文章目录，支持长目录滚动，多级标题样式区分
- 性能优化：关键 CSS 内联、资源预加载、长缓存策略
- 访问统计：基于 localStorage 的简易访问计数 + Google Analytics 集成

## 目录结构（优化后）

```
├── index.html                 # 首页
├── .htaccess                  # 资源缓存控制配置
├── Pages/                     # 页面与样式目录
│   ├── notes.html             # 技术笔记
│   ├── markdown_editor.html   # Markdown 编辑器
│   ├── main-enhanced.js       # 优化后的主脚本
│   ├── notes-toc.js           # 笔记目录生成脚本（新版）
│   ├── style.css              # 全站样式
│   ├── avatar.jpg             # 头像
│   └── Note/                  # 技术笔记内容
│       ├── data-visualization.html  # 数据可视化笔记
│       ├── webgis-practice.html     # WebGIS实践笔记
│       └── note-template.html       # 笔记模板
├── 大河南.jpg                 # 示例图片
├── Geoscene_宝藏小城/         # 专题（Pyecharts/ECharts 导出）
│   ├── awesome.html           # 宝藏小城主页
│   ├── wordcloud.html         # 词云汇总页
│   ├── 词云图_*.html          # 各城市词云展示（利川、淮安、荣成、象山、铜仁、隰县）
│   ├── 季节变化/              # 各城市季节变化可视化
│   │   ├── 利川市_季节变化.html
│   │   ├── 淮安市_季节变化.html
│   │   └── ... (其他城市)
│   ├── 年内变化/              # 各城市年内变化可视化 
│   └── 年际变化/              # 各城市年际变化可视化
├── WebGIS/                    # OpenLayers WebGIS 演示
│   ├── index.html             # WebGIS主页
│   ├── ol.css                 # OpenLayers CSS
│   ├── ol.js                  # OpenLayers JS库
│   ├── assets/                # 打包静态资源（JS/CSS）
│   │   ├── index-CAyyoyHz.js  # 主JS文件
│   │   └── index-jh0DpwuT.css # 主CSS文件
│   └── images/                # 示例图片（包含多个校园和学院照片）
├── images/                    # 站点通用图片
│   ├── icon.png               # 网站图标
│   ├── 院徽.png               # 学院徽标 
│   ├── 学部大会.png           # 活动图片
│   ├── 年级大会.jpg           # 活动图片
│   └── 地球日活动.jpg         # 活动图片
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

- 样式集中在 `Pages/style.css`（同时页头内联了关键 CSS 用于首屏渲染优化）
- 页面为纯静态 HTML，子项目（如 WebGIS、Geoscene）各自维护子目录
- WebGIS 使用 OpenLayers；专题图表由 ECharts/Pyecharts 导出生成
- 技术笔记支持实时编辑和 Markdown 预览，自动生成多级章节目录
- 长文章中的章节目录（TOC）支持滚动和样式区分，提高阅读体验

### 性能优化

- **渲染优化**：首屏关键CSS内联，非关键资源延迟加载
- **预加载策略**：关键资源预连接，减少DNS查询和连接时间
- **缓存控制**：通过.htaccess配置不同资源类型的缓存时间
  - CSS/JS文件：缓存1年
  - 图片文件：缓存1年
  - HTML文件：相对较短缓存期，确保内容更新
- **资源优化**：压缩JS文件，优化图像大小
- **网络优化**：使用中国CDN加速访问

## 已完成的优化

已删除以下冗余文件和目录，优化了项目结构：

1. **已移除的重复JS文件**:
   - ✅ `Pages/main.js` - 由 `main-enhanced.js` 替代
   - ✅ 更新了 `Pages/notes-toc.js` 内容

2. **已移除的空文件与文件夹**:
   - ✅ `Pages/js/` - 空文件夹
   - ✅ `Pages/css/style.css` - 空文件
   - ✅ `Pages/css/components/` - 未使用的组件目录
   - ✅ `Pages/css/` - 空目录

3. **文件结构优化**:
   - ✅ 移除了所有空目录
   - ✅ 简化了文件组织结构

## 近期更新内容

### 2025.09.06 更新
- 改进了章节目录（TOC）的显示效果：
  - 移除了重复的"文章目录"标题，界面更加简洁
  - 自动提取文章第一个H1标题作为目录标题，保持一致性
  - 为不同级别的标题添加了差异化样式：
    - H1：大号字体，高亮显示，作为主标题
    - H2：中号字体，加粗显示，作为主要章节
    - H3：标准字体，常规粗细，作为子章节
    - H4-H6：小号字体，浅色显示，作为深层次结构
  - 优化了长目录的滚动行为，支持独立滚动，不影响正文阅读
  - 重新设计了移动端设备上的目录显示，减小缩进距离，优化字体大小
  - 更新了notes-toc.js，提高了性能和交互体验

### 2025.09.05 更新
- 优化了 Markdown 编辑器，添加了 Clear、Copy 和 Paste 功能按钮
- 提升了技术笔记的加载性能
- 增加了 WebGIS 后端技术示例内容
- 实现了访问统计功能
- 优化了缓存控制策略，提高重复访问速度
- 重构了项目结构，移除冗余文件和空目录
- 简化了资源管理，减少了重复文件

## 部署

该仓库可作为 GitHub Pages 个人主页仓库（`<username>.github.io`）。
将更新推送到默认分支后，GitHub Pages 将自动托管并从根目录提供 `index.html`。

## 致谢

- OpenLayers（WebGIS）
- ECharts / Pyecharts（图表可视化）
- Font Awesome（图标）
- Google Fonts（Inter 字体）
- 其他字体与图标资源的作者与社区

## 许可与使用

本仓库主要用于个人展示。若需引用其中图片与图表，请先联系作者并获得许可。
