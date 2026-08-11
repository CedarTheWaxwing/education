---
lessonId: js-m3-if-else
title: if / else
order: 13
difficulty: beginner
module: Module 3 — Control Flow
objectives:
  - Branch with if / else if / else
  - Compare numbers in conditions
  - Assign a label based on a score
starterCode: |
  const score = 82
  let grade = ""
  // If score >= 90 -> grade = "A"
  // Else if score >= 80 -> grade = "B"
  // Else -> grade = "C"
  // Don't change the line below
  console.log(grade)
expectedOutput: "B"
---

## Choose a path

`if` runs a block only when a condition is true. Chain with `else if`, and finish with `else` for the fallback.

```js
const score = 82
let grade = ""

if (score >= 90) {
  grade = "A"
} else if (score >= 80) {
  grade = "B"
} else {
  grade = "C"
}
```

Conditions are booleans (or values JS treats as truthy/falsy). Prefer clear comparisons like `score >= 80`.

### Challenge

Set `grade` from `score` using the rules in the starter comments.
