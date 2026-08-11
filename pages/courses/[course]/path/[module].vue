<template>
  <div class="min-h-[calc(100vh-3rem)] px-4 py-8">
    <div class="max-w-xl mx-auto">
      <nav class="text-sm text-(--text-muted) flex flex-wrap items-center gap-2 px-2" aria-label="Breadcrumb">
        <NuxtLink to="/" class="no-underline text-(--text-muted) hover:text-(--text)">
          Syllabus
        </NuxtLink>
        <span aria-hidden="true">›</span>
        <NuxtLink :to="`/courses/${course}`" class="no-underline text-(--text-muted) hover:text-(--text) capitalize">
          {{ course }}
        </NuxtLink>
        <span aria-hidden="true">›</span>
        <span class="text-(--text)">
          Section {{ active?.section ?? '—' }} — {{ active ? moduleLabel(active.name) : moduleKey }}
        </span>
      </nav>

      <header class="text-center mt-6 mb-2 px-2">
        <p class="m-0 text-xs uppercase tracking-wide text-(--text-muted)">
          Chapter path
        </p>
        <h1 class="m-0 mt-2 text-2xl font-semibold tracking-tight">
          {{ active?.name ?? 'Module' }}
        </h1>
        <p class="m-0 mt-2 text-sm text-(--text-muted)">
          {{ completedCount }}/{{ active?.lessons.length ?? 0 }} complete
        </p>
      </header>

      <div v-if="pending" class="text-center text-(--text-muted) py-16">
        Loading path…
      </div>
      <div v-else-if="!active" class="text-center text-(--text-muted) py-16">
        Module not found.
        <div class="mt-4">
          <NuxtLink :to="`/courses/${course}`" class="text-(--accent)">
            ← Back to syllabus
          </NuxtLink>
        </div>
      </div>
      <CoursePath v-else :lessons="active.lessons" />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const course = computed(() => String(route.params.course))
const moduleKey = computed(() => String(route.params.module))
const { isComplete } = useProgress()

const { data: lessons, pending } = await useAsyncData(
  () => `course-path-${course.value}`,
  () =>
    queryCollection('lessons')
      .where('path', 'LIKE', `/courses/${course.value}/%`)
      .order('order', 'ASC')
      .all(),
  { watch: [course] },
)

const modules = computed(() => groupLessonsByModule((lessons.value ?? []) as LessonListItem[]))
const active = computed(() => modules.value.find(m => m.key === moduleKey.value))
const completedCount = computed(
  () => active.value?.lessons.filter(l => isComplete(l.lessonId)).length ?? 0,
)
</script>
