# 从 0 到 1 搭建 Hexo 博客：GitHub Pages 双分支管理与自动化部署指南

> **写在前面：**
> 这是从 0 到 1 使用 **Hexo + GitHub Pages 双分支管理法** 搭建个人技术博客的完整实战记录。核心目标是将**网站源码（Markdown 文章、主题与配置）**与**编译后的静态网页（HTML/CSS/JS）**同仓分流，既保障源码云端备份永不丢失，又能一键发布线上站点。

---

## 一、为什么要用“同仓库双分支”管理法？

许多初次接触 Hexo 的同学只会运行 `hexo deploy` 把生成的静态 HTML 推送到 GitHub，而把极其重要的**网站源码（`source/_posts/*.md`、`_config.yml`、主题配置）**留在本地电脑硬盘。一旦重装系统或更换电脑，所有 Markdown 原稿和个性化配置都会丢失。

> **核心方案：同仓库双分支隔离管理**
> - **`main` 分支（私人源码库）**：专门存放 Hexo 工程源码、Markdown 原稿与配置文件。
> - **`gh-pages` 分支（公开静态站）**：专门存放 `hexo generate` 自动编译出的 `public/` 静态网页文件，绑定 GitHub Pages 对外提供访问。

源码与网页同处一个 `<username>.github.io` 仓库，互不干扰，换电脑时只需 `git clone` 即可无缝恢复写作环境！

---

## 二、从零建站完整六步流程

### 2.1 环境准备与创建仓库

1. 本地安装 **Node.js**（建议 LTS 版本）与 **Git**。
2. 登录 GitHub，创建一个名为 `<你的GitHub用户名>.github.io` 的 **Public** 仓库（例如 `RipZhouDi.github.io`）。
3. 将空仓库克隆到本地：
   ```bash
   git clone https://github.com/RipZhouDi/RipZhouDi.github.io.git
   cd RipZhouDi.github.io
   ```

### 2.2 巧妙初始化 Hexo 源码（避坑非空目录限制）

由于刚 clone 下来的目录中已存在 `.git` 隐藏文件夹，直接在当前目录执行 `hexo init` 会因目录非空报错。最稳妥的做法是通过临时目录初始化后拷回：

```bash
# 1. 全局安装 Hexo CLI
npm install -g hexo-cli

# 2. 初始化源码到临时目录 temp-hexo
hexo init temp-hexo

# 3. 将临时目录中的全部文件（含 .gitignore 隐藏文件）复制到当前仓库根目录
cp -a temp-hexo/. .

# 4. 清理临时目录
rm -rf temp-hexo

# 5. 安装核心依赖与 Git 自动部署插件（必装）
npm install
npm install hexo-deployer-git --save
```

### 2.3 配置 `_config.yml` 开启双分支部署

使用 VS Code 打开根目录下的 `_config.yml` 文件，完成两处关键配置：

1. **配置站点基本信息与域名**：
   ```yaml
   title: 我的个人技术博客
   language: zh-CN
   timezone: Asia/Shanghai
   url: https://RipZhouDi.github.io
   ```
2. **配置底部 `deploy` 部署目标分支为 `gh-pages`**：
   ```yaml
   deploy:
     type: git
     repo: https://github.com/RipZhouDi/RipZhouDi.github.io.git
     branch: gh-pages   # 【核心配置】让编译后的静态网页自动推送到 gh-pages 分支
   ```

### 2.4 本地预览与首次编译发布

在发布上线前，可以先在本地 `http://localhost:4000` 预览排版效果，确认无误后一键编译并推送静态页：

```bash
# 本地启动热重载预览服务（默认端口 4000）
hexo clean && hexo server

# 确认无误后，清理缓存 → 生成静态文件 → 部署至远端 gh-pages 分支
hexo clean && hexo generate && hexo deploy
```

> 💡 **提示**：该命令会自动将 Markdown 渲染为静态网页，在远端仓库创建 `gh-pages` 分支并推送 `public/` 目录内容。

### 2.5 切换 GitHub Pages 展示分支

1. 打开 GitHub 仓库页面 → 顶部 **Settings** → 左侧菜单 **Pages**。
2. 在 **Build and deployment** → **Branch** 下拉框中，将分支切换为 **`gh-pages`**（目录保持 `/(root)`），点击 **Save**。
3. 等待 1~2 分钟构建完成后，访问 `https://<你的用户名>.github.io` 即可看到上线后的博客。

### 2.6 将站点源码备份至 `main` 分支

静态网页上线后，务必将本地源码提交并推送到 `main` 分支：

```bash
git add .
git commit -m "chore: 初始化 Hexo 博客源码"
git push origin main
```

> 💡 **为什么不需要手动过滤生成产物？** Hexo 默认生成的 `.gitignore` 已经屏蔽了 `node_modules/`、`public/`、`.deploy_git/` 和 `db.json`，因此推送到 `main` 分支的只有纯净的 Markdown 原稿与配置文件。

---

## 三、日常写作与维护标准工作流（三步法）

完成初始化后，日常新增或修改文章只需执行以下三步：

```bash
# 第一步：创建新文章（自动生成在 source/_posts/ 目录下）
hexo new "文章标题"

# 第二步：使用 Markdown 编辑器完成写作后，一键清理、构建并发布静态页（简写命令）
hexo clean && hexo g -d

# 第三步：将新增的 Markdown 原稿同步备份到 main 分支
git add . && git commit -m "docs: 新增文章《文章标题》" && git push origin main
```

---

## 四、进阶避坑与工程化建议

1. **自定义域名（`CNAME`）防覆盖**：
   如果绑定了个人独立域名，切勿直接在 GitHub 网页端设置（每次 `hexo d` 都会把 `gh-pages` 分支上的 `CNAME` 冲掉）。正确做法是在本地 `source/` 目录下新建一个无后缀的 `CNAME` 文件，写入你的域名，这样每次 `hexo g` 都会自动将其复制到 `public/CNAME`。
2. **新电脑一键恢复写作环境**：
   在新设备上无需重新 `hexo init`，只需执行：
   ```bash
   git clone -b main https://github.com/RipZhouDi/RipZhouDi.github.io.git
   cd RipZhouDi.github.io
   npm install
   ```
   即可立即恢复全部历史文章与主题配置。
3. **内置公式与插件冲突排查**：
   若在 Hexo 中渲染复杂 LaTeX 数学公式，建议将默认的 `hexo-renderer-marked` 替换为 `hexo-renderer-kramed` 或开启 KaTeX 渲染器，避免下划线 `_` 被误解析为斜体标签。
