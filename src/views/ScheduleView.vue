<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

// 时间段配置
const timeSlots = [
  { period: 1, start: '08:00', end: '08:45' },
  { period: 2, start: '08:55', end: '09:40' },
  { period: 3, start: '10:00', end: '10:45' },
  { period: 4, start: '10:55', end: '11:40' },
  { period: 5, start: '11:45', end: '12:30' },
  { period: 6, start: '14:05', end: '14:50' },
  { period: 7, start: '15:00', end: '15:45' },
  { period: 8, start: '15:55', end: '16:40' },
  { period: 9, start: '17:00', end: '17:45' },
  { period: 10, start: '17:55', end: '18:40' },
  { period: 11, start: '19:10', end: '19:55' },
  { period: 12, start: '20:05', end: '20:50' },
  { period: 13, start: '20:55', end: '21:40' }
]

// 课程安排
const schedule: Record<number, Record<number, { name: string; location: string }>> = {
  1: {
    3: { name: '空间数据库', location: '113机房' },
    4: { name: '空间数据库', location: '113机房' },
    7: { name: '空间数据库', location: '114机房' },
    8: { name: '空间数据库', location: '114机房' }
  },
  2: {
    1: { name: 'GEE', location: '113' },
    2: { name: 'GEE', location: '113' },
    3: { name: '空间分析', location: '曾宪梓楼606' },
    4: { name: '空间分析', location: '曾宪梓楼606' },
    5: { name: '空间分析', location: '曾宪梓楼606' },
    9: { name: 'GIS二次开发', location: '114' },
    10:{ name: 'GIS二次开发', location: '114' },
    11:{ name: 'GIS二次开发', location: '114' },
    12:{ name: 'GIS二次开发', location: '114' }
  },
  3: {
    6: { name: '卫星导航原理', location: '曾宪梓楼606' },
    7: { name: '卫星导航原理', location: '曾宪梓楼606' },
    8: { name: '卫星导航原理', location: '曾宪梓楼606' }
  },
  4: {
    3: { name: '激光雷达遥感', location: '曾宪梓楼606' },
    4: { name: '激光雷达遥感', location: '曾宪梓楼606' },
    11:{ name: '机器学习导论', location: '曾宪梓楼606' },
    12:{ name: '机器学习导论', location: '曾宪梓楼606' }
  },
  5: {
    1: { name: '无人机遥感', location: '114' },
    2: { name: '无人机遥感', location: '114' },
    6: { name: '摄影测量学', location: '曾宪梓楼606' },
    7: { name: '摄影测量学', location: '曾宪梓楼606' },
    8: { name: '摄影测量学', location: '曾宪梓楼606' }
  }
}

// 课程颜色类名
const courseColors: Record<string, string> = {
  '空间数据库': 'course-spatial-db',
  'GEE': 'course-gee',
  '空间分析': 'course-spatial-analysis',
  'GIS二次开发': 'course-gis-dev',
  '卫星导航原理': 'course-navigation',
  '激光雷达遥感': 'course-lidar',
  '机器学习导论': 'course-ml',
  '无人机遥感': 'course-uav',
  '摄影测量学': 'course-photogrammetry'
}

type Block = {
  day: number
  startPeriod: number
  endPeriod: number
  rowspan: number
  courseName: string
  location: string
  startTime: number
  endTime: number
}

type RowCell =
  | { type: 'block'; block: Block; periodClass: string; dayClass: string; colorClass: string }
  | { type: 'empty'; periodClass: string; dayClass: string }
  | { type: 'skip' }

const now = ref(new Date())
let timeTimer: number | undefined
let statusTimer: number | undefined

const timeToMinutes = (timeStr: string) => {
  const [h, m] = timeStr.split(':').map(Number)
  return h * 60 + m
}

