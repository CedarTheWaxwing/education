---
lessonId: js-m2-arithmetic-operators
title: Arithmetic operators
order: 7
difficulty: beginner
module: Module 2 — Operators
objectives:
  - Use +, -, *, /, and %
  - Store a calculation in a variable
  - Log a numeric result
starterCode: |
  const a = 10
  const b = 3
  // Create const sum = a + b
  // Create const product = a * b
  // Create const remainder = a % b
  // Don't change the line below
  console.log(sum, product, remainder)
expectedOutput: "13 30 1"
---

## Math in code

| Operator | Meaning | Example |
|----------|---------|---------|
| `+` | Add | `10 + 3` → `13` |
| `-` | Subtract | `10 - 3` → `7` |
| `*` | Multiply | `10 * 3` → `30` |
| `/` | Divide | `10 / 3` → `3.333...` |
| `%` | Remainder | `10 % 3` → `1` |

```js
const a = 10
const b = 3
const remainder = a % b
console.log(remainder)
```

`%` is useful for “every Nth item,” even/odd checks, and wrapping indexes.

### Challenge

Compute `sum`, `product`, and `remainder` from `a` and `b`. Keep the final `console.log`.
