---
lessonId: js-m5-map-filter-find
title: map / filter / find
order: 28
difficulty: beginner
module: Module 5 — Arrays
objectives:
  - Transform with map
  - Keep items with filter
  - Get the first match with find
starterCode: |
  const nums = [1, 2, 3, 4, 5]
  // doubled -> map n * 2
  // evens -> filter n % 2 === 0
  // firstOverThree -> find n > 3
  // Don't change the line below
  console.log(doubled.join(","), evens.join(","), firstOverThree)
expectedOutput: "2,4,6,8,10 2,4 4"
---

## Derive new data

```js
nums.map(n => n * 2)       // new array, transformed
nums.filter(n => n % 2 === 0)
nums.find(n => n > 3)      // first match or undefined
```

`map` / `filter` return **new** arrays. `find` returns one value.

### Challenge

Create `doubled`, `evens`, and `firstOverThree` from `nums`.
