<template>
  <div v-if="pending" class="p-8 text-(--text-muted)">
    Loading lesson…
  </div>
  <div v-else-if="!lesson" class="p-8">
    <p class="text-(--text-muted)">
      Lesson not found.
    </p>
    <NuxtLink :to="`/courses/${course}`" class="text-(--accent)">
      ← Back to syllabus
    </NuxtLink>
  </div>
  <LessonPlayer v-else :lesson="lesson" />
</template>

<script setup lang="ts">
const route = useRoute()
const course = computed(() => String(route.params.course))
const slug = computed(() => {
  const raw = route.params.slug
  return Array.isArray(raw) ? raw.join('/') : String(raw || '')
})

const path = computed(() => `/courses/${course.value}/${slug.value}`)

const { data: lesson, pending } = await useAsyncData(
  () => `lesson-${path.value}`,
  () => queryCollection('lessons').path(path.value).first(),
  { watch: [path] },
)
</script>
