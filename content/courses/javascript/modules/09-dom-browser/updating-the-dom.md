---
lessonId: js-m9-updating-the-dom
title: Updating the DOM
order: 51
difficulty: beginner
module: Module 9 — DOM & Browser (light)
objectives:
  - Represent an element as a plain object
  - Update textContent-like fields
  - Toggle a class list in data form
starterCode: |
  const el = { textContent: "Old", className: "box" }
  // Set textContent to "Saved"
  // Append " is-active" to className if not already present
  // Don't change the line below
  console.log(el.textContent, el.className)
expectedOutput: "Saved box is-active"
---

## Change what the user sees

In the browser:

```js
el.textContent = "Saved"
el.classList.add("is-active")
```

We mirror that with a simple object so you can practice the state changes the DOM APIs perform. Prefer `textContent` over `innerHTML` unless you intentionally render HTML.

### Challenge

Update `el` so it logs `Saved box is-active`.
