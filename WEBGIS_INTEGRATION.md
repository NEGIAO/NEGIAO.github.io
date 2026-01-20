# WebGIS 集成说明

## 概述

WebGIS 模块是一个**独立的 Vue 3 项目**，通过 GitHub Actions 自动构建并部署到本项目的 `public/WebGIS/` 目录。

## 架构设计

### 独立项目架构
```
WebGIS_henu_trials_5_28_vue3/        # WebGIS 独立项目仓库
├── src/
│   ├── components/
│   │   ├── Map2D/                   # OpenLayers 2D 地图
│   │   ├── Map3D/                   # Cesium 3D 地球
│   │   └── ...
│   ├── views/
│   └── App.vue
├── public/
├── package.json
└── vite.config.ts
```

### GitHub Actions 自动部署

WebGIS 项目在每次推送代码时会自动执行以下流程：

```yaml
# .github/workflows/deploy.yml (在 WebGIS 项目中)
name: Build and Deploy to Main Project

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout WebGIS Project
        uses: actions/checkout@v3
        
      - name: Install Dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Main Project
        uses: peaceiris/actions-gh-pages@v3
        with:
          deploy_key: ${{ secrets.DEPLOY_KEY }}
          external_repository: NEGIAO/NEGIAO.github.io
          publish_branch: main
          publish_dir: ./dist
          destination_dir: WebGIS
```

## 在本项目中的集成

### 1. 目录结构

```
d:/Dev/GitHub/VueFile/
└── public/
    └── WebGIS/                      # WebGIS 构建产物（不纳入版本控制）
        ├── index.html               # WebGIS 入口
        ├── assets/                  # JS/CSS 资源
        ├── cesium/                  # Cesium 库
        ├── images/                  # 图片资源
        └── tiles/                   # 地图瓦片
```

### 2. 链接方式

在本项目中通过**外部链接**访问 WebGIS：

#### 首页链接示例

```vue
<!-- src/views/Home/HomeView.vue -->
<template>
  <div class="hero__actions">
    <!-- 外部链接到 WebGIS -->
    <a href="/WebGIS/index.html" class="btn btn--outline">
      <i class="fas fa-map"></i> WebGIS
    </a>
    
    <!-- 或使用新窗口打开 -->
    <a 
      href="/WebGIS/index.html" 
      target="_blank"
      rel="noopener noreferrer"
      class="btn btn--outline"
    >
      <i class="fas fa-map"></i> WebGIS 2D/3D
    </a>
  </div>
</template>
```

#### 导航栏链接示例

```vue
<!-- src/components/layout/AppHeader.vue -->
<template>
  <nav>
    <ul class="navbar__nav">
      <li>
        <RouterLink to="/">首页</RouterLink>
      </li>
      <li>
        <RouterLink to="/notes">笔记</RouterLink>
      </li>
      <li>
        <!-- 外部链接，不使用 RouterLink -->
        <a href="/WebGIS/index.html">WebGIS</a>
      </li>
    </ul>
  </nav>
</template>
```

### 3. .gitignore 配置

```gitignore
# WebGIS 目录由外部项目构建，不纳入版本控制
/public/WebGIS/

# 但保留一个空的 .gitkeep 文件以保持目录结构
!/public/WebGIS/.gitkeep
```

### 4. 本地开发

在本地开发时，如果需要测试 WebGIS 集成：

```bash
# 方式一：手动复制 WebGIS 构建产物
# 从 WebGIS 项目构建后复制到本项目
cp -r ../WebGIS_henu_trials_5_28_vue3/dist/* public/WebGIS/

# 方式二：使用符号链接（开发推荐）
# Windows
mklink /D public\WebGIS ..\WebGIS_henu_trials_5_28_vue3\dist

# macOS/Linux
ln -s ../WebGIS_henu_trials_5_28_vue3/dist public/WebGIS
```

### 5. Vite 配置

确保 Vite 不处理 WebGIS 目录：

```typescript
// vite.config.ts
export default defineConfig({
  publicDir: 'public',
  build: {
    rollupOptions: {
      // WebGIS 目录会被直接复制到 dist，不参与打包
      // public/ 下的所有文件会自动复制，无需额外配置
    }
  }
})
```

## 部署流程

### GitHub Pages 部署

1. **WebGIS 项目推送**
   - WebGIS 项目 push 代码到 GitHub
   - 触发 GitHub Actions
   - 自动构建并部署到 `NEGIAO.github.io` 仓库的 `WebGIS/` 目录

2. **主项目构建**
   - 本项目构建时，`public/WebGIS/` 会被自动复制到 `dist/WebGIS/`
   - 部署到 GitHub Pages 后，WebGIS 可通过 `https://negiao.github.io/WebGIS/` 访问

### 完整部署架构

```
┌─────────────────────────────────────┐
│  WebGIS 独立项目仓库                  │
│  (WebGIS_henu_trials_5_28_vue3)     │
└─────────────┬───────────────────────┘
              │ GitHub Actions
              │ (自动构建)
              ▼
┌─────────────────────────────────────┐
│  主项目仓库 (NEGIAO.github.io)        │
│  ├── public/WebGIS/  ← 部署到这里     │
│  ├── src/                            │
│  └── ...                             │
└─────────────┬───────────────────────┘
              │ 主项目 GitHub Actions
              │ (构建 + 部署)
              ▼
┌─────────────────────────────────────┐
│  GitHub Pages                        │
│  https://negiao.github.io/           │
│  ├── index.html  (主项目首页)         │
│  ├── WebGIS/     (WebGIS 应用)       │
│  └── ...                             │
└─────────────────────────────────────┘
```

## 优势

1. **独立开发**：WebGIS 可以独立开发、测试、部署
2. **技术栈分离**：WebGIS 使用自己的技术栈（OpenLayers、Cesium）
3. **构建优化**：两个项目分别优化构建，避免主项目体积过大
4. **版本管理**：WebGIS 有独立的版本控制和发布周期
5. **团队协作**：不同团队可以并行开发主项目和 WebGIS

## 注意事项

1. **路径处理**：WebGIS 中的资源路径要使用相对路径或基于 `/WebGIS/` 的绝对路径
2. **跨域问题**：如果 WebGIS 需要访问主项目的 API，需要配置 CORS
3. **缓存策略**：WebGIS 和主项目可以配置不同的缓存策略
4. **更新同步**：WebGIS 更新后，主项目无需重新构建（直接覆盖 WebGIS/ 目录）

## 链接参考

- WebGIS 项目仓库：`https://github.com/NEGIAO/WebGIS_henu_trials_5_28_vue3`
- 主项目仓库：`https://github.com/NEGIAO/NEGIAO.github.io`
- 在线访问：`https://negiao.github.io/WebGIS/`
