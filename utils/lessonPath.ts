export type LessonListItem = {
  lessonId: string
  title?: string
  module: string
  path: string
  order: number
  difficulty?: string
}

/** `/courses/js/modules/01-getting-started/foo` → `01-getting-started` */
export function moduleKeyFromPath(path: string): string {
  const parts = path.split('/').filter(Boolean)
  const modulesIdx = parts.indexOf('modules')
  if (modulesIdx >= 0 && parts[modulesIdx + 1]) return parts[modulesIdx + 1]
  return 'module'
}

export function moduleLabel(name: string): string {
  return name.replace(/^Module\s+\d+\s+[—-]\s*/i, '').trim() || name
}

export function groupLessonsByModule(lessons: LessonListItem[]) {
  const map = new Map<string, LessonListItem[]>()
  for (const lesson of lessons) {
    const list = map.get(lesson.module) ?? []
    list.push(lesson)
    map.set(lesson.module, list)
  }
  return [...map.entries()].map(([name, items], index) => ({
    name,
    key: moduleKeyFromPath(items[0]?.path ?? `module-${index + 1}`),
    section: index + 1,
    lessons: items.slice().sort((a, b) => a.order - b.order),
  }))
}
