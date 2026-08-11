<template>
  <div ref="host" class="h-full w-full min-h-0 overflow-hidden" />
</template>

<script setup lang="ts">
import type { editor as MonacoEditor } from 'monaco-editor'

const props = defineProps<{
  modelValue: string
  language?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const host = ref<HTMLDivElement | null>(null)
let instance: MonacoEditor.IStandaloneCodeEditor | null = null
let monaco: typeof import('monaco-editor') | null = null

onMounted(async () => {
  monaco = await import('monaco-editor')
  const editorWorker = await import('monaco-editor/esm/vs/editor/editor.worker?worker')
  const tsWorker = await import('monaco-editor/esm/vs/language/typescript/ts.worker?worker')

  self.MonacoEnvironment = {
    getWorker(_workerId: string, label: string) {
      if (label === 'typescript' || label === 'javascript') {
        return new tsWorker.default()
      }
      return new editorWorker.default()
    },
  }

  if (!host.value || !monaco) return

  instance = monaco.editor.create(host.value, {
    value: props.modelValue,
    language: props.language ?? 'javascript',
    theme: 'vs-dark',
    automaticLayout: true,
    minimap: { enabled: false },
    fontSize: 14,
    fontFamily: 'Cascadia Code, Fira Code, JetBrains Mono, ui-monospace, monospace',
    scrollBeyondLastLine: false,
    tabSize: 2,
    padding: { top: 12 },
  })

  instance.onDidChangeModelContent(() => {
    emit('update:modelValue', instance?.getValue() ?? '')
  })

  // Personal tooling: allow console/automation to set editor code
  ;(window as unknown as { __educationSetCode?: (value: string) => void }).__educationSetCode = (value: string) => {
    instance?.setValue(value)
  }
})

watch(
  () => props.modelValue,
  (value) => {
    if (instance && instance.getValue() !== value) {
      instance.setValue(value)
    }
  },
)

onBeforeUnmount(() => {
  const w = window as unknown as { __educationSetCode?: (value: string) => void }
  if (w.__educationSetCode) delete w.__educationSetCode
  instance?.dispose()
  instance = null
})
</script>
