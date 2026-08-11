---
lessonId: js-m1-template-literals
title: Template literals
order: 5
difficulty: beginner
module: Module 1 — Getting Started & Variables
objectives:
  - Build strings with backtick template literals
  - Interpolate variables with ${...}
  - Prefer templates over awkward concatenation
starterCode: |
  const language = "JavaScript"
  const week = 1
  // Create a const named summary using a template literal that reads:
  // Week 1: learning JavaScript
  // (use the variables above — do not hardcode the number/name twice)
  // Don't change the line below
  console.log(summary)
expectedOutput: "Week 1: learning JavaScript"
---

## Strings with superpowers

**Template literals** use backticks (`` ` ``) instead of quotes. Inside them, `${expression}` inserts a value.

```js
const language = "JavaScript"
const week = 1
const summary = `Week ${week}: learning ${language}`
console.log(summary)
```

Compared with `"Week " + week + ": learning " + language`, templates are easier to read and less error-prone.

You can also span multiple lines with backticks — handy later for longer messages.

### Challenge

Using `language` and `week`, create `summary` so it logs exactly `Week 1: learning JavaScript`.
