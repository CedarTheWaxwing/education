---
lessonId: js-m4-default-parameters
title: Default parameters
order: 23
difficulty: beginner
module: Module 4 — Functions
objectives:
  - Give parameters default values
  - Override defaults by passing arguments
  - Keep call sites simple
starterCode: |
  // Write function tag(label, prefix = "INFO") that returns:
  // "[<prefix>] <label>"
  // Don't change the lines below
  console.log(tag("saved"))
  console.log(tag("oops", "ERROR"))
expectedOutput: "[INFO] saved\n[ERROR] oops"
---

## Fallbacks at the door

Default parameters fill in when an argument is `undefined` (including when omitted):

```js
function tag(label, prefix = "INFO") {
  return `[${prefix}] ${label}`
}

tag("saved")             // "[INFO] saved"
tag("oops", "ERROR")     // "[ERROR] oops"
```

This beats `prefix = prefix || "INFO"` for most cases — `||` would also replace intentional falsy values like `0` or `""`.

### Challenge

Implement `tag` so both logged lines match the expected output.
