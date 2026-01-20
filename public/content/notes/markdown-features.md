---
title: Markdown 功能展示
date: 2024-01-20
tags: [Markdown, 文档, 示例]
description: 展示增强的 Markdown 解析功能，包括代码块、任务列表、提示框等
icon: fas fa-file-alt
---

# Markdown 功能展示

本文档展示所有支持的 Markdown 语法和扩展功能。

## 标题层级

支持从 H1 到 H6 的所有标题级别，每个标题都会自动添加到目录中。

### 三级标题示例

#### 四级标题示例

##### 五级标题示例

###### 六级标题示例

## 文本样式

支持 **粗体**、*斜体*、***粗斜体***、~~删除线~~ 等基本文本格式。

行内代码使用反引号：`const greeting = "Hello World"`

## 代码块

支持多种编程语言的语法高亮，并显示语言标签和复制按钮。

### JavaScript 示例

```javascript
// 异步函数示例
async function fetchData(url) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('获取数据失败:', error)
    throw error
  }
}

// 使用
fetchData('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(err => console.error(err))
```

### Python 示例

```python
# 数据处理示例
import pandas as pd
import numpy as np

def process_data(df):
    """处理数据框"""
    # 删除空值
    df = df.dropna()
    
    # 标准化
    df['normalized'] = (df['value'] - df['value'].mean()) / df['value'].std()
    
    return df

# 使用示例
data = pd.read_csv('data.csv')
processed = process_data(data)
print(processed.head())
```

### CSS 示例

```css
/* 玻璃态效果 */
.glass-card {
  background: rgba(26, 31, 46, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.glass-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 217, 255, 0.2);
}
```

### Shell 示例

```bash
#!/bin/bash
# Git 自动部署脚本

echo "开始部署..."

# 拉取最新代码
git pull origin main

# 安装依赖
npm install

# 构建项目
npm run build

# 重启服务
pm2 restart app

echo "部署完成！"
```

## 列表

### 无序列表

- 第一项
- 第二项
  - 嵌套项 1
  - 嵌套项 2
    - 更深层嵌套
- 第三项

### 有序列表

1. 首先做这个
2. 然后做那个
3. 最后完成
   1. 子步骤 A
   2. 子步骤 B

### 任务列表

- [x] 完成 Markdown 解析增强
- [x] 添加代码块语言标签
- [x] 实现复制按钮
- [ ] 添加图片预览功能
- [ ] 支持数学公式
- [ ] 添加图表支持

## 引用块

> 这是一个引用块示例。
> 
> 可以包含多个段落，支持所有 Markdown 格式。
> 
> > 嵌套引用也是支持的。

## 提示框

使用特殊语法创建不同类型的提示框：

:::tip
💡 **提示**：这是一个有用的提示信息，用于给读者提供额外的帮助或建议。
:::

:::info
ℹ️ **信息**：这是一个普通的信息提示框，用于展示常规信息。
:::

:::warning
⚠️ **警告**：注意！这里有一些需要特别注意的内容，请仔细阅读。
:::

:::danger
🚫 **危险**：严重警告！这个操作可能会导致数据丢失或系统损坏。
:::

## 表格

支持表格对齐和样式：

| 功能 | 支持状态 | 优先级 | 说明 |
|------|---------|-------|------|
| 代码高亮 | ✅ 已完成 | 高 | 支持多种语言 |
| 任务列表 | ✅ 已完成 | 中 | 交互式复选框 |
| 提示框 | ✅ 已完成 | 中 | 4种类型 |
| 数学公式 | ⏳ 计划中 | 低 | KaTeX 支持 |
| 图表 | ⏳ 计划中 | 低 | Mermaid 支持 |

## 链接

支持多种链接类型：

- [内部链接](/notes)
- [外部链接](https://github.com) - 自动添加外部图标
- [带标题的链接](https://example.com "这是一个示例网站")

## 图片

支持图片懒加载和悬停效果：

![Vue Logo](https://vuejs.org/images/logo.png "Vue.js Logo")

## 分割线

使用三个或更多的 `-`、`*` 或 `_` 创建分割线：

---

## 总结

本文档展示了所有支持的 Markdown 功能：

1. ✅ 标题层级（H1-H6）
2. ✅ 文本格式（粗体、斜体、删除线）
3. ✅ 代码块（带语言标签和复制按钮）
4. ✅ 列表（有序、无序、任务）
5. ✅ 引用块
6. ✅ 提示框（tip/info/warning/danger）
7. ✅ 表格
8. ✅ 链接（内部/外部）
9. ✅ 图片（懒加载）
10. ✅ 分割线

更多功能持续开发中... 🚀
