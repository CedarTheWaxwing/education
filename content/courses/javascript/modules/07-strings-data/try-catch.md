---
lessonId: js-m7-try-catch
title: Error handling with try/catch
order: 42
difficulty: beginner
module: Module 7 — Strings & Working with Data
objectives:
  - Wrap risky code in try/catch
  - Recover from JSON.parse failures
  - Return a fallback value
starterCode: |
  function safeParse(text) {
    // try JSON.parse(text) and return the value
    // catch -> return null
  }
  // Don't change the lines below
  console.log(safeParse('{"ok":true}').ok)
  console.log(safeParse("not-json"))
expectedOutput: "true\nnull"
---

## Fail without crashing

```js
try {
  return JSON.parse(text)
} catch {
  return null
}
```

Invalid JSON throws. Catching lets your program keep going with a safe fallback — critical for user input and API noise.

### Challenge

Implement `safeParse` so valid JSON works and invalid input returns `null`.
