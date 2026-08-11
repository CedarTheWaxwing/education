---
lessonId: js-m8-fetch-basics
title: fetch basics
order: 47
difficulty: beginner
module: Module 8 — Async JavaScript
objectives:
  - Model the fetch → response → json flow
  - Use async/await with a thenable API
  - Keep network code offline-friendly with a stub
starterCode: |
  // Mini stand-in for fetch (no network required in this lesson)
  async function fakeFetch(url) {
    return {
      ok: true,
      async json() {
        return { url, status: "ok" }
      },
    }
  }

  async function load() {
    // const res = await fakeFetch("/api/ping")
    // const data = await res.json()
    // return data.status + ":" + data.url
  }

  load().then((text) => console.log(text))
expectedOutput: "ok:/api/ping"
---

## Request shape you’ll use everywhere

Real browser code looks like:

```js
const res = await fetch("/api/ping")
const data = await res.json()
```

Here you practice the **same control flow** with `fakeFetch` so the lesson works offline and in the runner. Later, swap in real `fetch`.

Always check `res.ok` in production before trusting `json()`.

### Challenge

Complete `load` using `fakeFetch("/api/ping")` so it logs `ok:/api/ping`.
