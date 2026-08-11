---
lessonId: js-m4-arrow-functions
title: Function expressions and arrow functions
order: 21
difficulty: beginner
module: Module 4 — Functions
objectives:
  - Assign a function to a const
  - Write a concise arrow function
  - Use arrows for small transforms
starterCode: |
  // Create const square as an arrow function: n => n * n
  // Don't change the lines below
  console.log(square(6))
expectedOutput: "36"
---

## Functions as values

You can store functions in variables (**function expressions**):

```js
const square = function (n) {
  return n * n
}
```

**Arrow functions** are a shorter form, common in modern JS:

```js
const square = (n) => n * n
// or even
const square = n => n * n
```

For a single expression, the value is returned automatically. Use `{ return ... }` when you need a full block.

### Challenge

Define `square` as an arrow function and log `36` for input `6`.
