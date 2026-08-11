export type RunnerRequest = { code: string }
export type RunnerResponse =
  | { ok: true, output: string }
  | { ok: false, error: string }

self.onmessage = async (event: MessageEvent<RunnerRequest>) => {
  const { code } = event.data
  const lines: string[] = []

  const sandboxConsole = {
    log: (...args: unknown[]) => {
      lines.push(args.map(formatValue).join(' '))
    },
  }

  try {
    // eslint-disable-next-line no-new-func
    const fn = new Function('console', `"use strict";\n${code}`)
    const result = fn(sandboxConsole)
    if (isThenable(result)) {
      await result
    }
    // Flush microtasks and allow setTimeout(0)-style macrotasks used in lessons
    await new Promise<void>(resolve => setTimeout(resolve, 0))
    await new Promise<void>(resolve => setTimeout(resolve, 20))

    const response: RunnerResponse = { ok: true, output: lines.join('\n') }
    self.postMessage(response)
  } catch (error) {
    const response: RunnerResponse = {
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    }
    self.postMessage(response)
  }
}

function isThenable(value: unknown): value is Promise<unknown> {
  return Boolean(value) && typeof (value as { then?: unknown }).then === 'function'
}

function formatValue(value: unknown): string {
  if (typeof value === 'string') return value
  if (typeof value === 'number' || typeof value === 'bigint' || typeof value === 'boolean') return String(value)
  if (value === null) return 'null'
  if (value === undefined) return 'undefined'
  try {
    return JSON.stringify(value)
  } catch {
    return String(value)
  }
}
