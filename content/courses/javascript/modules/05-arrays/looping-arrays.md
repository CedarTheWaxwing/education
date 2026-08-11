---
lessonId: js-m5-looping-arrays
title: Looping arrays
order: 27
difficulty: beginner
module: Module 5 — Arrays
objectives:
  - Loop with for and with for...of
  - Build a string from array items
  - Prefer for...of when you only need values
starterCode: |
  const nums = [2, 4, 6]
  let joined = ""
  // Use for...of to append each number as a string onto joined (no separators)
  // Don't change the line below
  console.log(joined)
expectedOutput: "246"
---

## Walk every item

Classic index loop:

```js
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i])
}
```

When you only need values, `for...of` is cleaner:

```js
for (const n of nums) {
  joined += String(n)
}
```

### Challenge

Fill `joined` from `nums` so it logs `246`.
