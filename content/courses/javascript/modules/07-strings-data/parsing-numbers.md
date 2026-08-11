---
lessonId: js-m7-parsing-numbers
title: Parsing numbers from strings
order: 39
difficulty: beginner
module: Module 7 — Strings & Working with Data
objectives:
  - Use Number and parseInt intentionally
  - Strip simple formatting before parsing
  - Detect NaN
starterCode: |
  const priceText = "1,234"
  // digits -> remove commas from priceText (split/join or replaceAll)
  // amount -> Number(digits)
  // bad -> Number("oops")
  // badIsNaN -> Number.isNaN(bad)
  // Don't change the line below
  console.log(amount, badIsNaN)
expectedOutput: "1234 true"
---

## Text in, number out

```js
Number("1234")        // 1234
Number("1,234")       // NaN  (comma breaks it)
parseInt("12px", 10)  // 12
Number.isNaN(Number("oops")) // true
```

Clean the string first when users type formatted numbers. Prefer `Number.isNaN` over global `isNaN`.

### Challenge

Parse `1,234` into `1234` and show that `"oops"` becomes NaN.
