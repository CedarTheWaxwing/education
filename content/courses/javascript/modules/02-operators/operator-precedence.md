---
lessonId: js-m2-operator-precedence
title: Operator precedence
order: 11
difficulty: beginner
module: Module 2 — Operators
objectives:
  - Know * and / bind tighter than + and -
  - Use parentheses to make order obvious
  - Avoid ambiguous expressions
starterCode: |
  // Compute these with the required parentheses:
  // mixed -> 2 + 3 * 4          (should be 14)
  // forced -> (2 + 3) * 4       (should be 20)
  // Don't change the line below
  console.log(mixed, forced)
expectedOutput: "14 20"
---

## Order of operations

JavaScript doesn’t always evaluate left-to-right. Multiplication and division happen before addition and subtraction — same idea as school math.

```js
2 + 3 * 4        // 14, not 20
(2 + 3) * 4      // 20
```

When an expression looks unclear, **add parentheses**. Clarity beats relying on memory of the precedence table.

### Challenge

Create `mixed` and `forced` exactly as described so the log is `14 20`.
