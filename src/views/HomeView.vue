<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'

// 项目链接类型
type ProjectLinkType = 'route' | 'external' | 'disabled'

interface Project {
  number: string
  label: string
  title: string
  desc: string
  tags: string[]
  link: string
  linkType: ProjectLinkType
}

// 项目数据
const projects: Project[] = [
  {
    number: '01',
    label: 'Vue',
    title: 'WebGIS',
    desc: '基于Vue3和OpenLayers的WebGIS应用，集成多种空间分析工具，实现地图浏览、图层管理和空间数据可视化功能。',
    tags: ['GeoServer', 'OpenLayers', 'Vue.js', 'Turf.js', 'PostgreSQL'],
    link: '/WebGIS/index.html',
    linkType: 'external' // 外部链接，新标签打开
  },
  {
    number: '02',
    label: '笔记',
    title: '笔记管理',
    desc: '基于Vue3的Markdown笔记管理系统，支持笔记分类、标签管理、全文搜索等功能，记录学习历程与技术积累。',
    tags: ['Vue 3', 'TypeScript', 'Markdown', 'Vite'],
    link: '/notes',
    linkType: 'route' // Vue 路由跳转
  },
  {
    number: '03',
    label: '展示项目',
    title: 'GeoScene-宝藏小城',
    desc: 'Story Map项目，利用多源地理空间数据展示中国六大城市的时空变化特征与规律。',
    tags: ['数据可视化', '时空分析', '地图制图', '交互设计'],
    link: '/geoscene',
    linkType: 'route' // Vue 路由跳转到中间页面
  },
  {
    number: '04',
    label: '实用应用',
    title: 'Posit Connect Cloud ',
    desc: '基于Posit Connect Cloud 托管动态交互内容',
    tags: ['R Shiny', '数据可视化', '交互式应用'],
    link: 'https://github.com/NEGIAO/posit_Connect',
    linkType: 'external' // 外部链接，新标签打开
    // linkType: 'disabled' // 禁用状态
  }
]
</script>

<template>
  <div class="home-view">
    <!-- Hero 区块 -->
    <HeroSection />

    <!-- 项目展示区块 -->
    <section class="section projects" id="projects">
      <div class="container">
        <h2 class="text-center gradient-text" style="font-size: 2.5rem; margin-bottom: 3rem;">
          Project
        </h2>

        <div class="projects-grid">
          <article 
            v-for="project in projects" 
            :key="project.number"
            class="project-item"
          >
            <div class="project-header">
              <div class="project-number">{{ project.number }}</div>
              <span class="project-label">{{ project.label }}</span>
            </div>
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.desc }}</p>
            <div class="project-tags">
              <span 
                v-for="tag in project.tags" 
                :key="tag" 
                class="tag"
              >
                {{ tag }}
              </span>
            </div>
            <RouterLink
              v-if="project.linkType === 'route'"
              :to="project.link"
              class="project-link"
            >
              探索项目 <i class="fas fa-arrow-right"></i>
            </RouterLink>
            <a
              v-else-if="project.linkType === 'external'"
              :href="project.link"
              class="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              探索项目 <i class="fas fa-external-link-alt"></i>
            </a>
            <span 
              v-else 
              class="project-link" 
              style="opacity: 0.5; cursor: default;"
            >
              暂未开放 <i class="fas fa-lock"></i>
            </span>
          </article>
        </div>
      </div>
    </section>

    <!-- 联系区块 -->
    <section class="section" id="contact" style="background: var(--surface);">
      <div class="container text-center">
        <h2 class="gradient-text" style="font-size: 2rem; margin-bottom: 1.5rem;">
          Contact Me
        </h2>
        <p style="color: var(--text-muted); margin-bottom: 2rem; max-width: 600px; margin-left: auto; margin-right: auto;">
          如果你对我的项目感兴趣，或者有任何问题想要交流，欢迎通过以下方式联系我
        </p>
        <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
          <a href="https://github.com/NEGIAO" target="_blank" rel="noopener noreferrer" class="btn btn--outline">
            <i class="fab fa-github"></i> GitHub
          </a>
          <a href="mailto:example@example.com" class="btn btn--primary">
            <i class="fas fa-envelope"></i> 发送邮件
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 响应式调整 */
@media (max-width: 1024px) {
  /* 项目卡片两列 */
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
  }
}

@media (max-width: 768px) {
  .home-view {
    padding-bottom: var(--space-xl);
  }
  
  /* 项目卡片单列 */
  .projects-grid {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }
  
  /* 调整标题大小 */
  .section h2 {
    font-size: 2rem !important;
    margin-bottom: 2rem !important;
  }
  
  /* 联系区块按钮 */
  #contact > div > div {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  
  #contact .btn {
    width: 100%;
    max-width: 250px;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .section h2 {
    font-size: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }
  
  #contact p {
    font-size: 0.9rem;
  }
}
</style>
