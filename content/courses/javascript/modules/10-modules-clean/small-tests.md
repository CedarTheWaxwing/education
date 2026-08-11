---
lessonId: js-m10-small-tests
title: Writing small tests for a function
order: 58
difficulty: beginner
module: Module 10 — Modules & Clean Code
objectives:
  - Write a tiny assert helper
  - Cover normal and edge cases
  - Fail loudly when expectations mismatch
starterCode: |
  function sum(a, b) {
    return a + b
  }

  function assertEqual(actual, expected, label) {
    // if actual === expected, console.log("pass:" + label)
    // else console.log("fail:" + label)
  }

  // Don't change the lines below
  assertEqual(sum(2, 3), 5, "adds")
  assertEqual(sum(-1, 1), 0, "zeros")
expectedOutput: "pass:adds\npass:zeros"
---

## Tests are just functions

You don’t need a framework to start:

```js
function assertEqual(actual, expected, label) {
  if (actual === expected) console.log("pass:" + label)
  else console.log("fail:" + label)
}
```

Aim for a few cases: happy path + edge. Later, graduate to Vitest/Jest — same ideas.

### Challenge

Implement `assertEqual` so both checks pass.
