<template>
  <div class="relative max-w-md mx-auto py-4">
    <div class="path-rail" aria-hidden="true">
      <div class="path-rail__fill" :style="{ height: railFill }" />
    </div>

    <ol class="relative m-0 p-0 list-none flex flex-col gap-7">
      <li
        v-for="(node, index) in nodes"
        :key="node.lesson.lessonId"
        class="relative flex"
        :class="index % 2 === 0 ? 'justify-start pl-6' : 'justify-end pr-6'"
      >
        <div class="relative">
          <button
            type="button"
            class="hex"
            :class="hexClass(node.status)"
            :aria-label="`${node.lesson.title} (${node.status})`"
            @click="toggle(node.lesson.lessonId)"
          >
            <svg v-if="node.status === 'done'" class="hex__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg v-else-if="node.status === 'current'" class="hex__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 3l2.4 6.2L21 10l-5 4.2L17.5 21 12 17.3 6.5 21 8 14.2 3 10l6.6-.8L12 3z" />
            </svg>
            <svg v-else class="hex__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
            </svg>
          </button>

          <div
            v-if="openId === node.lesson.lessonId"
            class="path-pop"
            :class="index % 2 === 0 ? 'left-full top-0 ml-3' : 'right-full top-0 mr-3'"
          >
            <p class="m-0 text-xs uppercase tracking-wide text-(--text-muted)">
              Lesson {{ index + 1 }}
            </p>
            <p class="m-0 mt-1 font-semibold text-(--text)">
              {{ node.lesson.title }}
            </p>
            <NuxtLink :to="node.lesson.path" class="path-pop__btn">
              {{ node.status === 'done' ? 'REVIEW' : 'START' }}
            </NuxtLink>
          </div>
        </div>
      </li>

      <li class="relative flex justify-center pt-2">
        <div
          class="hex"
          :class="allDone ? 'hex--done' : 'hex--upcoming'"
          role="img"
          :aria-label="allDone ? 'Module complete' : 'Module trophy'"
        >
          <svg class="hex__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M7 4h10v2h2a2 2 0 012 2c0 2.5-1.5 4.5-3.5 5.3A5 5 0 0113 17.9V19h3v2H8v-2h3v-1.1A5 5 0 019.5 13.3C7.5 12.5 6 10.5 6 8a2 2 0 012-2h2V4zm2 2v2H8c0 1.4.8 2.7 2 3.3V8h4v3.3c1.2-.6 2-1.9 2-3.3h-1V6H9z" />
          </svg>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import type { LessonListItem } from '~/utils/lessonPath'

const props = defineProps<{
  lessons: LessonListItem[]
}>()

const { isComplete } = useProgress()
const openId = ref<string | null>(null)

const nodes = computed(() => {
  let foundCurrent = false
  return props.lessons.map((lesson) => {
    if (isComplete(lesson.lessonId)) {
      return { lesson, status: 'done' as const }
    }
    if (!foundCurrent) {
      foundCurrent = true
      return { lesson, status: 'current' as const }
    }
    return { lesson, status: 'upcoming' as const }
  })
})

const allDone = computed(() => props.lessons.every(l => isComplete(l.lessonId)))

const railFill = computed(() => {
  const total = props.lessons.length
  if (!total) return '0%'
  const done = props.lessons.filter(l => isComplete(l.lessonId)).length
  return `${Math.min(100, (done / total) * 100)}%`
})

function hexClass(status: 'done' | 'current' | 'upcoming') {
  if (status === 'done') return 'hex--done'
  if (status === 'current') return 'hex--current'
  return 'hex--upcoming'
}

function toggle(id: string) {
  openId.value = openId.value === id ? null : id
}

onMounted(() => {
  const current = nodes.value.find(n => n.status === 'current') ?? nodes.value[0]
  if (current) openId.value = current.lesson.lessonId
})
</script>
