import CodeRunnerWorker from '~/workers/code-runner.worker?worker'

export type RunResult =
  | { ok: true, output: string }
  | { ok: false, error: string }

export function useCodeRunner() {
  let worker: Worker | null = null

  function getWorker() {
    if (!import.meta.client) return null
    if (!worker) worker = new CodeRunnerWorker()
    return worker
  }

  function runCode(code: string): Promise<RunResult> {
    const w = getWorker()
    if (!w) return Promise.resolve({ ok: false, error: 'Runner only available in the browser.' })

    return new Promise((resolve) => {
      const onMessage = (event: MessageEvent<RunResult>) => {
        w.removeEventListener('message', onMessage)
        resolve(event.data)
      }
      w.addEventListener('message', onMessage)
      w.postMessage({ code })
    })
  }

  function dispose() {
    worker?.terminate()
    worker = null
  }

  return { runCode, dispose }
}
