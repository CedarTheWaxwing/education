---
lessonId: js-m8-promises
title: Promises
order: 44
difficulty: beginner
module: Module 8 — Async JavaScript
objectives:
  - Create a Promise that resolves
  - Consume it with .then
  - Log resolved values
starterCode: |
  // Create promise that resolves to "ok"
  // Then console.log the value in .then
  // Don't change / remove the final sync log
  console.log("start")
expectedOutput: "start\nok"
---

## A value that arrives later

```js
const promise = Promise.resolve("ok")
console.log("start")
promise.then((value) => console.log(value))
```

A Promise is pending → fulfilled or rejected. `.then` runs after the current sync code finishes (microtask).

### Challenge

Resolve `"ok"` and log it in `.then`, keeping the `start` log first.
