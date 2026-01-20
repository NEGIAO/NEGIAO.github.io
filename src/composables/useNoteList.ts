/**
 * 笔记列表 Composable
 */

import { ref, computed } from 'vue'
import type { NoteMeta } from '@/types/note'

// 笔记元数据列表（可以从配置文件或 API 获取）
const notesMetaData: NoteMeta[] = [
  {
    id: 'arcgis-engine',
    slug: 'arcgis-engine',
    title: 'ArcGIS Engine 开发实践',
    date: '2024-05-20',
    description: 'ArcGIS Engine 桌面 GIS 应用开发，包含环境配置与基础功能实现',
    tags: ['GIS开发', 'C#', '.NET'],
    icon: 'fas fa-code'
  },
  {
    id: 'arcgis-engine-project',
    slug: 'arcgis-engine-project',
    title: 'ArcGIS Engine 项目实战',
    date: '2024-05-25',
    description: '完整的 ArcGIS Engine 项目开发流程与实践经验',
    tags: ['GIS开发', 'C#', '项目'],
    icon: 'fas fa-project-diagram'
  },
  {
    id: 'arcpy',
    slug: 'arcpy',
    title: 'ArcPy 自动化处理',
    date: '2024-06-15',
    description: 'Python 在 ArcGIS 中的自动化应用，批量处理地理数据',
    tags: ['Python', 'ArcGIS', '自动化'],
    icon: 'fab fa-python'
  },
  {
    id: 'gee-coursework',
    slug: 'gee-coursework',
    title: 'Google Earth Engine 课程笔记',
    date: '2024-07-10',
    description: 'GEE 遥感数据处理与分析课程学习笔记',
    tags: ['GEE', '遥感', 'JavaScript'],
    icon: 'fas fa-globe'
  },
  {
    id: 'ml-dl-learning',
    slug: 'ml-dl-learning',
    title: '机器学习与深度学习',
    date: '2024-08-01',
    description: 'ML/DL 基础概念与实践笔记',
    tags: ['机器学习', '深度学习', 'Python'],
    icon: 'fas fa-brain'
  },
  {
    id: 'spatial-analysis-R',
    slug: 'spatial-analysis-R',
    title: 'R 语言空间分析',
    date: '2024-08-20',
    description: '使用 R 进行空间数据分析与可视化',
    tags: ['R', '空间分析', '统计'],
    icon: 'fas fa-chart-bar'
  },
  {
    id: 'negiao-toolbox',
    slug: 'negiao-toolbox',
    title: 'NEGIAO 工具箱',
    date: '2024-09-01',
    description: '自制 ArcGIS 工具箱使用说明与功能介绍',
    tags: ['ArcGIS', '工具', 'Python'],
    icon: 'fas fa-toolbox'
  },
  {
    id: 'word-learning-record',
    slug: 'word-learning-record',
    title: '英语学习记录',
    date: '2024-09-15',
    description: '英语单词与短语学习记录',
    tags: ['英语', '学习'],
    icon: 'fas fa-language'
  }
]

export function useNoteList() {
  const notes = ref<NoteMeta[]>(notesMetaData)
  const searchQuery = ref('')
  const selectedTag = ref('')
  const isLoading = ref(false)

  // 过滤后的笔记列表
  const filteredNotes = computed(() => {
    return notes.value.filter(note => {
      // 排除草稿
      if (note.draft) return false

      // 搜索过滤
      const matchesSearch =
        !searchQuery.value ||
        note.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        note.description?.toLowerCase().includes(searchQuery.value.toLowerCase())

      // 标签过滤
      const matchesTag =
        !selectedTag.value || note.tags?.includes(selectedTag.value)

      return matchesSearch && matchesTag
    })
  })

  // 所有标签
  const allTags = computed(() => {
    const tags = new Set<string>()
    notes.value.forEach(note => {
      note.tags?.forEach(tag => tags.add(tag))
    })
    return Array.from(tags).sort()
  })

  // 按日期排序（最新在前）
  const sortedNotes = computed(() => {
    return [...filteredNotes.value].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
  })

  // 设置搜索关键词
  const setSearchQuery = (query: string) => {
    searchQuery.value = query
  }

  // 设置选中的标签
  const setSelectedTag = (tag: string) => {
    selectedTag.value = selectedTag.value === tag ? '' : tag
  }

  // 清除所有过滤
  const clearFilters = () => {
    searchQuery.value = ''
    selectedTag.value = ''
  }

  return {
    notes,
    filteredNotes,
    sortedNotes,
    searchQuery,
    selectedTag,
    allTags,
    isLoading,
    setSearchQuery,
    setSelectedTag,
    clearFilters
  }
}