// 构建每日课程块（合并相邻课程）
const dayBlocks: Record<number, Block[]> = {}
for (let day = 1; day <= 5; day++) {
  const blocks: Block[] = []
  const daySchedule = schedule[day] || {}
  for (let i = 0; i < timeSlots.length; i++) {
    const slot = timeSlots[i]
    const course = daySchedule[slot.period]
    if (!course) continue
    if (blocks.some(b => slot.period > b.startPeriod && slot.period <= b.endPeriod)) continue

    let endPeriod = slot.period
    for (let j = i + 1; j < timeSlots.length; j++) {
      const nextSlot = timeSlots[j]
      const nextCourse = daySchedule[nextSlot.period]
      if (!nextCourse || nextCourse.name !== course.name) break
      const gap = timeToMinutes(nextSlot.start) - timeToMinutes(timeSlots[j - 1].end)
      if (gap > 20) break
      endPeriod = nextSlot.period
      i = j
    }

    const startSlot = timeSlots.find(s => s.period === slot.period)!
    const endSlot = timeSlots.find(s => s.period === endPeriod)!

    blocks.push({
      day,
      startPeriod: slot.period,
      endPeriod,
      rowspan: endPeriod - slot.period + 1,
      courseName: course.name,
      location: course.location,
      startTime: timeToMinutes(startSlot.start),
      endTime: timeToMinutes(endSlot.end)
    })
  }
  dayBlocks[day] = blocks
}

// 当前/下一节课状态
const currentStatus = computed(() => {
  const nowDate = now.value
  const day = nowDate.getDay()
  const minutes = nowDate.getHours() * 60 + nowDate.getMinutes()
  if (day < 1 || day > 5) return { current: null as Block | null, next: null as Block | null, commute: false }

  const blocks = dayBlocks[day] || []
  let current: Block | null = null
  let next: Block | null = null

  for (const b of blocks) {
    if (minutes >= b.startTime && minutes <= b.endTime) {
      current = b
      break
    }
    if (!current && minutes < b.startTime) {
      next = b
      break
    }
  }

  if (!current && !next) return { current: null, next: null, commute: false }

  if (!current && next) {
    const diff = next.startTime - minutes
    return { current: null, next, commute: diff <= 40 }
  }

  if (current) {
    next = blocks.find(b => b.startPeriod > current!.endPeriod) || null
    return { current, next, commute: false }
  }

  return { current: null, next: null, commute: false }
})

// 构建表格行数据（含 rowSpan）
const tableRows = computed(() => {
  const rows: { timeSlot: (typeof timeSlots)[number] & { timeClass?: string }; cells: RowCell[] }[] = []
  const skipSet = new Set<string>()

  timeSlots.forEach(slot => {
    const periodClass = slot.period <= 5 ? 'period-morning' : slot.period <= 10 ? 'period-afternoon' : 'period-evening'
    const timeClass = slot.period <= 5 ? 'time-morning' : slot.period <= 10 ? 'time-afternoon' : 'time-evening'

    const rowCells: RowCell[] = []

    for (let day = 1; day <= 5; day++) {
      const key = `${day}-${slot.period}`
      const dayClass = ['','col-monday','col-tuesday','col-wednesday','col-thursday','col-friday'][day]
      if (skipSet.has(key)) {
        rowCells.push({ type: 'skip' })
        continue
      }
      const block = dayBlocks[day].find(b => b.startPeriod === slot.period)
      if (block) {
        for (let p = block.startPeriod + 1; p <= block.endPeriod; p++) {
          skipSet.add(`${day}-${p}`)
        }
        rowCells.push({
          type: 'block',
          block,
          periodClass,
          dayClass,
          colorClass: courseColors[block.courseName] || ''
        })
      } else {
        rowCells.push({ type: 'empty', periodClass, dayClass })
      }
    }

    rows.push({ timeSlot: { ...slot, timeClass }, cells: rowCells })
  })

  return rows
})

const currentTimeDisplay = computed(() =>
  now.value.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    weekday: 'long'
  })
)

