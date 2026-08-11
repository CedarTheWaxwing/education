---
lessonId: js-m8-async-await
title: async / await
order: 45
difficulty: beginner
module: Module 8 — Async JavaScript
objectives:
  - Write an async function
  - await a Promise
  - Return the final result to the runner
starterCode: |
  async function loadName() {
    // await Promise.resolve("Nova") and return it
  }
  // Don't change the line below — returning the promise lets the runner wait
  loadName().then((name) => console.log("hi", name))
expectedOutput: "hi Nova"
---

## Promises that read like steps

`async` functions always return Promises. `await` pauses that function until the Promise settles:

```js
async function loadName() {
  return await Promise.resolve("Nova")
}
```

Under the hood it’s still Promises — just nicer syntax for sequential async flow.

### Challenge

Make `loadName` await and return `"Nova"` so the log is `hi Nova`.
