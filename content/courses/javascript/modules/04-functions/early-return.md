---
lessonId: js-m4-early-return
title: Early return style
order: 24
difficulty: beginner
module: Module 4 — Functions
objectives:
  - Exit early on invalid input
  - Reduce deep nesting
  - Return a clear result path
starterCode: |
  // Write function discount(price, member) {
  //   if price is not a number or price < 0, return "invalid"
  //   if member is true, return price * 0.9
  //   otherwise return price
  // }
  // Don't change the lines below
  console.log(discount(100, true))
  console.log(discount(-5, true))
  console.log(discount(50, false))
expectedOutput: "90\ninvalid\n50"
---

## Guard clauses first

**Early returns** handle bad or special cases at the top, then do the happy path without deep nesting:

```js
function discount(price, member) {
  if (typeof price !== "number" || price < 0) return "invalid"
  if (member) return price * 0.9
  return price
}
```

This style reads top-to-bottom: reject → special case → default. Interviewers often like it because intent stays obvious.

### Challenge

Implement `discount` so the three logged lines match exactly.
