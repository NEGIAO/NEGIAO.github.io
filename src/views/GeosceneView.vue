<script setup lang="ts">
import { RouterLink } from 'vue-router'

// 静态目录结构（指向 public/Geoscene_宝藏小城 下的文件）
const sections = [
  {
    key: 'season',
    title: '季节变化',
    icon: 'fas fa-cloud-sun', 
    desc: '探索不同城市的四季更迭与气候特征',
    color: 'from-blue-400 to-cyan-300',
    files: [
      { name: '利川市', path: '/Geoscene_宝藏小城/季节变化/利川市_季节变化.html' },
      { name: '淮安市', path: '/Geoscene_宝藏小城/季节变化/淮安市_季节变化.html' },
      { name: '荣成市', path: '/Geoscene_宝藏小城/季节变化/荣成市_季节变化.html' },
      { name: '象山县', path: '/Geoscene_宝藏小城/季节变化/象山县_季节变化.html' },
      { name: '铜仁市', path: '/Geoscene_宝藏小城/季节变化/铜仁市_季节变化.html' },
      { name: '隰县', path: '/Geoscene_宝藏小城/季节变化/隰县_季节变化.html' }
    ]
  },
  {
    key: 'withinYear',
    title: '年内变化',
    icon: 'fas fa-chart-line',
    desc: '展示一年内的时序变化趋势与规律',
    color: 'from-emerald-400 to-teal-300',
    files: [
      { name: '利川市', path: '/Geoscene_宝藏小城/年内变化/利川市_年内变化.html' },
      { name: '淮安市', path: '/Geoscene_宝藏小城/年内变化/淮安市_年内变化.html' },
      { name: '荣成市', path: '/Geoscene_宝藏小城/年内变化/荣成市_年内变化.html' },
      { name: '象山县', path: '/Geoscene_宝藏小城/年内变化/象山县_年内变化.html' },
      { name: '铜仁市', path: '/Geoscene_宝藏小城/年内变化/铜仁市_年内变化.html' },
      { name: '隰县', path: '/Geoscene_宝藏小城/年内变化/隰县_年内变化.html' }
    ]
  },
  {
    key: 'interYear',
    title: '年际变化',
    icon: 'fas fa-history',
    desc: '分析多年跨度的演变历程与发展脉络',
    color: 'from-purple-400 to-pink-300',
    files: [
      { name: '利川市', path: '/Geoscene_宝藏小城/年际变化/利川市_年际变化.html' },
      { name: '淮安市', path: '/Geoscene_宝藏小城/年际变化/淮安市_年际变化.html' },
      { name: '荣成市', path: '/Geoscene_宝藏小城/年际变化/荣成市_年际变化.html' },
      { name: '象山县', path: '/Geoscene_宝藏小城/年际变化/象山县_年际变化.html' },
      { name: '铜仁市', path: '/Geoscene_宝藏小城/年际变化/铜仁市_年际变化.html' },
      { name: '隰县', path: '/Geoscene_宝藏小城/年际变化/隰县_年际变化.html' }
    ]
  },
  {
    key: 'wordcloud',
    title: '词云图',
    icon: 'fas fa-language',
    desc: '基于文本挖掘的城市印象与文化关键词',
    color: 'from-orange-400 to-red-300',
    files: [
      { name: '利川', path: '/Geoscene_宝藏小城/词云图/词云图_利川.html' },
      { name: '淮安', path: '/Geoscene_宝藏小城/词云图/词云图_淮安.html' },
      { name: '荣成', path: '/Geoscene_宝藏小城/词云图/词云图_荣成.html' },
      { name: '象山', path: '/Geoscene_宝藏小城/词云图/词云图_象山.html' },
      { name: '铜仁', path: '/Geoscene_宝藏小城/词云图/词云图_铜仁.html' },
      { name: '隰县', path: '/Geoscene_宝藏小城/词云图/词云图_隰县.html' }
    ]
  }
]
</script>

<template>
  <div class="geoscene-view">
    <!-- 头部区域 -->
    <header class="page-header">
      <div class="container">
        <RouterLink to="/" class="back-link">
          <i class="fas fa-arrow-left"></i> 返回首页
        </RouterLink>
        <div class="header-content">
          <h1 class="page-title gradient-text">GeoScene 宝藏小城</h1>
          <p class="page-desc">
            Story Map 多源地理数据展示平台，探索中国六大城市的时空特征。
          </p>
        </div>
      </div>
    </header>

    <!-- 内容网格 -->
    <main class="page-body">
      <div class="container">
        <div class="category-grid">
          <article 
            v-for="section in sections" 
            :key="section.key" 
            class="category-card"
          >
            <div class="category-header">
              <div class="icon-wrapper">
                <i :class="section.icon"></i>
              </div>
              <h2 class="category-title">{{ section.title }}</h2>
              <p class="category-desc">{{ section.desc }}</p>
            </div>
            
            <div class="city-grid">
              <a 
                v-for="file in section.files" 
                :key="file.path" 
                :href="file.path" 
                target="_blank" 
                rel="noopener noreferrer"
                class="city-link"
              >
                <div class="city-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <span>{{ file.name }}</span>
                <i class="fas fa-external-link-alt link-arrow"></i>
              </a>
            </div>
          </article>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.geoscene-view {
  min-height: 100vh;
  padding-bottom: 4rem;
  background: var(--bg-dark);
}

.page-header {
  padding: 6rem 0 3rem;
  background: radial-gradient(circle at 50% 0%, rgba(0, 217, 255, 0.1) 0%, transparent 70%);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-weight: 500;
  margin-bottom: 2rem;
  transition: color 0.2s;
}

.back-link:hover {
  color: var(--primary);
}

.header-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.page-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.page-desc {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.page-body {
  padding-top: 2rem;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.category-card {
  background: var(--surface);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 217, 255, 0.2);
}

/* 顶部光晕装饰 */
.category-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.category-card:hover::before {
  opacity: 1;
}

.category-header {
  margin-bottom: 2rem;
}

.icon-wrapper {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(0, 217, 255, 0.1);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.category-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.5rem;
}

.category-desc {
  color: var(--text-muted);
  font-size: 0.9rem;
}

.city-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 1rem;
}

.city-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.city-link:hover {
  background: rgba(0, 217, 255, 0.1);
  border-color: rgba(0, 217, 255, 0.2);
  color: var(--primary);
  transform: translateY(-2px);
}

.city-icon {
  font-size: 0.8em;
  opacity: 0.7;
}

.link-arrow {
  margin-left: auto;
  font-size: 0.8em;
  opacity: 0;
  transform: translateX(-5px);
  transition: all 0.2s ease;
}

.city-link:hover .link-arrow {
  opacity: 0.7;
  transform: translateX(0);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .category-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .page-header {
    padding: 4rem 0 2rem;
  }
}
</style>
