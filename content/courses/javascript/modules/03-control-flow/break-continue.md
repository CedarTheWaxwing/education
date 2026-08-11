---
lessonId: js-m3-break-continue
title: break and continue
order: 18
difficulty: beginner
module: Module 3 — Control Flow
objectives:
  - Skip an iteration with continue
  - Exit a loop early with break
  - Build a filtered sequence string
starterCode: |
  let result = ""
  for (let i = 1; i <= 6; i++) {
    // Skip even numbers with continue
    // Stop completely when i === 5 (break before adding 5)
    // Otherwise append String(i) to result
  }
  // Don't change the line below
  console.log(result)
expectedOutput: "13"
---

## Control the loop from inside

- `continue` — skip the rest of this iteration, go to the next.
- `break` — leave the loop immediately.

```js
let result = ""
for (let i = 1; i <= 6; i++) {
  if (i % 2 === 0) continue
  if (i === 5) break
  result += String(i)
}
```

Odds considered: `1`, `3`, then hit `5` and stop → `"13"`.

### Challenge

Implement the skip/stop rules in the starter comments so `result` is `13`.
