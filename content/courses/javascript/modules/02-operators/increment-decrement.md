---
lessonId: js-m2-increment-decrement
title: Increment and decrement pitfalls
order: 12
difficulty: beginner
module: Module 2 — Operators
objectives:
  - Use ++ and -- carefully
  - Prefer count += 1 in readable code
  - See the difference between prefix and postfix
starterCode: |
  let count = 5
  // Create postfix -> count++   (use the value, then increase)
  // After that line, count has increased.
  // Create prefix -> ++count    (increase, then use the value)
  // Don't change the line below
  console.log(postfix, prefix, count)
expectedOutput: "5 7 7"
---

## ++ and -- look tiny, act sharp

`count++` (postfix) returns the **old** value, then adds one.  
`++count` (prefix) adds one, then returns the **new** value.

```js
let count = 5
const postfix = count++  // postfix = 5, count becomes 6
const prefix = ++count   // count becomes 7, prefix = 7
```

In real projects, many teams prefer `count += 1` because the intent is obvious. Still, interviews and older code use `++` often — you need to read it safely.

### Challenge

From `count = 5`, create `postfix` with `count++`, then `prefix` with `++count`. Final log: `5 7 7`.
