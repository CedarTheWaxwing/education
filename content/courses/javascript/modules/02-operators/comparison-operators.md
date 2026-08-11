---
lessonId: js-m2-comparison-operators
title: Comparison operators
order: 9
difficulty: beginner
module: Module 2 — Operators
objectives:
  - Compare with ===, !==, <, >
  - Prefer === over ==
  - Store comparison results as booleans
starterCode: |
  const level = 3
  const target = "3"
  // Create:
  // sameStrict -> level === 3
  // sameLooseLookalike -> level == target  (true, but risky)
  // higher -> level > 2
  // Don't change the line below
  console.log(sameStrict, sameLooseLookalike, higher)
expectedOutput: "true true true"
---

## Ask yes/no questions

Comparisons produce booleans.

| Operator | Meaning |
|----------|---------|
| `===` | Equal value **and** type |
| `!==` | Not equal (strict) |
| `==` / `!=` | Equal after coercion (avoid in new code) |
| `>` `<` `>=` `<=` | Ordering |

```js
3 === 3      // true
3 === "3"    // false
3 == "3"     // true  (coerced — easy to misuse)
```

Default to `===` / `!==`. Only use `==` when you deliberately want coercion — and say so in a comment.

### Challenge

Create the three booleans described in the starter comments.
