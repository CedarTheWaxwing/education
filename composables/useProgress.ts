export type ProgressState = {
  version: 1
  completed: string[]
}

const STORAGE_KEY = 'education-progress'
const defaultState = (): ProgressState => ({ version: 1, completed: [] })

function read(): ProgressState {
  if (!import.meta.client) return defaultState()
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultState()
    const parsed = JSON.parse(raw) as ProgressState
    if (parsed?.version !== 1 || !Array.isArray(parsed.completed)) return defaultState()
    return { version: 1, completed: [...new Set(parsed.completed)] }
  } catch {
    return defaultState()
  }
}

function write(state: ProgressState) {
  if (!import.meta.client) return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function useProgress() {
  const state = useState<ProgressState>('progress', () => read())

  if (import.meta.client) {
    state.value = read()
  }

  function isComplete(lessonId: string) {
    return state.value.completed.includes(lessonId)
  }

  function markComplete(lessonId: string) {
    if (isComplete(lessonId)) return
    state.value = {
      version: 1,
      completed: [...state.value.completed, lessonId],
    }
    write(state.value)
  }

  function exportProgress() {
    const blob = new Blob([JSON.stringify(state.value, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'education-progress.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  async function importProgress(file: File) {
    const text = await file.text()
    const parsed = JSON.parse(text) as ProgressState
    if (parsed?.version !== 1 || !Array.isArray(parsed.completed)) {
      throw new Error('Invalid progress file')
    }
    state.value = {
      version: 1,
      completed: [...new Set(parsed.completed.map(String))],
    }
    write(state.value)
  }

  return {
    state,
    isComplete,
    markComplete,
    exportProgress,
    importProgress,
  }
}
