---
lessonId: js-m1-primitive-types
title: Primitive types
order: 3
difficulty: beginner
module: Module 1 — Getting Started & Variables
objectives:
  - Recognize string, number, boolean, null, and undefined
  - Create one value of each common primitive
  - Log mixed types in a single console.log
starterCode: |
  // Create these variables with the exact values:
  // name -> string "Ada"
  // age -> number 36
  // active -> boolean true
  // nothing -> null
  // missing -> undefined (declare with let, do not assign)
  // Don't change the line below
  console.log(name, age, active, nothing, missing)
expectedOutput: "Ada 36 true null undefined"
---

## Values have types

JavaScript’s everyday building blocks are called **primitives**:

| Type | Example | Notes |
|------|---------|-------|
| `string` | `"Ada"` | Text in quotes |
| `number` | `36` | Integers and decimals |
| `boolean` | `true` / `false` | Yes/no flags |
| `null` | `null` | Intentional empty |
| `undefined` | `undefined` | Declared but not set |

```js
const label = "ok"
const count = 3
const ready = false
const empty = null
let later
console.log(label, count, ready, empty, later)
```

`typeof null` is a famous quirk (`"object"`). Treat `null` as “empty on purpose,” and `undefined` as “not given yet.”

### Challenge

Create `name`, `age`, `active`, `nothing`, and `missing` with the values in the starter comments. Keep the final `console.log` unchanged.