onMounted(() => {
  timeTimer = window.setInterval(() => {
    now.value = new Date()
  }, 1000)

  statusTimer = window.setInterval(() => {
    now.value = new Date()
  }, 60000)
})

onUnmounted(() => {
  if (timeTimer) clearInterval(timeTimer)
  if (statusTimer) clearInterval(statusTimer)
})

const dayHeaderClasses = ['','day-monday','day-tuesday','day-wednesday','day-thursday','day-friday']
</script>

<template>
  <div class="schedule-container">
    <div class="schedule-header">
      <h1 class="schedule-title">📅 课程表</h1>
      <div class="current-time">
        <i class="fas fa-clock"></i>
        <span>{{ currentTimeDisplay }}</span>
      </div>
    </div>

    <div class="status-indicators">
      <div class="status-indicator">
        <div class="indicator-dot current-dot"></div>
        <span>当前课程</span>
      </div>
      <div class="status-indicator">
        <div class="indicator-dot next-dot"></div>
        <span>下节课</span>
      </div>
      <div class="status-indicator">
        <div class="indicator-dot" style="background: var(--accent-secondary); box-shadow: 0 0 10px rgba(78, 205, 196, 0.5);"></div>
        <span>通勤提醒 (40分钟内)</span>
      </div>
    </div>

    <div class="schedule-table">
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th class="time-column">时间</th>
              <th v-for="day in 5" :key="day" :class="['day-header', dayHeaderClasses[day]]">周{{ ['','一','二','三','四','五'][day] }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in tableRows" :key="row.timeSlot.period">
              <td :class="['time-column', row.timeSlot.timeClass]">
                <strong>第{{ row.timeSlot.period }}节</strong><br />
                {{ row.timeSlot.start }} - {{ row.timeSlot.end }}
              </td>
              <template v-for="(cell, idx) in row.cells" :key="idx">
                <td
                  v-if="cell.type === 'block'"
                  :rowspan="cell.block.rowspan"
                  :class="[
                    'period-cell',
                    cell.periodClass,
                    cell.dayClass,
                    cell.colorClass,
                    { 'merged-cell': cell.block.rowspan > 1,
                      'current-period': currentStatus.current && currentStatus.current === cell.block,
                      'next-period': !currentStatus.current && currentStatus.next === cell.block,
                      'commute-period': !currentStatus.current && currentStatus.next === cell.block && currentStatus.commute }
                  ]"
                >
                  <div class="merged-content">
                    <div class="course-name">{{ cell.block.courseName }}</div>
                    <div class="course-location">{{ cell.block.location }}</div>
                    <div v-if="cell.block.rowspan > 1" class="course-duration">{{ cell.block.rowspan }}节课</div>
                  </div>
                </td>
                <td
                  v-else-if="cell.type === 'empty'"
                  :class="['period-cell', cell.periodClass, cell.dayClass, 'empty-period']"
                ></td>
                <template v-else></template>
              </template>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.schedule-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-2xl) var(--space-md);
  background: linear-gradient(135deg, rgba(0, 217, 255, 0.03) 0%, rgba(78, 205, 196, 0.02) 35%, rgba(255, 107, 107, 0.02) 65%, rgba(255, 217, 61, 0.03) 100%);
  border-radius: var(--radius-2xl);
}

.schedule-header {
  text-align: center;
  margin-bottom: var(--space-2xl);
}

.schedule-title {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: var(--space-md);
  font-weight: 800;
  letter-spacing: -0.02em;
}

.current-time {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-xl);
  padding: var(--space-lg) var(--space-xl);
  margin-bottom: var(--space-xl);
  display: inline-flex;
  align-items: center;
  gap: var(--space-md);
  color: var(--text);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all var(--transition-normal);
}

.current-time:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.schedule-table {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: var(--space-lg);
  text-align: center;
  border: none;
  position: relative;
  transition: all var(--transition-normal);
}

