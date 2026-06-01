# 📝 笔记系统使用说明

## 项目结构

```
Pages/Note/
├── note-viewer/                    # 统一笔记渲染器（核心）
│   ├── note-viewer.html            # 渲染入口（URL 参数加载 md）
│   ├── note-viewer.js              # 渲染器核心逻辑（fetch、marked、hljs、MathJax）
│   ├── note-viewer.css             # 渲染器页面样式
│   └── notes-config.json           # 笔记元数据配置（标题、描述、分类、图标）
├── plugins/                        # 笔记增强插件系统（按 md 名称按需加载）
│   ├── loader.js                   # 插件加载器（NotePluginUtils + 生命周期 + 自动 CSS）
│   ├── Google_tiles/               # Google Tiles 地图预览插件
│   │   ├── index.js                # 插件入口（OpenLayers 地图预览面板）
│   │   └── styles.css              # 地图预览面板样式（loader 自动加载）
│   └── word-learning-record/       # 英语词汇学习插件
│       ├── index.js                # 插件入口（渲染 + 释义遮挡 + 存档加载）
│       └── styles.css              # 动态注入样式（loader 自动加载）
├── md/                             # Markdown 笔记内容目录（25 篇）
│   ├── word-learning-archive/      # 词汇学习月度存档（按需加载）
│   │   ├── index.json              # 存档文件索引（倒序排列）
│   │   └── 2025-09.md ~ 2026-05.md # 每月一个存档文件
│   └── ...                         # 各类技术笔记 .md 文件
├── resources/                      # 笔记引用的图片与附件资源
├── notes-toc.js                    # 笔记目录自动生成与滚动同步脚本
├── gallery.html                    # 技术成果展示画廊
├── markdown_editor.html            # 在线 Markdown 编辑器工具
├── note-template.html              # 旧版模板（md 内嵌在 html 中）
├── word-quiz.html                  # 独立单词测试页面
└── word-list.json                  # 英语学习系统核心词库数据（~1.1 MB）
```

## 🚀 使用方法

### 1. 访问笔记

使用 URL 参数指定要查看的笔记（通过 `note-viewer/note-viewer.html`）：

```
note-viewer/note-viewer.html?note=笔记文件名（不带.md后缀）
```

**示例：**
- `note-viewer/note-viewer.html?note=word-learning-record` — 英语单词学习记录
- `note-viewer/note-viewer.html?note=Google_tiles` — Google 地图瓦片接口详解
- `note-viewer/note-viewer.html?note=ArcPy` — ArcPy 学习笔记
- `note-viewer/note-viewer.html?note=gee-coursework` — GEE 课程作业笔记
- `note-viewer/note-viewer.html?note=vue3-webgis-practice-essentials` — Vue3 WebGIS 实践要点

### 2. 添加新笔记

1. 在 `md/` 目录下创建新的 `.md` 文件
2. 在 `note-viewer/notes-config.json` 中添加条目（标题、描述、分类、图标）
3. 通过 `note-viewer/note-viewer.html?note=文件名` 访问

### 3. 为笔记添加插件增强

在 `plugins/` 目录下创建与 md 文件名同名的文件夹：

```
plugins/
  my-article/
    index.js      ← 必须，调用 registerNotePlugin 注册
    styles.css    ← 可选，loader 自动加载
```

**最简插件模板**：
```javascript
(function () {
    'use strict';
    window.registerNotePlugin('my-article', {
        meta: { name: '插件名称', version: '1.0.0' },
        init: async function ({ container, basePath, utils, registerCleanup }) {
            // styles.css 已由 loader 自动注入
            // utils.loadScript / utils.loadCSS 加载额外资源
            // registerCleanup(fn) 注册清理回调
        },
        destroy: function () { /* 资源清理 */ }
    });
})();
```

**插件 init 入参**：

| 参数 | 类型 | 说明 |
|------|------|------|
| `container` | `HTMLElement` | `#note-content` 容器，渲染后的 DOM |
| `noteName` | `string` | 当前笔记名称（md 文件名不含 .md） |
| `basePath` | `string` | 插件自身目录路径（如 `../plugins/Google_tiles/`） |
| `utils` | `object` | 公共工具：`loadCSS` / `loadScript` / `getPluginPath` / `safeSelector` |
| `registerCleanup` | `function` | 注册清理回调，`destroy` 时自动执行 |

## 🔧 维护指南

### 笔记配置

笔记元数据统一管理在 `note-viewer/notes-config.json`：

