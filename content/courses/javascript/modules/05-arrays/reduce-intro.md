---
lessonId: js-m5-reduce-intro
title: reduce (intro)
order: 29
difficulty: beginner
module: Module 5 — Arrays
objectives:
  - Fold an array into one value with reduce
  - Pass an initial accumulator
  - Sum numbers
starterCode: |
  const nums = [1, 2, 3, 4]
  // total -> nums.reduce((acc, n) => acc + n, 0)
  // Don't change the line below
  console.log(total)
expectedOutput: "10"
---

## Many values → one value

`reduce` walks the array and updates an accumulator:

```js
const total = nums.reduce((acc, n) => acc + n, 0)
```

The `0` is the starting accumulator. Without it, the first item becomes the start (easy to misuse on empty arrays).

### Challenge

Sum `nums` into `total` with `reduce`.
