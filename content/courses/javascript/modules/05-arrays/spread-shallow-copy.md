---
lessonId: js-m5-spread-shallow-copy
title: Spread and shallow copy pitfalls
order: 30
difficulty: beginner
module: Module 5 — Arrays
objectives:
  - Copy an array with spread
  - See that nested objects are still shared
  - Mutate a copy without changing the top-level original list
starterCode: |
  const original = [1, 2, 3]
  // copy -> new array via spread [...original]
  // then push 4 onto copy only
  // Don't change the line below
  console.log(original.join(","), copy.join(","))
expectedOutput: "1,2,3 1,2,3,4"
---

## Copy ≠ deep clone

```js
const copy = [...original]
copy.push(4) // original stays [1,2,3]
```

Spread makes a **shallow** copy: top-level elements are new slots, but objects/arrays inside are still the same references.

```js
const nested = [{ n: 1 }]
const copy = [...nested]
copy[0].n = 9 // nested[0].n is also 9
```

### Challenge

Spread-copy `original`, push `4` on the copy only, log both joined arrays.