```json
{
    "notes": {
        "笔记文件名": {
            "title": "页面标题",
            "description": "页面描述",
            "category": "分类键（daily/project/tech）",
            "icon": "emoji 图标"
        }
    },
    "categories": {
        "daily": { "name": "日常学习", "icon": "📖" },
        "project": { "name": "项目实践", "icon": "🔧" },
        "tech": { "name": "技术总结", "icon": "💻" }
    }
}
```

### 词汇更新流程

1. 编辑 `md/word-learning-record.md`
2. 运行 `resources/正则提取注入json.py` → 自动同步 JSON + 按月拆分归档
3. 主文件仅保留最近 7 天，历史内容自动移入 `md/word-learning-archive/`

## ✨ 功能特性

- ✅ **统一渲染器** — 一个 HTML 文件渲染所有笔记（URL 参数加载）
- ✅ **自动目录生成** — 根据标题层级自动生成可折叠侧边导航栏
- ✅ **代码高亮** — 集成 Highlight.js，支持 100+ 编程语言语法高亮
- ✅ **MathJax 公式** — 支持 LaTeX 数学公式渲染
- ✅ **响应式设计** — 适配桌面、平板和移动设备
- ✅ **插件化增强** — 按 md 文件名自动匹配插件，支持交互式地图、释义遮挡等
- ✅ **笔记内搜索** — 实时搜索高亮、上/下跳转匹配项
- ✅ **代码块增强** — 自动添加语言标签和一键复制按钮

## 📋 笔记列表

| 文件名 | 分类 | 描述 | 访问链接 |
|--------|------|------|----------|
| word-learning-record | 日常 | 英语单词学习记录（3500+ 词汇） | `?note=word-learning-record` |
| ZhouDi_learning/word-learning-record | 日常 | 周迪的学习记录 | `?note=ZhouDi_learning/word-learning-record` |
| Google_tiles | 技术 | Google 地图瓦片接口详解 | `?note=Google_tiles` |
| AmapAPI | 技术 | 高德地图 API 笔记 | `?note=AmapAPI` |
| ArcPy | 技术 | ArcPy 自动化脚本笔记 | `?note=ArcPy` |
| arcgis-engine | 技术 | ArcGIS Engine 开发笔记 | `?note=arcgis-engine` |
| arcgis-engine-project | 项目 | ArcGIS Engine 项目笔记 | `?note=arcgis-engine-project` |
| Docker | 技术 | Docker 容器技术笔记 | `?note=Docker` |
| gee-coursework | 项目 | GEE 结课作业 | `?note=gee-coursework` |
| Hexo | 技术 | Hexo 博客框架笔记 | `?note=Hexo` |
| linearAlgebra | 日常 | 线性代数笔记 | `?note=linearAlgebra` |
| calculus-key-points | 日常 | 微积分重要结论与复习笔记 | `?note=calculus-key-points` |
| ml-dl-learning | 技术 | 机器学习与深度学习笔记 | `?note=ml-dl-learning` |
| negiao-toolbox | 技术 | NEGIAO 工具箱说明 | `?note=negiao-toolbox` |
| non-standard-xyz-and-gcj02 | 技术 | 非标准 XYZ 瓦片与火星坐标系 | `?note=non-standard-xyz-and-gcj02` |
| qrcode-generator | 技术 | 二维码生成器说明 | `?note=qrcode-generator` |
| spatial-analysis-R | 技术 | 机器学习与智能算法（R） | `?note=spatial-analysis-R` |
| vue3-webgis-practice-essentials | 技术 | Vue3 WebGIS 实践要点 | `?note=vue3-webgis-practice-essentials` |
| WebKnowledge | 技术 | Web 前端知识整理 | `?note=WebKnowledge` |
| WebService | 技术 | Web 服务开发笔记 | `?note=WebService` |
| WebSite_Deploy | 技术 | 网站部署指南 | `?note=WebSite_Deploy` |
| Wind2D_Prompt | 技术 | Wind2D 提示词笔记 | `?note=Wind2D_Prompt` |
| xyzTilesFormat | 技术 | XYZ 瓦片格式说明 | `?note=xyzTilesFormat` |
| note-template | — | 笔记模板 | `?note=note-template` |

## 🎯 单词测试

独立的单词测试功能已分离到 `word-quiz.html`：
- 直接访问：[word-quiz.html](../word-quiz.html)
- 从词库笔记跳转：笔记顶部有测试入口链接

## 🔗 相关链接

- [返回笔记索引](../notes.html)
- [返回首页](../../../index.html)

---
*最后更新：2026年6月1日*
