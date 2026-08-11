---
lessonId: js-m5-create-and-access
title: Create and access arrays
order: 25
difficulty: beginner
module: Module 5 — Arrays
objectives:
  - Create arrays with literal syntax
  - Read items by index
  - Use .length
starterCode: |
  // Create an array named colors with "red", "green", "blue"
  // Create first as colors[0]
  // Create last as colors[colors.length - 1]
  // Don't change the line below
  console.log(first, last, colors.length)
expectedOutput: "red blue 3"
---

## Lists of values

Arrays hold ordered values. Indexes start at **0**.

```js
const colors = ["red", "green", "blue"]
colors[0]           // "red"
colors.length       // 3
colors[colors.length - 1] // "blue"
```

### Challenge

Build `colors`, `first`, and `last` so the log is `red blue 3`.
