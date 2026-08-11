---
lessonId: js-m3-ternary-operator
title: Ternary operator
order: 14
difficulty: beginner
module: Module 3 — Control Flow
objectives:
  - Write a condition ? ifTrue : ifFalse expression
  - Prefer ternary for simple either/or values
  - Avoid nesting ternaries when readability suffers
starterCode: |
  const age = 17
  // Create access using a ternary:
  // "allowed" if age >= 18, otherwise "denied"
  // Don't change the line below
  console.log(access)
expectedOutput: "denied"
---

## A compact either/or

The ternary operator is a one-line `if/else` that **returns a value**:

```js
const access = age >= 18 ? "allowed" : "denied"
```

Read it as: *condition ? valueIfTrue : valueIfFalse*.

Great for simple assignments. If you need multiple branches or side effects, use a normal `if` block instead.

### Challenge

Create `access` with a ternary so age `17` logs `denied`.
