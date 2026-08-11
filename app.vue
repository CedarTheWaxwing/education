<template>
  <div class="min-h-full flex flex-col">
    <header class="h-12 shrink-0 border-b border-(--border) bg-(--bg-panel) px-4 flex items-center justify-between">
      <NuxtLink to="/" class="font-semibold tracking-tight text-(--text) no-underline">
        Education
      </NuxtLink>
      <div class="flex items-center gap-2 text-sm">
        <button
          type="button"
          class="px-2.5 py-1 rounded border border-(--border) text-(--text-muted) hover:text-(--text) hover:bg-(--bg-elevated)"
          @click="exportProgress"
        >
          Export
        </button>
        <label class="px-2.5 py-1 rounded border border-(--border) text-(--text-muted) hover:text-(--text) hover:bg-(--bg-elevated) cursor-pointer">
          Import
          <input type="file" accept="application/json,.json" class="hidden" @change="onImport">
        </label>
      </div>
    </header>
    <main class="flex-1 min-h-0">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
const { exportProgress, importProgress } = useProgress()

async function onImport(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return
  try {
    await importProgress(file)
  } catch {
    window.alert('Could not import progress file.')
  } finally {
    input.value = ''
  }
}
</script>
