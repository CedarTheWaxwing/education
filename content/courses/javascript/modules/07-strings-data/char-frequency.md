---
lessonId: js-m7-char-frequency
title: Char frequency / counting patterns
order: 38
difficulty: beginner
module: Module 7 — Strings & Working with Data
objectives:
  - Count characters with an object map
  - Loop a string’s characters
  - Read a frequency value
starterCode: |
  const text = "banana"
  const freq = {}
  // For each character c in text:
  //   freq[c] = (freq[c] || 0) + 1
  // Don't change the line below
  console.log(freq.a, freq.b, freq.n)
expectedOutput: "3 1 2"
---

## Count what appears

Frequency maps show up in interviews and analytics:

```js
const freq = {}
for (const c of text) {
  freq[c] = (freq[c] || 0) + 1
}
```

`"banana"` → `a:3`, `b:1`, `n:2`.

### Challenge

Fill `freq` and log the counts for `a`, `b`, and `n`.
