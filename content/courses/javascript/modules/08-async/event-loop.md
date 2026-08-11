---
lessonId: js-m8-event-loop
title: Event loop order
order: 48
difficulty: beginner
module: Module 8 — Async JavaScript
objectives:
  - Predict sync vs microtask vs macrotask order
  - Use Promise.then as a microtask
  - Use setTimeout as a macrotask
starterCode: |
  // Log letters in this exact order using:
  // 1) a sync console.log
  // 2) Promise.resolve().then(...)
  // 3) setTimeout(..., 0)
  // Target output lines: A then B then C
  // Tip: sync first, then microtask, then macrotask
  console.log("A")
  Promise.resolve().then(() => console.log("B"))
  setTimeout(() => console.log("C"), 0)
expectedOutput: "A\nB\nC"
---

## One diagram you can redraw

Rough order for a turn of the event loop:

1. **Sync** code runs to completion  
2. **Microtasks** (Promise jobs, `queueMicrotask`)  
3. **Macrotasks** (`setTimeout`, some DOM events)

```js
console.log("A")                          // sync
Promise.resolve().then(() => console.log("B")) // microtask
setTimeout(() => console.log("C"), 0)     // macrotask
// A, B, C
```

### Challenge

Keep/finish the snippet so the logs are exactly `A`, `B`, `C` in that order.
