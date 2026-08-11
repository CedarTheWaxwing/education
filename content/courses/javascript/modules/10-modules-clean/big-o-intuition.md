---
lessonId: js-m10-big-o-intuition
title: Big-O intuition for everyday code
order: 59
difficulty: beginner
module: Module 10 — Modules & Clean Code
objectives:
  - Classify simple loops as O(n) vs O(1)
  - Spot nested loops as O(n^2)
  - Choose a clearer approach for lookups
starterCode: |
  // For each snippet, set the label to "O(1)", "O(n)", or "O(n^2)"
  // a: reading arr[0]
  // b: one loop over arr
  // c: nested loop over arr x arr
  const a = ""
  const b = ""
  const c = ""
  // Don't change the line below
  console.log(a, b, c)
expectedOutput: "O(1) O(n) O(n^2)"
---

## How work grows with input size

| Pattern | Rough cost |
|---------|------------|
| Index read / map lookup | `O(1)` |
| Single loop | `O(n)` |
| Nested loops over same size | `O(n^2)` |

You don’t need proofs here — you need instinct: *if n becomes 1,000,000, does this still feel fine?*

Nested `for` over the same list is the usual interview smell; a `Set` / object map often drops “have I seen this?” checks to near `O(n)`.

### Challenge

Fill `a`, `b`, and `c` with the three complexity labels in order.
