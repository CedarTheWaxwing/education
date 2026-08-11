---
lessonId: js-m3-switch
title: switch
order: 15
difficulty: beginner
module: Module 3 — Control Flow
objectives:
  - Match a value with switch / case
  - Remember break to avoid fall-through
  - Provide a default branch
starterCode: |
  const day = "Sat"
  let type = ""
  // Use switch on day:
  // "Mon".."Fri" -> type = "weekday"  (you can case each, or start with Sat/Sun)
  // "Sat" or "Sun" -> type = "weekend"
  // default -> type = "unknown"
  // Don't change the line below
  console.log(type)
expectedOutput: "weekend"
---

## Many exact matches

`switch` compares a value with `===` against each `case`.

```js
const day = "Sat"
let type = ""

switch (day) {
  case "Sat":
  case "Sun":
    type = "weekend"
    break
  case "Mon":
  case "Tue":
  case "Wed":
  case "Thu":
  case "Fri":
    type = "weekday"
    break
  default:
    type = "unknown"
}
```

Stacking `case` labels (like `Sat` / `Sun`) shares one body. Always `break` unless you *want* fall-through.

### Challenge

Set `type` for `day = "Sat"` so the log is `weekend`.
