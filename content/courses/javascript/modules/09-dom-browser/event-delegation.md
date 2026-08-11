---
lessonId: js-m9-event-delegation
title: Event delegation
order: 53
difficulty: beginner
module: Module 9 — DOM & Browser (light)
objectives:
  - Handle many items with one parent listener
  - Inspect a target id/type
  - Ignore irrelevant targets
starterCode: |
  function onListClick(targetId) {
    // If targetId starts with "item-", return "open:" + targetId
    // Otherwise return "ignore"
  }
  // Don't change the lines below
  console.log(onListClick("item-42"))
  console.log(onListClick("banner"))
expectedOutput: "open:item-42\nignore"
---

## One listener, many children

Instead of binding click handlers to every row, listen on the parent and check `event.target`:

```js
list.addEventListener("click", (event) => {
  const id = event.target.id
  // decide what to do
})
```

This scales better and works for rows added later. Here you practice the decision logic with `targetId`.

### Challenge

Implement `onListClick` for the two example targets.
