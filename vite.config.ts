import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // 开发服务器配置
  server: {
    port: 5173,
    open: true,
    // 允许访问 public 目录
    fs: {
      strict: false
    }
  },
  // 构建配置
  build: {
    // 输出目录
    outDir: 'dist',
    // 静态资源目录
    assetsDir: 'assets',
    // 小于此阈值的资源会内联为 base64
    assetsInlineLimit: 4096,
    // 生成 source map
    sourcemap: false,
    // 构建后是否生成报告
    rollupOptions: {
      output: {
        // 分包策略
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router', 'pinia'],
          'highlight': ['highlight.js'],
          'markdown': ['marked']
        }
      }
    }
  }
})
