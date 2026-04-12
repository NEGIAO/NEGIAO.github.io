# 从0到1搭建Hexo博客

> **写在前面：**
> 
> 这是我从 0 到 1 使用 Hexo + GitHub Pages 双分支管理法搭建个人博客的完整记录。核心目标是将网站源码和生成的静态网页分离备份，既保护代码安全，又能稳定展示网站。如果你想要一个免费、易维护、不怕数据丢失的个人博客站，这套方案能帮你避开 99% 的坑。

---

## 1. 为什么要用双分支管理法？

很多新手在使用 Hexo 时，只会把生成的 HTML 网页传到 GitHub 上，而把极其重要的**网站源码（Markdown 文章、配置文件、主题文件）**留在本地。万一哪天电脑坏了，文章就全丢了！

> **解决方案：同仓库双分支管理**
> - **`main` 分支**：专门存放网站源码（私人云盘）
> - **`gh-pages` 分支**：专门存放 Hexo 生成的 HTML 静态网页（公开展示）

源码和网页同处一个仓库，互不干扰，完美共存！

---

## 2. 详细建站流程

### 2.1 准备工作与创建仓库

1. 在电脑上安装好 **Node.js** 和 **Git**。
2. 登录 GitHub，创建一个名为 `RipZhouDi.github.io` 的 Public 仓库（名字必须严格是 `你的用户名.github.io`）。
3. 将这个空仓库 clone 到本地电脑。

### 2.2 巧妙初始化 Hexo 源码

进入本地刚 clone 下来的仓库文件夹。由于文件夹里已经存在 `.git` 隐藏文件，直接执行 `hexo init` 会报错。

> **解决方案：** 使用临时文件夹来"偷渡"源码

```bash
# 全局安装 hexo
npm install -g hexo-cli

# 1. 生成源码到临时文件夹 temp-hexo
hexo init temp-hexo

# 2. 把临时文件夹里的所有东西复制到当前仓库目录
cp -a temp-hexo/. .

# 3. 删除没用的临时文件夹
rm -rf temp-hexo

# 4. 安装必备依赖包
npm install

# 5. 安装 GitHub 自动部署插件（极其重要）
npm install hexo-deployer-git --save
```

### 2.3 配置 Hexo 的双分支部署

用代码编辑器（VS Code 等）打开 `_config.yml` 文件进行以下配置：

**修改基础网址：**

```yaml
url: https://RipZhouDi.github.io
```

**修改部署目标（最底部）：**

```yaml
deploy:
  type: git
  repo: https://github.com/RipZhouDi/RipZhouDi.github.io.git
  branch: gh-pages   # 【核心魔法】让网页去 gh-pages 分支
```

### 2.4 构建和部署网页

回到终端执行构建部署命令：

```bash
hexo clean && hexo generate && hexo deploy
```

> 此命令将自动生成静态网页，创建 `gh-pages` 分支，并上传网页文件。如果弹出 GitHub 登录框，按提示授权即可。

### 2.5 配置 GitHub Pages 展示分支

在 GitHub 仓库配置中启用 Pages 功能：

1. 打开 GitHub 仓库 → **Settings** → **Pages**
2. Branch 切换为 `gh-pages`，点击 **Save**
3. 等待 1~2 分钟后访问 `https://RipZhouDi.github.io` 查看完成

> 首次部署可能需要几分钟生效，请耐心等待。

### 2.6 备份源码到 main 分支

网页成功展示后，最后一步是将本地源码备份到 main 分支：

```bash
# 1. 把所有源码变更添加到暂存区
git add .

# 2. 写一个提交备注
git commit -m "初始化Hexo博客源码"

# 3. 推送到远端的 main 分支
git push origin main
```

> **提示：** `.gitignore` 文件已自动屏蔽 `node_modules` 和 `public` 等不必要的文件，保持源码仓库干净。

---

## 3. 日常写文章的工作流

之后每次更新文章只需三个命令：

```bash
# 1. 创建新文章
hexo new "文章标题"

# 2. 编写完成后，生成并部署网页
hexo clean && hexo g && hexo d

# 3. 备份源码到 main 分支
git add . && git commit -m "更新文章" && git push
```

> **工作流总结：** 写文章 → 本地预览 → 发布静态网页 → 备份源码
---
title: 我的第一篇博客：从0到1使用Hexo搭建双分支GitHub Pages个人站
date: 2026-04-05 15:00:00
tags:
  - Hexo
  - GitHub Pages
  - 博客搭建
  - 教程
categories:
  - 建站记录
---

Hello World！这是我的个人网站成功上线后的第一篇文章。

为了搭建这个博客，我查阅了不少资料，最终决定使用 **Hexo + GitHub Pages** 的方案，并且采用了目前最优雅、最安全的 **“双分支（Two-Branches）管理法”**。

这篇博客将完整记录我从 0 到 1 的建站全过程。如果你也想拥有一个免费且易于维护的个人网站，跟着这篇教程走，绝对能避开 99% 的坑！

