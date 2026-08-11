---
lessonId: js-m3-for-loops
title: for loops
order: 16
difficulty: beginner
module: Module 3 — Control Flow
objectives:
  - Write a classic for (init; test; step) loop
  - Accumulate a total
  - Loop a fixed number of times
starterCode: |
  // Sum integers from 1 through 5 into a let named total (start at 0)
  // Use a for loop
  // Don't change the line below
  console.log(total)
expectedOutput: "15"
---

## Repeat with a counter

A `for` loop has three parts: start, continue-while-true, and update.

```js
let total = 0
for (let i = 1; i <= 5; i++) {
  total += i
}
```

`1 + 2 + 3 + 4 + 5 = 15`. You’ll use this pattern constantly for arrays later (`i < array.length`).

### Challenge

Loop `1..5`, add each number into `total`, log `15`.
