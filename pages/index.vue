<template>
  <div class="max-w-3xl mx-auto px-6 py-10">
    <h1 class="text-3xl font-semibold tracking-tight m-0 mb-2">
      Courses
    </h1>
    <p class="text-(--text-muted) m-0 mb-8">
      Progressive learning — Coddy-style chapter paths, no XP theater.
    </p>

    <NuxtLink
      to="/courses/javascript"
      class="block rounded-xl border border-(--border) bg-(--bg-panel) p-5 no-underline text-(--text) hover:border-(--accent) transition-colors"
    >
      <div class="flex items-center justify-between gap-4">
        <div>
          <h2 class="text-xl font-semibold m-0 mb-1">
            JavaScript
          </h2>
          <p class="m-0 text-(--text-muted) text-sm">
            Fundamentals first — Coddy-shaped topic ladder, original lessons.
          </p>
        </div>
        <span class="text-sm text-(--accent)">
          {{ completedCount }}/{{ lessons?.length ?? 0 }} done
        </span>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { isComplete } = useProgress()

const { data: lessons } = await useAsyncData('js-lessons-count', () =>
  queryCollection('lessons')
    .where('path', 'LIKE', '/courses/javascript/%')
    .select('lessonId')
    .all(),
)

const completedCount = computed(
  () => lessons.value?.filter(lesson => isComplete(lesson.lessonId)).length ?? 0,
)
</script>
