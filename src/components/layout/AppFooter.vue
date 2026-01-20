<script setup lang="ts">
import { onMounted, ref } from 'vue'

const currentYear = new Date().getFullYear()

// 品牌信息
const brandInfo = {
  name: 'NEGIAO',
  description: '专注于 WebGIS 开发、数据可视化与GIS<br>致力于GIS应用、开发领域的学习。',
  version: 'V2.0.0'
}

// 详细联系方式
const contactDetails = [
  { icon: 'fab fa-qq', label: 'QQ', value: '1482918576' },
  { icon: 'fab fa-weixin', label: '微信', value: 'y1482918576' },
  { icon: 'fas fa-envelope', label: '邮箱', value: 'yaonaigao@gmail.com' }
]

// 社交链接
const socialLinks = [
  { icon: 'fab fa-github', label: 'GitHub', href: 'https://github.com/NEGIAO' },
  { icon: 'fas fa-envelope', label: '邮箱', href: 'mailto:1482918576@qq.com' },
  { icon: 'fab fa-qq', label: 'QQ', href: 'tencent://message/?uin=1482918576' }
]

// 技术标签
const techTags = ['WebGIS', '数据可视化', '全栈开发']

// 统计数据
const stats = ref({
  totalPv: '-',
  todayPersonal: '-'
})

// 快速导航链接
const navLinks = [
  { icon: 'fas fa-rocket', label: '项目展示', href: '/#projects', isRouter: false },
  { icon: 'fas fa-book-open', label: '技术笔记', href: '/notes', isRouter: true },
  { icon: 'fas fa-envelope', label: '联系我', href: '/#contact', isRouter: false }
]

// 延迟加载访客地图 - 使用 IntersectionObserver 动态加载
onMounted(() => {
  const container = document.getElementById('visitor-map-container')
  if (!container) return

  // 加载地图的函数
  const loadVisitorMap = () => {
    // 防止重复加载
    if (document.getElementById('mapmyvisitors')) return
    
    try {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.id = 'mapmyvisitors'
      // 调整尺寸参数：w=300 宽度
      script.src = 'https://mapmyvisitors.com/map.js?cl=ffffff&w=300&t=n&d=n-HXgq2Mge1cHPJX6y2jM_UZP-Kfb5kUxv6fYpxnLJ8&co=1a1f2e&cmo=00d9ff&cmn=ff6b6b'
      
      script.onerror = () => {
        console.info('[访客地图] MapMyVisitors 地图服务暂时无法访问')
        container.style.display = 'none'
      }
      
      script.onload = () => {
        console.info('[访客地图] MapMyVisitors 地图已加载')
      }
      
      container.appendChild(script)
    } catch (error) {
      console.info('[访客地图] 加载失败:', error)
    }
  }

  // 使用 IntersectionObserver 动态加载（当 Footer 进入视口时才加载）
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 延迟 1 秒后加载，避免影响页面滚动
            setTimeout(loadVisitorMap, 1000)
            observer.disconnect()
          }
        })
      },
      { rootMargin: '100px' }
    )
    observer.observe(container)
  } else {
    // 不支持 IntersectionObserver 的浏览器，延迟 3 秒加载
    setTimeout(loadVisitorMap, 3000)
  }
})


</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <!-- 快速导航 -->
        <div class="footer__navigation">
          <h4 class="footer__nav-title">快速导航</h4>
          <nav>
            <ul class="footer__nav-list">
              <li v-for="link in navLinks" :key="link.label">
                <component 
                  :is="link.isRouter ? 'router-link' : 'a'"
                  :to="link.isRouter ? link.href : undefined"
                  :href="!link.isRouter ? link.href : undefined"
                  class="footer__nav-link"
                >
                  <i :class="link.icon"></i>
                  {{ link.label }}
                </component>
              </li>
            </ul>
          </nav>
        </div>

        <!-- NEGIAO 品牌信息 -->
        <div class="footer__brand-section">
          <h3 class="footer__brand-name gradient-text">{{ brandInfo.name }}</h3>
          <p class="footer__brand-desc" v-html="brandInfo.description"></p>

          <!-- 详细联系方式 -->
          <div class="contact-details">
            <h4 class="contact-details__title">联系方式</h4>
            <div class="contact-details__list">
              <div 
                v-for="contact in contactDetails" 
                :key="contact.label"
                class="contact-item"
              >
                <i :class="contact.icon"></i>
                <span class="contact-item__label">{{ contact.label }}:</span>
                <span class="contact-item__value">{{ contact.value }}</span>
              </div>
            </div>
          </div>

          <!-- 社交链接 -->
          <div class="social-links">
            <a 
              v-for="link in socialLinks" 
              :key="link.label"
              :href="link.href"
              :aria-label="link.label"
              class="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i :class="link.icon"></i>
            </a>
          </div>
        </div>

        <!-- 脚注与统计 -->
        <div class="footer__meta">
          <p class="footer__copyright">
            &copy; {{ currentYear }} {{ brandInfo.name }}. All rights reserved.
          </p>
          <p class="footer__built-with">
            用 ❤️ 和现代技术构建
            <span class="version-badge">Version : {{ brandInfo.version }}</span>
          </p>

          <!-- 统计信息 -->
          <div class="stats-widget">
            全站总览: <span class="stats-value">{{ stats.totalPv }}</span> |
            您今日已访问: <span class="stats-value">{{ stats.todayPersonal }}</span> 次
          </div>

          <!-- 访客地图容器 -->
          <div id="visitor-map-container" class="visitor-map"></div>

          <!-- 技术标签 -->
          <div class="tech-tags">
            <span v-for="tag in techTags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer__content {
  display: flex;
  flex-direction: column;
  gap: var(--space-xl);
  text-align: center;
}

