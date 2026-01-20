<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue'

// 项目数据
const projects = [
  {
    number: '01',
    label: '比赛项目',
    title: '智慧城市出行辅助系统',
    desc: '基于WebGIS技术的城市交通可视化与路径规划系统，整合实时交通数据、公共交通信息及兴趣点数据，为用户提供智能化出行建议。',
    tags: ['GeoServer', 'OpenLayers', 'Vue.js', 'Turf.js', 'PostgreSQL'],
    link: '/WebGIS/index.html'
  },
  {
    number: '02',
    label: '课程项目',
    title: '林业有害生物应急管理系统',
    desc: '基于SSM框架的林业有害生物预警与应急响应平台，实现了疫情监测、预警发布、应急处置等功能模块的一体化管理。',
    tags: ['Spring', 'MyBatis', 'GeoServer', 'PostgreSQL'],
    link: '#'
  },
  {
    number: '03',
    label: '个人项目',
    title: '地铁站点空间分析',
    desc: '利用百度地图API获取全国地铁站点数据，结合城市人口、经济等社会经济指标，进行空间统计分析与可视化呈现。',
    tags: ['Python', 'Pandas', 'GeoPandas', 'Matplotlib', 'QGIS'],
    link: '#'
  },
  {
    number: '04',
    label: '学习项目',
    title: '技术笔记系统',
    desc: '基于Vue3的Markdown笔记管理系统，支持笔记分类、标签管理、全文搜索等功能，记录学习历程与技术积累。',
    tags: ['Vue 3', 'TypeScript', 'Markdown', 'Vite'],
    link: '/notes'
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
            <a 
              v-if="project.link !== '#'"
              :href="project.link" 
              class="project-link"
            >
              探索项目 <i class="fas fa-arrow-right"></i>
            </a>
            <span v-else class="project-link" style="opacity: 0.5; cursor: default;">
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
.home-view {
  /* 首页不需要额外的 padding-top，因为 Hero 是全屏的 */
}

/* 响应式调整 */
@media (max-width: 1024px) {
  .home-view {
    /* 移动端需要考虑 navbar 高度 */
  }
}
</style>
