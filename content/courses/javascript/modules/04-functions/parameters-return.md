---
lessonId: js-m4-parameters-return
title: Parameters and return values
order: 20
difficulty: beginner
module: Module 4 — Functions
objectives:
  - Accept multiple parameters
  - Return a computed value
  - Know that code after return does not run
starterCode: |
  // Write function greet(name, mood) that returns:
  // "Hi, <name> — feeling <mood>!"
  // Don't change the lines below
  console.log(greet("Alex", "focused"))
expectedOutput: "Hi, Alex — feeling focused!"
---

## Inputs in, value out

**Parameters** are placeholders in the definition. **Arguments** are the values you pass when calling.

```js
function greet(name, mood) {
  return `Hi, ${name} — feeling ${mood}!`
}
```

`return` sends a value back to the caller and exits the function. Anything after `return` in that path never runs.

### Challenge

Implement `greet` so the log matches the expected sentence exactly (including punctuation).
