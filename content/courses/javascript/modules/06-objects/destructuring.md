---
lessonId: js-m6-destructuring
title: Destructuring
order: 35
difficulty: beginner
module: Module 6 — Objects
objectives:
  - Pull fields out with object destructuring
  - Rename during destructure
  - Destructure function parameters (read-only example)
starterCode: |
  const book = { title: "Eloquent JS", pages: 450 }
  // Destructure title and pages from book
  // Also create alias name from title: { title: name }
  // Don't change the line below
  console.log(title, pages, name)
expectedOutput: "Eloquent JS 450 Eloquent JS"
---

## Unpack in one line

```js
const { title, pages } = book
const { title: name } = book
```

Destructuring reduces repetitive `book.title` access. You can rename with `title: name`.

### Challenge

Create `title`, `pages`, and `name` (alias of title) as described.
