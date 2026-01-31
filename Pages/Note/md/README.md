# 📝 笔记系统使用说明

## 项目结构

```
Pages/Note/
├── note-viewer.html      # 通用笔记渲染器（核心文件）
├── word-quiz.html        # 独立单词测试页面
├── word-list.json        # 英语词库数据
├── gallery.html          # 画廊展示（独立工具）
├── markdown_editor.html  # Markdown编辑器（独立工具）
├── md/                   # Markdown源文件目录
│   ├── word-learning-record.md
│   ├── ArcPy.md
│   ├── arcgis-engine.md
│   ├── arcgis-engine-project.md
│   ├── gee-coursework.md
│   ├── spatial-analysis-R.md
│   ├── ml-dl-learning.md
│   ├── negiao-toolbox.md
│   ├── qrcode-generator.md
│   ├── note-template.md
│   ├── README.md
│   └── ZhouDi_learning/
│       └── word-learning-record.md
└── resources/            # 笔记资源文件
    ├── display/          # 图片展示资源
    ├── Lecture8_GeoAI/   # GeoAI课程数据
    └── 正则提取注入json.py  # 词库同步脚本
```

## 🚀 使用方法

### 1. 访问笔记

使用URL参数指定要查看的笔记：

```
note-viewer.html?note=笔记文件名（不带.md后缀）
```

**示例：**
- `note-viewer.html?note=word-learning-record` - 英语单词学习记录
- `note-viewer.html?note=ArcPy` - ArcPy学习笔记
- `note-viewer.html?note=gee-coursework` - GEE课程作业笔记
- `note-viewer.html?note=spatial-analysis-R` - R语言空间分析笔记
- `note-viewer.html?note=ml-dl-learning` - 机器学习/深度学习笔记

### 2. 添加新笔记

1. 在 `md/` 目录下创建新的 `.md` 文件
2. 使用Markdown语法编写内容
3. 通过 `note-viewer.html?note=文件名` 访问

### 3. 编辑现有笔记

直接编辑 `md/` 目录下对应的 `.md` 文件即可，刷新页面生效。

## 🔧 维护指南

### 从旧HTML提取Markdown

如果需要从原有的HTML文件重新提取Markdown内容：

```bash
cd Pages/Note
python extract_markdown.py
```

### 添加新笔记到配置

如需显示自定义标题，编辑 `note-viewer.html` 中的 `noteConfig` 对象：

```javascript
const noteConfig = {
    '笔记文件名': {
        title: '页面标题',
        description: '页面描述'
    },
    // 添加更多笔记配置...
};
```

## ✨ 功能特性

- ✅ **统一渲染器** - 一个HTML文件渲染所有笔记
- ✅ **自动目录生成** - 根据标题自动生成文章目录
- ✅ **代码高亮** - 支持多种编程语言语法高亮
- ✅ **响应式设计** - 适配桌面和移动设备
- ✅ **目录折叠** - 可隐藏/显示文章目录
- ✅ **阅读进度** - 页面顶部显示阅读进度条
- ✅ **倒序显示** - 单词学习记录自动按日期倒序，最新内容优先展示

## 📋 笔记列表

| 文件名 | 描述 | 访问链接 |
|--------|------|----------|
| word-learning-record | 英语单词学习记录 | `?note=word-learning-record` |
| ZhouDi_learning/word-learning-record | 周迪的学习记录 | `?note=ZhouDi_learning/word-learning-record` |
| ArcPy | ArcPy学习笔记 | `?note=ArcPy` |
| arcgis-engine | ArcGIS Engine笔记 | `?note=arcgis-engine` |
| arcgis-engine-project | ArcGIS Engine项目 | `?note=arcgis-engine-project` |
| gee-coursework | GEE结课作业 | `?note=gee-coursework` |
| spatial-analysis-R | 机器学习与智能算法（R） | `?note=spatial-analysis-R` |
| ml-dl-learning | 机器学习与深度学习笔记 | `?note=ml-dl-learning` |
| negiao-toolbox | NEGIAO工具箱说明 | `?note=negiao-toolbox` |
| qrcode-generator | 二维码生成器说明 | `?note=qrcode-generator` |
| note-template | 笔记模板 | `?note=note-template` |

## 🎯 单词测试

独立的单词测试功能已分离到 `word-quiz.html`：
- 直接访问：[word-quiz.html](../word-quiz.html)
- 从词库笔记跳转：笔记顶部有测试入口链接

## 🔗 相关链接

- [返回笔记索引](../notes.html)
- [返回首页](../../index.html)

---
1
*最后更新：2026年1月30日*