<!-- more -->

## 💡 为什么要用“双分支”管理法？

很多新手在使用 Hexo 时，只会把生成的 HTML 网页传到 GitHub 上，而把极其重要的**网站源码（Markdown 文章、配置文件、主题文件）**留在本地。万一哪天电脑坏了，文章就全丢了！

因此，我采用了同仓库双分支管理：
* **`main` 分支**：作为我的私人云盘，专门存放网站**源码**。
* **`gh-pages` 分支**：专门存放 Hexo 自动生成的 **HTML 静态网页**，供全世界访问。

源码和网页同处一个仓库，互不干扰，完美共存！

---

## 🛠️ 详细建站流程记录

### 第 1 步：准备工作与创建仓库

1. 在电脑上安装好 **Node.js** 和 **Git**。
2. 登录 GitHub，创建一个名为 `RipZhouDi.github.io` 的 Public 仓库（名字必须严格是 `你的用户名.github.io`）。
3. 将这个空仓库 clone 到本地电脑。

### 第 2 步：巧妙初始化 Hexo 源码（避坑！）

进入本地刚 clone 下来的仓库文件夹。由于文件夹里已经存在 `.git` 隐藏文件，直接执行 `hexo init` 会报错。我使用了一个临时文件夹来“偷渡”源码：

```bash
# 全局安装 hexo
npm install -g hexo-cli

# 1. 生成源码到临时文件夹 temp-hexo
hexo init temp-hexo

# 2. 把临时文件夹里的所有东西复制到当前仓库目录
cp -a temp-hexo/. .

# 3. 删除没用的临时文件夹
rm -rf temp-hexo

# 4. 安装必备依赖包
npm install

# 5. 安装 GitHub 自动部署插件（极其重要）
npm install hexo-deployer-git --save
```

### 第 3 步：配置 Hexo，开启"双分支"魔法

接下来，我们要让 Hexo 知道："请把生成的网页发到 gh-pages 分支"。用代码编辑器（比如 VS Code）打开你文件夹里的 `_config.yml` 文件。

**1. 修改基础网址**

在文件顶部附近，找到 URL 设置，改成你的：

```yaml
url: https://RipZhouDi.github.io
```

**2. 修改部署目标**

直接拉到文件最底部，找到 `deploy:`，严格按以下格式修改：

```yaml
deploy:
  type: git
  repo: https://github.com/RipZhouDi/RipZhouDi.github.io.git
  branch: gh-pages   # 【核心魔法】让网页去 gh-pages 分支
```

### 第 4 步：发布你的网页（生成 HTML）
回到终端，执行 Hexo 的终极编译部署命令：
```bash
hexo clean && hexo generate && hexo deploy
```

这行命令会把你的 Markdown 转换成网页，并在你的 GitHub 仓库里自动创建一个叫 `gh-pages` 的新分支，然后把网页传进去。

> 💡 **提示**：如果弹出提示框让你登录 GitHub，请按提示授权即可。

### 第 5 步：去 GitHub 切换网页展示分支

现在网页已经上传了，我们要告诉 GitHub 去哪里读取它：

1. 登录 GitHub，打开你的 `RipZhouDi.github.io` 仓库页面
2. 点击顶部的 **Settings**（设置）
3. 在左侧菜单找到 **Pages**
4. 在 Build and deployment 下的 Branch 选项里，点击下拉菜单，把 `main` 改为 `gh-pages`
5. 点击右侧的 **Save** 按钮

> ✅ 等待大约 1~2 分钟，去浏览器访问 `https://RipZhouDi.github.io`，你就能看到默认的"Hello World"博客啦！

### 第 6 步：把源码备份到 main 分支（极其重要！）

网页成功展示了，最后一步是把我们本地的源码锁进 main 分支的保险柜里。回到你的终端，执行标准的 Git 命令：

```bash
# 1. 把所有源码变更添加到暂存区
git add .

# 2. 写一个提交备注
git commit -m "初始化Hexo博客源码"

# 3. 推送到远端的 main 分支
git push origin main
```

> 💡 **提示**：Hexo 默认的 `.gitignore` 文件已经帮你屏蔽了 `node_modules` 和 `public` 等不需要备份的垃圾文件，所以 main 分支里非常干净，全是你纯粹的源码！

---

## 📝 以后写文章的日常操作（三步法）

从现在开始，每次写文章你只需要这三步：

1. 终端输入 `hexo new "文章名字"` 创建文章，用编辑器（如 Typora）写完
2. 终端输入 `hexo clean && hexo g && hexo d` 发布网页
3. 终端输入 `git add . && git commit -m "更新文章" && git push` 备份源码

以后你写文章的日常操作（只需这三步）：
终端输入 hexo new "文章名字" 创建文章，用 Typora 等软件写完。
终端输入 hexo clean && hexo g && hexo d 发布网页。
终端输入 git add . && git commit -m "更新文章" && git push 备份源码。