th {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%);
  color: #ffffff;
  font-weight: 700;
  position: sticky;
  top: 0;
  z-index: 10;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.time-column {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%);
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--text);
  min-width: 120px;
  font-weight: 600;
  border-radius: var(--radius-md);
}

.time-morning { background: linear-gradient(135deg, rgba(255, 193, 7, 0.15) 0%, rgba(255, 235, 59, 0.08) 100%); border-left: 4px solid #FFC107; border-radius: var(--radius-md); box-shadow: inset 0 1px 3px rgba(255,193,7,0.2); }
.time-afternoon { background: linear-gradient(135deg, rgba(33, 150, 243, 0.15) 0%, rgba(3, 169, 244, 0.08) 100%); border-left: 4px solid #2196F3; border-radius: var(--radius-md); box-shadow: inset 0 1px 3px rgba(33,150,243,0.2); }
.time-evening { background: linear-gradient(135deg, rgba(156, 39, 176, 0.15) 0%, rgba(233, 30, 99, 0.08) 100%); border-left: 4px solid #9C27B0; border-radius: var(--radius-md); box-shadow: inset 0 1px 3px rgba(156,39,176,0.2); }

.period-morning { background: linear-gradient(135deg, rgba(255, 248, 225, 0.8) 0%, rgba(255, 251, 235, 0.4) 100%); border-radius: var(--radius-lg); border: 1px solid rgba(255, 193, 7, 0.2); }
.period-afternoon { background: linear-gradient(135deg, rgba(227, 242, 253, 0.8) 0%, rgba(240, 249, 255, 0.4) 100%); border-radius: var(--radius-lg); border: 1px solid rgba(33, 150, 243, 0.2); }
.period-evening { background: linear-gradient(135deg, rgba(243, 229, 245, 0.8) 0%, rgba(248, 243, 250, 0.4) 100%); border-radius: var(--radius-lg); border: 1px solid rgba(156, 39, 176, 0.2); }

.period-morning:hover { background: linear-gradient(135deg, rgba(255, 248, 225, 1) 0%, rgba(255, 251, 235, 0.6) 100%); transform: translateY(-2px); box-shadow: 0 8px 25px rgba(255, 193, 7, 0.15); }
.period-afternoon:hover { background: linear-gradient(135deg, rgba(227, 242, 253, 1) 0%, rgba(240, 249, 255, 0.6) 100%); transform: translateY(-2px); box-shadow: 0 8px 25px rgba(33, 150, 243, 0.15); }
.period-evening:hover { background: linear-gradient(135deg, rgba(243, 229, 245, 1) 0%, rgba(248, 243, 250, 0.6) 100%); transform: translateY(-2px); box-shadow: 0 8px 25px rgba(156, 39, 176, 0.15); }

.day-header { background: var(--surface-elevated); min-width: 180px; position: relative; overflow: hidden; border-radius: var(--radius-lg); }
.col-monday { background: linear-gradient(180deg, rgba(244,67,54,0.06) 0%, rgba(244,67,54,0.02) 100%); border-radius: var(--radius-md); }
.col-tuesday { background: linear-gradient(180deg, rgba(33,150,243,0.06) 0%, rgba(33,150,243,0.02) 100%); border-radius: var(--radius-md); }
.col-wednesday { background: linear-gradient(180deg, rgba(76,175,80,0.06) 0%, rgba(76,175,80,0.02) 100%); border-radius: var(--radius-md); }
.col-thursday { background: linear-gradient(180deg, rgba(255,152,0,0.06) 0%, rgba(255,152,0,0.02) 100%); border-radius: var(--radius-md); }
.col-friday { background: linear-gradient(180deg, rgba(156,39,176,0.06) 0%, rgba(156,39,176,0.02) 100%); border-radius: var(--radius-md); }

.day-header.day-monday { background: linear-gradient(135deg, rgba(244,67,54,0.9) 0%, rgba(229,57,53,0.9) 100%); box-shadow: 0 4px 15px rgba(244,67,54,0.3); }
.day-header.day-tuesday { background: linear-gradient(135deg, rgba(33,150,243,0.9) 0%, rgba(30,136,229,0.9) 100%); box-shadow: 0 4px 15px rgba(33,150,243,0.3); }
.day-header.day-wednesday { background: linear-gradient(135deg, rgba(76,175,80,0.9) 0%, rgba(67,160,71,0.9) 100%); box-shadow: 0 4px 15px rgba(76,175,80,0.3); }
.day-header.day-thursday { background: linear-gradient(135deg, rgba(255,152,0,0.9) 0%, rgba(251,140,0,0.9) 100%); box-shadow: 0 4px 15px rgba(255,152,0,0.3); }
.day-header.day-friday { background: linear-gradient(135deg, rgba(156,39,176,0.9) 0%, rgba(142,36,170,0.9) 100%); box-shadow: 0 4px 15px rgba(156,39,176,0.3); }

.day-header.today {
  animation: breathingGlow 3s ease-in-out infinite;
  position: relative;
  overflow: visible;
}

.day-header.today::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%);
  border-radius: inherit;
  animation: breathingGlow 3s ease-in-out infinite;
  z-index: -1;
}

.period-cell {
  background: var(--surface);
  transition: all var(--transition-normal);
  cursor: pointer;
  min-height: 60px;
  vertical-align: middle;
}

.period-cell:hover { background: var(--surface-hover); transform: scale(1.02); }

.empty-period { background: var(--surface); color: transparent; font-style: italic; }

.merged-cell { vertical-align: middle; position: relative; border-radius: var(--radius-lg); border: none; overflow: hidden; transition: all var(--transition-normal); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
.merged-cell::before { content: ''; position: absolute; top: 0; left: 0; width: 6px; height: 100%; background: linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%); z-index: 2; border-radius: 0 3px 3px 0; }
.merged-cell::after { content: ''; position: absolute; top: 0; left: 6px; right: 0; height: 2px; background: linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%); z-index: 1; }
.merged-cell:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,0.15); }

