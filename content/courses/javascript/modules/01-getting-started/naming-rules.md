---
lessonId: js-m1-naming-rules
title: Naming rules and common mistakes
order: 4
difficulty: beginner
module: Module 1 — Getting Started & Variables
objectives:
  - Use valid camelCase identifiers
  - Avoid reserved words as names
  - Prefer clear names over abbreviations
starterCode: |
  // Fix the illegal / unclear names below so the program runs.
  // Goals:
  // - user name should be a const called userName with value "Sam"
  // - max retries should be a const called maxRetries with value 3
  // Don't change the line below
  console.log(userName, maxRetries)
expectedOutput: "Sam 3"
---

## Names matter

Variable names must follow a few hard rules:

1. Start with a letter, `_`, or `$` (not a digit).
2. Use only letters, digits, `_`, or `$` after that.
3. No spaces or hyphens (`user-name` is invalid).
4. Don’t use reserved words (`let`, `const`, `class`, `return`, …).

JavaScript style for ordinary variables is **camelCase**: `userName`, `maxRetries`.

```js
// Bad
// const user-name = "Sam"
// const 2fa = true
// const let = 1

// Good
const userName = "Sam"
const maxRetries = 3
```

Clear names beat clever ones. Future-you (and interviewers) will thank you.

### Challenge

Declare `userName` as `"Sam"` and `maxRetries` as `3`, then keep the given `console.log`.
