---
lessonId: js-m7-string-methods
title: String methods
order: 37
difficulty: beginner
module: Module 7 — Strings & Working with Data
objectives:
  - Use trim, includes, slice, and split
  - Chain simple string cleanups
  - Build parts from a sentence
starterCode: |
  const raw = "  hello world  "
  // cleaned -> trim raw
  // hasHi -> cleaned.includes("hello")
  // firstWord -> cleaned.split(" ")[0]
  // bit -> cleaned.slice(0, 5)
  // Don't change the line below
  console.log(cleaned, hasHi, firstWord, bit)
expectedOutput: "hello world true hello hello"
---

## Strings are toolboxes

```js
"  hi  ".trim()           // "hi"
"hello".includes("he")    // true
"hello world".split(" ")  // ["hello", "world"]
"hello".slice(0, 2)       // "he"
```

Strings are immutable — methods return new strings.

### Challenge

Derive `cleaned`, `hasHi`, `firstWord`, and `bit` from `raw`.
