---
lessonId: js-m6-object-vs-map
title: Object vs Map (when to care)
order: 36
difficulty: beginner
module: Module 6 — Objects
objectives:
  - Store key/value pairs in a Map
  - Use get/set/has
  - Know when Map beats plain objects
starterCode: |
  const scores = new Map()
  // set "a" -> 1 and "b" -> 2
  // Create hasA = scores.has("a")
  // Create b = scores.get("b")
  // Don't change the line below
  console.log(hasA, b, scores.size)
expectedOutput: "true 2 2"
---

## When keys are data

Plain objects are great for fixed shape records (`user.name`). **Map** shines for dynamic dictionaries:

- keys can be any type (not just strings)
- `.size` is reliable
- insertion order is well-defined
- no prototype key collisions

```js
const scores = new Map()
scores.set("a", 1)
scores.get("a") // 1
scores.has("a") // true
```

Rule of thumb: record/shape → object; growing key/value store → Map.

### Challenge

Fill the Map and log `hasA`, `b`, and `size`.
