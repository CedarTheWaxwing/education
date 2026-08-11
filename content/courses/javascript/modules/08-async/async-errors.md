---
lessonId: js-m8-async-errors
title: Error handling in async code
order: 46
difficulty: beginner
module: Module 8 — Async JavaScript
objectives:
  - Reject a Promise
  - catch errors with try/catch in async functions
  - Log a fallback message
starterCode: |
  async function readSafe() {
    try {
      // await Promise.reject(new Error("boom"))
      // (unreachable success path)
    } catch (err) {
      // return "recovered:" + err.message
    }
  }
  // Don't change the line below
  readSafe().then((msg) => console.log(msg))
expectedOutput: "recovered:boom"
---

## Failures are values too

```js
async function readSafe() {
  try {
    await Promise.reject(new Error("boom"))
  } catch (err) {
    return "recovered:" + err.message
  }
}
```

With async/await, `try/catch` works like sync code. With raw Promises you’d use `.catch()`.

### Challenge

Reject inside `try`, recover in `catch`, log `recovered:boom`.
