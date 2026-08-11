---
lessonId: js-m8-callbacks
title: Callbacks (why they exist)
order: 43
difficulty: beginner
module: Module 8 — Async JavaScript
objectives:
  - Pass a function as an argument
  - Run work “later” via a callback
  - See callback order vs sync code
starterCode: |
  function later(value, cb) {
    // Call cb(value) using setTimeout with delay 0
  }
  // Don't change the lines below
  later("done", (msg) => console.log(msg))
  console.log("first")
expectedOutput: "first\ndone"
---

## “Call me when finished”

A **callback** is a function you hand to someone else to run later:

```js
function later(value, cb) {
  setTimeout(() => cb(value), 0)
}
```

Sync code still runs first (`first`), then the timeout callback (`done`). This pattern predates Promises and still powers many APIs.

### Challenge

Implement `later` with `setTimeout(..., 0)` so the log order is `first` then `done`.