.merged-content { display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%; text-align: center; padding: var(--space-lg); position: relative; z-index: 3; }
.merged-content .course-name { font-size: 1.1rem; font-weight: 700; margin-bottom: var(--space-sm); line-height: 1.3; text-shadow: 0 1px 3px rgba(0,0,0,0.2); }
.merged-content .course-location { font-size: 0.9rem; margin-bottom: var(--space-sm); opacity: 0.9; text-shadow: 0 1px 2px rgba(0,0,0,0.1); }
.course-duration { font-size: 0.8rem; background: rgba(255,255,255,0.15); padding: var(--space-xs) var(--space-md); border-radius: var(--radius-full); margin-top: var(--space-sm); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2); font-weight: 600; }

[class*="course-"] { color: #ffffff; transition: all var(--transition-normal); }
[class*="course-"]:hover { transform: translateY(-1px); filter: brightness(1.1); }

.course-spatial-db { background: linear-gradient(135deg, rgba(63,81,181,0.9) 0%, rgba(48,63,159,0.7) 100%); box-shadow: 0 6px 20px rgba(63,81,181,0.3); }
.course-gee { background: linear-gradient(135deg, rgba(76,175,80,0.9) 0%, rgba(56,142,60,0.7) 100%); box-shadow: 0 6px 20px rgba(76,175,80,0.3); }
.course-spatial-analysis { background: linear-gradient(135deg, rgba(156,39,176,0.9) 0%, rgba(123,31,162,0.7) 100%); box-shadow: 0 6px 20px rgba(156,39,176,0.3); }
.course-gis-dev { background: linear-gradient(135deg, rgba(244,67,54,0.9) 0%, rgba(211,47,47,0.7) 100%); box-shadow: 0 6px 20px rgba(244,67,54,0.3); }
.course-navigation { background: linear-gradient(135deg, rgba(33,150,243,0.9) 0%, rgba(25,118,210,0.7) 100%); box-shadow: 0 6px 20px rgba(33,150,243,0.3); }
.course-lidar { background: linear-gradient(135deg, rgba(103,58,183,0.9) 0%, rgba(81,45,168,0.7) 100%); box-shadow: 0 6px 20px rgba(103,58,183,0.3); }
.course-ml { background: linear-gradient(135deg, rgba(233,30,99,0.9) 0%, rgba(194,24,91,0.7) 100%); box-shadow: 0 6px 20px rgba(233,30,99,0.3); }
.course-uav { background: linear-gradient(135deg, rgba(0,150,136,0.9) 0%, rgba(0,121,107,0.7) 100%); box-shadow: 0 6px 20px rgba(0,150,136,0.3); }
.course-photogrammetry { background: linear-gradient(135deg, rgba(121,85,72,0.9) 0%, rgba(93,64,55,0.7) 100%); box-shadow: 0 6px 20px rgba(121,85,72,0.3); }

.course-spatial-db.merged-cell::before { background: linear-gradient(180deg, #3F51B5 0%, #5C6BC0 100%); box-shadow: 2px 0 8px rgba(63,81,181,0.3); }
.course-gee.merged-cell::before { background: linear-gradient(180deg, #4CAF50 0%, #66BB6A 100%); box-shadow: 2px 0 8px rgba(76,175,80,0.3); }
.course-spatial-analysis.merged-cell::before { background: linear-gradient(180deg, #9C27B0 0%, #BA68C8 100%); box-shadow: 2px 0 8px rgba(156,39,176,0.3); }
.course-gis-dev.merged-cell::before { background: linear-gradient(180deg, #F44336 0%, #EF5350 100%); box-shadow: 2px 0 8px rgba(244,67,54,0.3); }
.course-navigation.merged-cell::before { background: linear-gradient(180deg, #2196F3 0%, #64B5F6 100%); box-shadow: 2px 0 8px rgba(33,150,243,0.3); }
.course-lidar.merged-cell::before { background: linear-gradient(180deg, #673AB7 0%, #9575CD 100%); box-shadow: 2px 0 8px rgba(103,58,183,0.3); }
.course-ml.merged-cell::before { background: linear-gradient(180deg, #E91E63 0%, #F06292 100%); box-shadow: 2px 0 8px rgba(233,30,99,0.3); }
.course-uav.merged-cell::before { background: linear-gradient(180deg, #009688 0%, #4DB6AC 100%); box-shadow: 2px 0 8px rgba(0,150,136,0.3); }
.course-photogrammetry.merged-cell::before { background: linear-gradient(180deg, #795548 0%, #A1887F 100%); box-shadow: 2px 0 8px rgba(121,85,72,0.3); }

.current-period { background: linear-gradient(135deg, rgba(76, 175, 80, 0.18) 0%, rgba(129, 199, 132, 0.13) 50%, rgba(165, 214, 167, 0.09) 100%) !important; animation: breathingGlow 2.8s ease-in-out infinite; box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.18), 0 2px 8px rgba(76, 175, 80, 0.10); }
.next-period { background: linear-gradient(135deg, rgba(255, 152, 0, 0.2) 0%, rgba(255, 183, 77, 0.15) 50%, rgba(255, 204, 128, 0.1) 100%) !important; }
.commute-period { background: linear-gradient(135deg, rgba(33, 150, 243, 0.2) 0%, rgba(100, 181, 246, 0.15) 50%, rgba(144, 202, 249, 0.1) 100%) !important; }

.status-indicators { display: flex; justify-content: center; gap: var(--space-xl); margin-bottom: var(--space-xl); flex-wrap: wrap; padding: var(--space-lg); background: rgba(255, 255, 255, 0.05); border-radius: var(--radius-xl); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); }
.status-indicator { display: flex; align-items: center; gap: var(--space-md); padding: var(--space-md) var(--space-lg); background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%); border-radius: var(--radius-lg); font-size: 0.9rem; font-weight: 600; border: 1px solid rgba(255, 255, 255, 0.2); transition: all var(--transition-normal); position: relative; overflow: hidden; }
.status-indicator::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); transition: left 0.6s; }
.status-indicator:hover::before { left: 100%; }
.status-indicator:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(0,0,0,0.15); }
.indicator-dot { width: 16px; height: 16px; border-radius: 50%; position: relative; animation: dotPulse 2s infinite; }
.current-dot { background: linear-gradient(135deg, #4CAF50, #81C784); box-shadow: 0 0 20px rgba(76,175,80,0.6); }
.next-dot { background: linear-gradient(135deg, #FF9800, #FFB74D); box-shadow: 0 0 20px rgba(255,152,0,0.6); }
.normal-dot { background: linear-gradient(135deg, #64748B, #94A3B8); box-shadow: 0 0 10px rgba(100,116,139,0.4); }

@keyframes dotPulse { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.2); opacity: 0.8; } }
@keyframes breathingGlow { 0%,100% { box-shadow: 0 4px 15px rgba(255,255,255,0.2), 0 0 20px rgba(255,255,255,0.1), inset 0 1px 0 rgba(255,255,255,0.3); transform: scale(1); } 50% { box-shadow: 0 6px 25px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.3), inset 0 1px 0 rgba(255,255,255,0.5); transform: scale(1.02); } }

@media (max-width: 768px) {
  .schedule-container { padding: var(--space-lg) var(--space-xs); }
  .schedule-title { font-size: clamp(1.5rem, 6vw, 2.5rem); margin-bottom: var(--space-lg); }
  .current-time { padding: var(--space-sm); font-size: 0.875rem; }
  .status-indicators { flex-direction: column; align-items: center; gap: var(--space-md); margin-bottom: var(--space-lg); padding: var(--space-md); }
  .status-indicator { padding: var(--space-sm) var(--space-md); font-size: 0.8rem; width: 100%; max-width: 280px; justify-content: center; }
  .indicator-dot { width: 14px; height: 14px; }
  .table-wrapper { font-size: 0.75rem; border-radius: var(--radius-lg); overflow: hidden; }
  th, td { padding: var(--space-xs); min-height: 45px; }
  .day-header { min-width: 80px; font-size: 0.75rem; padding: var(--space-sm) var(--space-xs); }
  .time-column { min-width: 70px; font-size: 0.75rem; }
  .period-cell { min-height: 45px; padding: var(--space-xs); }
  .merged-content { padding: var(--space-sm); }
  .merged-content .course-name { font-size: 0.9rem; }
  .merged-content .course-location { font-size: 0.75rem; }
  .course-duration { font-size: 0.7rem; padding: 2px var(--space-sm); }
  .current-period, .next-period, .commute-period { animation-duration: 4s; }
}

@media (max-width: 480px) {
  .schedule-container { padding: var(--space-md) var(--space-xs); }
  .schedule-title { font-size: 1.5rem; margin-bottom: var(--space-md); }
  .status-indicators { padding: var(--space-sm); gap: var(--space-sm); }
  .status-indicator { padding: var(--space-xs) var(--space-sm); font-size: 0.75rem; }
  .table-wrapper { font-size: 0.7rem; }
  .day-header { min-width: 70px; font-size: 0.7rem; }
  .time-column { min-width: 60px; font-size: 0.65rem; }
  .period-cell { min-height: 40px; padding: 2px; }
  .merged-content { padding: var(--space-xs); }
  .merged-content .course-name { font-size: 0.8rem; }
  .merged-content .course-location { font-size: 0.7rem; }
  .course-duration { font-size: 0.65rem; padding: 2px var(--space-xs); }
  .status-indicator { margin: 2px; }
}
</style>
