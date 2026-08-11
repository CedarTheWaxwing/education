---
lessonId: js-m3-while-loops
title: while / do...while
order: 17
difficulty: beginner
module: Module 3 — Control Flow
objectives:
  - Loop while a condition stays true
  - See that do...while runs at least once
  - Avoid infinite loops by updating state
starterCode: |
  let n = 1
  let path = ""
  // While n <= 3:
  //   append String(n) to path (no separators)
  //   then n += 1
  // Don't change the line below
  console.log(path, n)
expectedOutput: "123 4"
---

## Loop until a condition fails

`while` checks **before** each iteration:

```js
let n = 1
let path = ""
while (n <= 3) {
  path += String(n)
  n += 1
}
```

`do { ... } while (condition)` runs the body once first, then checks — useful when you must try before you know whether to continue.

If you forget to update `n`, the loop never ends. Always move state toward the stop condition.

### Challenge

Build `path` as `"123"` and leave `n` at `4` after the loop.
