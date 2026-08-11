---
lessonId: js-m4-function-declarations
title: Function declarations
order: 19
difficulty: beginner
module: Module 4 — Functions
objectives:
  - Declare a named function
  - Call a function and use its result
  - Keep functions focused on one job
starterCode: |
  // Declare a function named triple that takes n and returns n * 3
  // Don't change the lines below
  const value = triple(4)
  console.log(value)
expectedOutput: "12"
---

## Package reusable steps

A **function declaration** names a block of code you can call later:

```js
function triple(n) {
  return n * 3
}

const value = triple(4) // 12
```

Declarations are hoisted (you can call them above their line in the same scope). Still, most readable code defines helpers before use.

### Challenge

Implement `triple` so `triple(4)` logs `12`.
