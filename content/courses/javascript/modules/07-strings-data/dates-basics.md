---
lessonId: js-m7-dates-basics
title: Dates (basics)
order: 41
difficulty: beginner
module: Module 7 — Strings & Working with Data
objectives:
  - Create a Date for a fixed UTC moment via ISO string
  - Read UTC year/month/day
  - Avoid timezone surprises in lessons by using UTC getters
starterCode: |
  const stamp = new Date("2026-08-11T00:00:00.000Z")
  // y -> getUTCFullYear()
  // m -> getUTCMonth() + 1   (months are 0-based)
  // d -> getUTCDate()
  // Don't change the line below
  console.log(y, m, d)
expectedOutput: "2026 8 11"
---

## Time is tricky — start simple

```js
const stamp = new Date("2026-08-11T00:00:00.000Z")
stamp.getUTCFullYear() // 2026
stamp.getUTCMonth() + 1 // 8 (Month is 0–11!)
stamp.getUTCDate() // 11
```

Use UTC getters in these drills so results don’t depend on your machine’s timezone.

### Challenge

Pull UTC year/month/day from `stamp`.
