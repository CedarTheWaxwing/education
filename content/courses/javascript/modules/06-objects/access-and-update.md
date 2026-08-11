---
lessonId: js-m6-access-and-update
title: Access and update properties
order: 32
difficulty: beginner
module: Module 6 — Objects
objectives:
  - Read with dot and bracket notation
  - Update existing properties
  - Add new properties
starterCode: |
  const settings = { theme: "dark", fontSize: 14 }
  // Change theme to "light"
  // Add a property sound set to "on" (use bracket notation with key variable)
  const key = "sound"
  // Don't change the line below
  console.log(settings.theme, settings[key], settings.fontSize)
expectedOutput: "light on 14"
---

## Read and write fields

```js
settings.theme = "light"
settings["sound"] = "on"
```

Dot notation is great for fixed names. Brackets are required for dynamic keys (`settings[key]`).

### Challenge

Update `theme`, add `sound` via `key`, keep `fontSize`.
