---
lessonId: js-m10-reading-stack-traces
title: Reading stack traces
order: 57
difficulty: beginner
module: Module 10 — Modules & Clean Code
objectives:
  - Pull the error message from an Error
  - Identify the first “own code” frame in a stack string
  - Practice debugging without guessing
starterCode: |
  const stack = [
    "Error: boom",
    "    at broken (app.js:10:5)",
    "    at main (app.js:20:1)",
    "    at node:internal/x:1:1",
  ].join("\n")

  // message -> text after "Error: " on the first line
  // topFrame -> the first line that includes "app.js"
  // Don't change the line below
  console.log(message, topFrame.trim())
expectedOutput: "boom at broken (app.js:10:5)"
---

## Read the top of the stack

A typical trace:

```
Error: boom
    at broken (app.js:10:5)
    at main (app.js:20:1)
```

1. **Message** — what failed  
2. **Top app frame** — where *your* code blew up (skip `node_modules` / internals when you can)

Fix from the inside out: open that file/line, reproduce, then confirm.

### Challenge

Parse `message` and `topFrame` from the provided `stack` string.
