<template>
  <div class="h-[calc(100vh-3rem)] flex flex-col md:grid md:grid-cols-2 min-h-0">
    <section class="border-b md:border-b-0 md:border-r border-(--border) bg-(--bg-panel) overflow-y-auto min-h-0 max-h-[38vh] md:max-h-none md:h-full">
      <div class="px-5 py-3 border-b border-(--border)">
        <nav class="text-xs text-(--text-muted) flex flex-wrap items-center gap-1.5 mb-3" aria-label="Breadcrumb">
          <NuxtLink to="/" class="no-underline text-(--text-muted) hover:text-(--text)">
            Syllabus
          </NuxtLink>
          <span aria-hidden="true">›</span>
          <NuxtLink :to="courseHref" class="no-underline text-(--text-muted) hover:text-(--text) capitalize">
            {{ courseName }}
          </NuxtLink>
          <span aria-hidden="true">›</span>
          <NuxtLink :to="pathHref" class="no-underline text-(--text-muted) hover:text-(--text)">
            {{ moduleShort }}
          </NuxtLink>
        </nav>
        <div class="flex items-start justify-between gap-3">
          <div>
            <p class="text-xs uppercase tracking-wide text-(--text-muted) mb-1">
              {{ lesson.module }}
            </p>
            <h1 class="text-xl font-semibold m-0">
              {{ lesson.title }}
            </h1>
          </div>
          <div class="shrink-0 flex flex-col items-end gap-2">
            <span
              class="text-xs px-2 py-1 rounded bg-(--bg-elevated) border border-(--border) capitalize text-(--accent)"
            >
              {{ lesson.difficulty }}
            </span>
            <NuxtLink
              :to="pathHref"
              class="text-xs no-underline text-(--text-muted) hover:text-(--text)"
            >
              ← Path
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="px-5 py-4 prose-lesson">
        <ContentRenderer :value="lesson" />
        <div v-if="lesson.objectives?.length" class="mt-6">
          <h2>Objectives</h2>
          <ul>
            <li v-for="item in lesson.objectives" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="grid grid-rows-[2.5rem_minmax(12rem,1fr)_11rem] min-h-0 flex-1 md:h-full bg-(--bg)">
      <div class="px-3 border-b border-(--border) flex items-center justify-between bg-(--bg-panel)">
        <span class="text-sm text-(--text-muted)">JavaScript</span>
        <div class="flex items-center gap-2">
          <button
            type="button"
            class="text-sm px-2.5 py-1 rounded border border-(--border) text-(--text-muted) hover:text-(--text)"
            @click="resetCode"
          >
            Reset
          </button>
          <button
            type="button"
            class="text-sm px-3 py-1 rounded bg-(--accent) hover:bg-(--accent-hover) text-white font-medium"
            :disabled="running"
            @click="run"
          >
            {{ running ? 'Running…' : 'Run Code' }}
          </button>
        </div>
      </div>

      <div class="relative min-h-0 border-b border-(--border)">
        <ClientOnly>
          <LessonEditor v-model="code" language="javascript" class="absolute inset-0" />
          <template #fallback>
            <div class="absolute inset-0 grid place-items-center text-(--text-muted) text-sm">
              Loading editor…
            </div>
          </template>
        </ClientOnly>
      </div>

      <div class="flex flex-col min-h-0 bg-(--bg-panel)">
        <div class="h-9 px-3 border-b border-(--border) flex items-center justify-between text-sm">
          <span class="text-(--text-muted)">Output</span>
          <span
            v-if="status === 'pass'"
            class="text-(--success)"
          >Passed</span>
          <span
            v-else-if="status === 'fail'"
            class="text-(--danger)"
          >Failed</span>
          <span
            v-else-if="status === 'error'"
            class="text-(--danger)"
          >Error</span>
        </div>
        <pre class="flex-1 m-0 p-3 overflow-auto text-sm font-mono text-(--text) whitespace-pre-wrap">{{ panelText }}</pre>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
type LessonDoc = {
  lessonId: string
  title?: string
  module: string
  path?: string
  difficulty: string
  starterCode: string
  expectedOutput: string
  objectives?: string[]
  body?: unknown
  [key: string]: unknown
}

const props = defineProps<{
  lesson: LessonDoc
}>()

const code = ref(props.lesson.starterCode)
const running = ref(false)
const status = ref<'idle' | 'pass' | 'fail' | 'error'>('idle')
const panelText = ref('Run your code to see output.')

const { runCode, dispose } = useCodeRunner()
const { markComplete, isComplete } = useProgress()

const courseName = computed(() => {
  const parts = String(props.lesson.path || '').split('/').filter(Boolean)
  return parts[1] || 'javascript'
})
const moduleKey = computed(() => moduleKeyFromPath(String(props.lesson.path || '')))
const moduleShort = computed(() => moduleLabel(props.lesson.module))
const courseHref = computed(() => `/courses/${courseName.value}`)
const pathHref = computed(() => `/courses/${courseName.value}/path/${moduleKey.value}`)

watch(
  () => props.lesson.lessonId,
  () => {
    code.value = props.lesson.starterCode
    status.value = isComplete(props.lesson.lessonId) ? 'pass' : 'idle'
    panelText.value = isComplete(props.lesson.lessonId)
      ? 'Already completed. Run again anytime.'
      : 'Run your code to see output.'
  },
  { immediate: true },
)

function resetCode() {
  code.value = props.lesson.starterCode
  status.value = isComplete(props.lesson.lessonId) ? 'pass' : 'idle'
  panelText.value = 'Run your code to see output.'
}

async function run() {
  running.value = true
  status.value = 'idle'
  panelText.value = ''
  try {
    const result = await runCode(code.value)
    if (!result.ok) {
      status.value = 'error'
      panelText.value = result.error
      return
    }

    const actual = normalizeOutput(result.output)
    const expected = normalizeOutput(props.lesson.expectedOutput)
    panelText.value = actual || '(no output)'

    if (actual === expected) {
      status.value = 'pass'
      markComplete(props.lesson.lessonId)
      panelText.value = `${actual}\n\n✓ Matches expected output.`
    } else {
      status.value = 'fail'
      panelText.value = `${actual || '(no output)'}\n\nExpected:\n${expected}`
    }
  } finally {
    running.value = false
  }
}

onBeforeUnmount(() => dispose())
</script>