/* 快速导航 */
.footer__navigation {
  margin-bottom: var(--space-xl);
}

.footer__nav-title {
  margin-bottom: var(--space-lg);
  color: var(--text-secondary);
  font-size: 1.1rem;
}

.footer__nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--space-lg);
}

.footer__nav-link {
  color: var(--text-muted);
  transition: all 0.3s ease;
  padding: var(--space-xs) var(--space-sm);
  border-radius: var(--radius-sm);
  display: inline-flex;
  align-items: center;
}

.footer__nav-link i {
  margin-right: var(--space-xs);
}

.footer__nav-link:hover {
  color: var(--primary);
  background: rgba(0, 217, 255, 0.1);
  transform: translateY(-2px);
}

/* 品牌信息区域 */
.footer__brand-section {
  margin-bottom: var(--space-xl);
}

.footer__brand-name {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: var(--space-md);
}

.footer__brand-desc {
  color: var(--text-muted);
  margin-bottom: var(--space-lg);
  line-height: 1.6;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

/* 详细联系方式 */
.contact-details {
  margin-bottom: var(--space-lg);
  padding: var(--space-lg);
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(10px);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.contact-details__title {
  color: var(--text-secondary);
  margin-bottom: var(--space-md);
  font-size: 1rem;
  font-weight: 600;
}

.contact-details__list {
  display: grid;
  gap: var(--space-sm);
  max-width: 300px;
  margin: 0 auto;
  text-align: left;
}

.contact-item {
  display: flex;
  align-items: center;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.contact-item i {
  width: 20px;
  margin-right: var(--space-sm);
  color: var(--primary);
}

.contact-item__label {
  margin-right: var(--space-sm);
}

.contact-item__value {
  color: var(--text-secondary);
}

/* 社交链接 */
.social-links {
  display: flex;
  justify-content: center;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: rgba(0, 217, 255, 0.1);
  border: 1px solid rgba(0, 217, 255, 0.2);
  border-radius: 50%;
  color: var(--primary);
  font-size: 1.25rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
  transform: translateY(-4px) scale(1.1);
  box-shadow: 0 8px 20px rgba(0, 217, 255, 0.3);
}

/* 脚注信息 */
.footer__meta {
  border-top: 1px solid var(--border);
  padding-top: var(--space-lg);
}

.footer__copyright {
  color: var(--text-muted);
  font-size: 0.875rem;
  margin-bottom: var(--space-sm);
}

.footer__built-with {
  color: var(--text-disabled);
  font-size: 0.8rem;
  margin-bottom: var(--space-sm);
}

.version-badge {
  margin-left: 8px;
  opacity: 0.8;
  border: 1px solid var(--text-disabled);
  padding: 0 4px;
  border-radius: 4px;
}

/* 统计信息 */
.stats-widget {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: var(--space-sm);
}

.stats-value {
  color: var(--primary);
  font-weight: bold;
  margin: 0 4px;
}

/* 访客地图 */
.visitor-map {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 320px;
  height: 160px;
  margin: var(--space-lg) auto;
  background: rgba(27, 26, 46, 0.5);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  opacity: 0.85;
  transition: all 0.3s ease;
}

.visitor-map:hover {
  opacity: 1;
  border-color: var(--primary);
  box-shadow: 0 4px 20px rgba(0, 217, 255, 0.15);
}

/* 确保地图 iframe/img 适应容器 */
.visitor-map :deep(img),
.visitor-map :deep(iframe) {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* 技术标签 */
.tech-tags {
    display: flex;
    justify-content: center;
    gap: var(--space-sm);
    flex-wrap: wrap;
    font-size: 0.8rem;
    color: var(--text-muted);
    margin-top: var(--space-sm);
}

.tech-tags span {
    background: rgba(255, 255, 255, 0.05);
    padding: 2px 8px;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .footer__nav-list {
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
  }
  
  .footer__nav-link {
    width: 100%;
    max-width: 200px;
    justify-content: center;
    padding: var(--space-sm);
    background: rgba(255, 255, 255, 0.03);
  }

  .footer__brand-name {
    font-size: 1.25rem;
  }
  
  .visitor-map {
    max-width: 280px;
    height: 140px;
  }
}

@media (max-width: 480px) {
  .footer__nav-title {
    font-size: 0.9rem;
  }
  
  .footer__nav-link {
    font-size: 0.85rem;
  }
  
  .contact-item {
    font-size: 0.85rem;
  }
  
  .visitor-map {
    max-width: 240px;
    height: 120px;
  }
  
  .footer__copyright,
  .footer__built-with {
    font-size: 0.75rem;
  }
}
</style>
