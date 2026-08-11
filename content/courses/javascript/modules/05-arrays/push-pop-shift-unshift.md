---
lessonId: js-m5-push-pop-shift-unshift
title: Push / pop / shift / unshift
order: 26
difficulty: beginner
module: Module 5 — Arrays
objectives:
  - Add/remove at the end with push/pop
  - Add/remove at the start with unshift/shift
  - See that these methods mutate the array
starterCode: |
  const queue = ["a", "b"]
  // push "c"
  // unshift "z"
  // pop once (remove last)
  // Don't change the line below
  console.log(queue.join(","))
expectedOutput: "z,a,b"
---

## Grow and shrink

| Method | End | Start |
|--------|-----|-------|
| add | `push` | `unshift` |
| remove | `pop` | `shift` |

```js
const queue = ["a", "b"]
queue.push("c")     // ["a","b","c"]
queue.unshift("z")  // ["z","a","b","c"]
queue.pop()         // ["z","a","b"]
```

These change the original array (mutation). That’s fine here — just know it happens.

### Challenge

Apply the three operations in order so `queue.join(",")` is `z,a,b`.
