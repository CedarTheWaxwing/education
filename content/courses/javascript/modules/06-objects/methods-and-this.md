---
lessonId: js-m6-methods-and-this
title: Methods and this (surface level)
order: 33
difficulty: beginner
module: Module 6 — Objects
objectives:
  - Attach a function as a method
  - Use this to read sibling properties
  - Call the method and log its return value
starterCode: |
  const counter = {
    value: 2,
    // Add method next() that returns this.value + 1 (do not mutate)
  }
  // Don't change the line below
  console.log(counter.next(), counter.value)
expectedOutput: "3 2"
---

## Functions on objects

A **method** is a function stored on an object. Inside a normal method, `this` refers to that object:

```js
const counter = {
  value: 2,
  next() {
    return this.value + 1
  },
}
```

Arrow functions do **not** get their own `this` the same way — for methods that need `this`, prefer the concise method syntax above.

### Challenge

Add `next` so it returns `3` without changing `value` (still `2`).
