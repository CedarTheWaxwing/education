---
lessonId: js-m2-assignment-operators
title: Assignment operators
order: 8
difficulty: beginner
module: Module 2 — Operators
objectives:
  - Update values with =, +=, -=, *=
  - Prefer score += 1 over score = score + 1
  - Track a running total
starterCode: |
  let score = 10
  // Add 5 to score using +=
  // Multiply score by 2 using *=
  // Subtract 4 from score using -=
  // Don't change the line below
  console.log(score)
expectedOutput: "26"
---

## Update in place

Assignment operators change a variable using its current value:

| Operator | Same as |
|----------|---------|
| `x += 5` | `x = x + 5` |
| `x -= 2` | `x = x - 2` |
| `x *= 3` | `x = x * 3` |
| `x /= 2` | `x = x / 2` |

```js
let score = 10
score += 5   // 15
score *= 2   // 30
score -= 4   // 26
```

Order matters. Apply the updates in the order the challenge lists them.

### Challenge

Start from `score = 10`, then `+= 5`, `*= 2`, `-= 4`. Log should be `26`.
