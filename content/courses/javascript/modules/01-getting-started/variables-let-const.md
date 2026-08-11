---
lessonId: js-m1-variables-let-const
title: Variables with let and const
order: 2
difficulty: beginner
module: Module 1 — Getting Started & Variables
objectives:
  - Declare values with let and const
  - Reassign let variables
  - Log multiple values clearly
starterCode: |
  // Create a const named course with the value "JavaScript"
  // Create a let named level with the value 1
  // Then reassign level to 2
  // Don't change the line below
  console.log(course, level)
expectedOutput: "JavaScript 2"
---

## Variables store values

In JavaScript, you create a named container with `let` or `const`.

| Keyword | Can reassign? | Typical use |
|---------|---------------|-------------|
| `const` | No | Values that should not change |
| `let` | Yes | Values that will change |

```js
const language = "JavaScript"
let step = 1
step = 2
console.log(language, step)
```

Prefer `const` by default. Switch to `let` only when you need to reassign.

### Challenge

1. Create a `const` named `course` with the value `"JavaScript"`.
2. Create a `let` named `level` with the value `1`.
3. Reassign `level` to `2`.
4. Keep the final `console.log` line unchanged.
