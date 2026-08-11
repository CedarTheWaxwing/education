---
lessonId: js-m4-scope-closures
title: Scope and closures (intro)
order: 22
difficulty: beginner
module: Module 4 — Functions
objectives:
  - See that inner functions read outer variables
  - Return a function that remembers its scope
  - Call the inner function later
starterCode: |
  // Write function makeAdder(x) that returns a function
  // The returned function takes y and returns x + y
  // Don't change the lines below
  const add5 = makeAdder(5)
  console.log(add5(3))
expectedOutput: "8"
---

## Inner functions remember outer values

**Scope** decides where a variable is visible. A function created inside another can still read the outer variables later — that’s a **closure**.

```js
function makeAdder(x) {
  return function (y) {
    return x + y
  }
}

const add5 = makeAdder(5)
add5(3) // 8 — still "remembers" x = 5
```

You’ll use this idea for event handlers, factories, and React/Vue-ish callbacks. Here, keep it small: return a function that adds.

### Challenge

Implement `makeAdder` so `makeAdder(5)(3)` logs `8`.
