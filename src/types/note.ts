/**
 * 笔记类型定义
 */

export interface NoteFrontmatter {
  title: string
  date: string
  tags?: string[]
  description?: string
  icon?: string
  draft?: boolean
}

export interface NoteMeta extends NoteFrontmatter {
  id: string
  slug: string
}

export interface TocItem {
  id: string
  text: string
  level: number
}

export interface NoteContent {
  frontmatter: NoteFrontmatter
  content: string
  toc: TocItem[]
}
