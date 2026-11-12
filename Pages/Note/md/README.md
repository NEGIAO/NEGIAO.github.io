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
│   ├── Amap_tiles/                 # 高德切片全参数预览插件
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

## 📋 笔记列表（按专题分类）

### 1. 瓦片逆向与纠偏算法 (`reverse`)
| 文件名 | 描述 | 访问链接 |
|--------|------|----------|
| `tianditu-vector-full-reverse` | 天地图矢量瓦片全量逆向：VTS 通用结构、数据字典与最终程序 | `?note=tianditu-vector-full-reverse` |
| `tencent-vector-full-reverse` | 腾讯地图矢量瓦片全量逆向：频段 Schema、解码链与最终程序 | `?note=tencent-vector-full-reverse` |
| `amap-vector-full-reverse` | 高德矢量瓦片全量逆向：五层通用结构、数据字典与最终程序 | `?note=amap-vector-full-reverse` |
| `tile-rectify-seam-quad-resampling` | 瓦片纠偏的接缝问题：从轴对齐近似到精确四角重采样 | `?note=tile-rectify-seam-quad-resampling` |

### 2. 地图切片与服务协议 (`tiles`)
| 文件名 | 描述 | 访问链接 |
|--------|------|----------|
| `Amap_tiles` | 高德地图 XYZ 瓦片服务、`style/ltype/scl` 全参数拆解与在线预览 | `?note=Amap_tiles` |
| `Google_tiles` | 谷歌地图 XYZ 瓦片服务、`apistyle` 自定义样式与坐标纠偏代理全解析 | `?note=Google_tiles` |
| `non-standard-xyz-and-gcj02` | 非标准 XYZ 切片图源与 GCJ-02 适配实战总结 | `?note=non-standard-xyz-and-gcj02` |
| `AmapAPI` | 高德地图全套高阶付费 API 后端无痕实战调用手册 | `?note=AmapAPI` |
| `WebService` | WebGIS 开发者必知：主流网络地图服务协议全解析 | `?note=WebService` |
| `xyzTilesFormat` | 深入浅出 GIS 图像格式：JPEG、PNG 与 GeoTIFF 的数据结构及异同分析 | `?note=xyzTilesFormat` |

### 3. WebGIS 工程与全栈部署 (`web`)
| 文件名 | 描述 | 访问链接 |
|--------|------|----------|
| `vue3-webgis-practice-essentials` | Vue 3 实战精要：从基础到 WebGIS 架构思考 | `?note=vue3-webgis-practice-essentials` |
| `WebSite_Deploy` | 个人 WebGIS 全栈免费部署方案：GitHub + Posit + Hugging Face 实战总结 | `?note=WebSite_Deploy` |
| `Docker` | 彻底搞懂 Docker：GIS 开发从本地 WSL2 调试到云端生产全链路实战指南 | `?note=Docker` |
| `WebKnowledge` | GIS 开发必看：Referer 与 Origin 跨域请求头详解 | `?note=WebKnowledge` |
| `Wind2D_Prompt` | Cesium 2D 风场粒子系统（Wind2D）架构与 WebGL 着色器规格说明书 | `?note=Wind2D_Prompt` |
| `Hexo` | 从 0 到 1 搭建 Hexo 博客：GitHub Pages 双分支管理与自动化部署指南 | `?note=Hexo` |

### 4. 桌面 GIS 开发与遥感 (`gis`)
| 文件名 | 描述 | 访问链接 |
|--------|------|----------|
| `ArcPy` | ArcPy 空间数据处理与地理处理自动化实战指南 | `?note=ArcPy` |
| `gee-coursework` | GEE 遥感分类与 Scikit-Learn 随机森林网格搜索调参实战 | `?note=gee-coursework` |
| `arcgis-engine` | ArcGIS Engine (ArcObjects) 二次开发核心体系笔记 | `?note=arcgis-engine` |
| `arcgis-engine-project` | ArcGIS Engine 桌面 GIS 系统开发实战（完整工程与源码解析） | `?note=arcgis-engine-project` |

### 5. 机器学习与数学基础 (`ml` & `math`)
| 文件名 | 描述 | 访问链接 |
|--------|------|----------|
| `spatial-analysis-R` | 空间分析与机器学习智能算法（R 语言全流程实现） | `?note=spatial-analysis-R` |
| `ml-dl-learning` | 机器学习与深度学习知识体系：从经典算法到 GIS 遥感决策流 | `?note=ml-dl-learning` |
| `calculus-key-points` | 微积分重要结论与考研数学复习速查笔记 | `?note=calculus-key-points` |
| `linearAlgebra` | 线性代数几何直觉：从基变换、秩到 WebGIS 空间坐标变换闭环 | `?note=linearAlgebra` |

### 6. 实用工具与日常复盘 (`tools` & `daily`)
| 文件名 | 描述 | 访问链接 |
|--------|------|----------|
| `henu-library-reservation` | 河大图书馆座位预约 —— 官方接口逆向与自动预约实现 | `?note=henu-library-reservation` |
| `negiao-toolbox` | NEGIAO ArcGIS Pro 工具箱（.atbx 下载与使用指南） | `?note=negiao-toolbox` |
| `qrcode-generator` | 多样式二维码生成器（Streamlit + 静态解码页架构） | `?note=qrcode-generator` |
| `word-learning-record` | 英语单词学习记录（3500+ 词汇，含按月归档与在线测验） | `?note=word-learning-record` |
| `njnu-interview-2026-09-16` | 南师大地理科学学院推免面试复盘（2026.09.16） | `?note=njnu-interview-2026-09-16` |
| `ZhouDi_learning/word-learning-record` | 周迪的英语单词学习记录 | `?note=ZhouDi_learning/word-learning-record` |
| `note-template` | 标准笔记模板 | `?note=note-template` |

## 🎯 单词测试

独立的单词测试功能已分离到 `word-quiz.html`：
- 直接访问：[word-quiz.html](../word-quiz.html)
- 从词库笔记跳转：笔记顶部有测试入口链接

## 🔗 相关链接

- [返回笔记索引](../notes.html)
- [返回首页](../../../index.html)

---
*最后更新：2026年6月1日*
