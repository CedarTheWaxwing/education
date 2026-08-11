---
lessonId: js-m10-es-modules
title: ES modules (import / export)
order: 55
difficulty: beginner
module: Module 10 — Modules & Clean Code
objectives:
  - Know named export vs default export shapes
  - Describe what an importer receives
  - Practice module boundaries without a bundler file graph
starterCode: |
  // Represent a module as data (the runner isn't a full ESM project):
  const mathModule = {
    exports: {
      add: (a, b) => a + b,
      default: (a, b) => a * b,
    },
  }
  // namedAdd -> mathModule.exports.add
  // defaultMul -> mathModule.exports.default
  // Don't change the line below
  console.log(namedAdd(2, 3), defaultMul(2, 3))
expectedOutput: "5 6"
---

## Split code across files

In real projects:

```js
// math.js
export function add(a, b) { return a + b }
export default function mul(a, b) { return a * b }

// main.js
import mul, { add } from "./math.js"
```

Here you practice the **same idea** with an exports object: named exports hang off the module, and `default` is the default export.

### Challenge

Wire `namedAdd` and `defaultMul` to the exports and log `5 6`.
