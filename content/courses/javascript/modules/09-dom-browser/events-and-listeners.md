---
lessonId: js-m9-events-and-listeners
title: Events and listeners
order: 50
difficulty: beginner
module: Module 9 — DOM & Browser (light)
objectives:
  - Model addEventListener with a tiny emitter
  - Register a handler for a named event
  - Fire the event and log from the handler
starterCode: |
  function createEmitter() {
    const handlers = {}
    return {
      on(type, fn) {
        handlers[type] = handlers[type] || []
        handlers[type].push(fn)
      },
      emit(type, payload) {
        for (const fn of handlers[type] || []) fn(payload)
      },
    }
  }

  const button = createEmitter()
  // Listen for "click" and console.log "clicked:" + payload
  // Then emit "click" with payload "save"
expectedOutput: "clicked:save"
---

## React to user actions

Browser version:

```js
el.addEventListener("click", (event) => { ... })
```

Here, a tiny emitter mimics the same idea: **subscribe**, then **emit**. Real listeners also receive an `event` object (`event.target`, `event.preventDefault()`).

### Challenge

Subscribe to `click`, emit it with `"save"`, log `clicked:save`.
