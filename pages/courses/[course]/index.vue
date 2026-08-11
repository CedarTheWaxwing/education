<template>
  <div class="max-w-3xl mx-auto px-6 py-10">
    <nav class="text-sm text-(--text-muted) flex flex-wrap items-center gap-2" aria-label="Breadcrumb">
      <NuxtLink to="/" class="no-underline text-(--text-muted) hover:text-(--text)">
        Syllabus
      </NuxtLink>
      <span aria-hidden="true">›</span>
      <span class="text-(--text) capitalize">{{ course }}</span>
    </nav>

    <h1 class="text-3xl font-semibold tracking-tight mt-4 mb-2 capitalize">
      {{ course }}
    </h1>
    <p class="text-(--text-muted) m-0 mb-8">
      Pick a chapter path — green is done, amber is next up. All lessons stay open.
    </p>

    <div v-if="pending" class="text-(--text-muted)">
      Loading path…
    </div>

    <div v-else-if="!modules.length" class="text-(--text-muted)">
      No lessons yet.
    </div>

    <ul v-else class="m-0 p-0 list-none space-y-3">
      <li v-for="mod in modules" :key="mod.key">
        <NuxtLink
          :to="`/courses/${course}/path/${mod.key}`"
          class="flex items-center justify-between gap-4 rounded-xl border border-(--border) bg-(--bg-panel) px-5 py-4 no-underline text-(--text) hover:border-(--accent) transition-colors"
        >
          <div class="min-w-0">
            <p class="m-0 text-xs uppercase tracking-wide text-(--text-muted)">
              Section {{ mod.section }}
            </p>
            <h2 class="m-0 mt-1 text-lg font-semibold truncate">
              {{ mod.name }}
            </h2>
          </div>
          <div class="shrink-0 text-right">
            <p class="m-0 text-sm text-(--accent) font-medium">
              {{ completedIn(mod) }}/{{ mod.lessons.length }}
            </p>
            <p class="m-0 text-xs text-(--text-muted)">
              Open path →
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const course = computed(() => String(route.params.course))
const { isComplete } = useProgress()

const { data: lessons, pending } = await useAsyncData(
  () => `course-${course.value}`,
  () =>
    queryCollection('lessons')
      .where('path', 'LIKE', `/courses/${course.value}/%`)
      .order('order', 'ASC')
      .all(),
  { watch: [course] },
)

const modules = computed(() => groupLessonsByModule((lessons.value ?? []) as LessonListItem[]))

function completedIn(mod: { lessons: LessonListItem[] }) {
  return mod.lessons.filter(l => isComplete(l.lessonId)).length
}
</script>
