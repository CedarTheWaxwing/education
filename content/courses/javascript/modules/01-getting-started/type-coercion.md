---
lessonId: js-m1-type-coercion
title: Type coercion basics
order: 6
difficulty: beginner
module: Module 1 — Getting Started & Variables
objectives:
  - Convert values with Number, String, and Boolean
  - Know that Number("abc") becomes NaN
  - Prefer explicit conversion over accidental coercion
starterCode: |
  const rawAge = "29"
  const rawFlag = "true"
  const rawEmpty = ""
  // Create:
  // age -> Number(rawAge)
  // flagLabel -> String(false)
  // hasText -> Boolean(rawEmpty)  // empty string is falsy
  // Don't change the line below
  console.log(age, flagLabel, hasText)
expectedOutput: "29 false false"
---

## Be explicit when types change

JavaScript sometimes converts types for you (`"5" * 2` → `10`). That’s convenient — and a common bug source.

Prefer **explicit** conversion:

| Helper | Example | Result |
|--------|---------|--------|
| `Number(x)` | `Number("29")` | `29` |
| `String(x)` | `String(false)` | `"false"` |
| `Boolean(x)` | `Boolean("")` | `false` |

```js
Number("29")      // 29
Number("abc")     // NaN (Not a Number)
String(false)     // "false"
Boolean("")       // false
Boolean("true")   // true  (non-empty string!)
```

Note: `Boolean("false")` is still `true`, because any non-empty string is truthy. Parsing real booleans from text needs a deliberate check later.

### Challenge

Build `age`, `flagLabel`, and `hasText` as described in the starter comments. Keep the final `console.log` unchanged.
