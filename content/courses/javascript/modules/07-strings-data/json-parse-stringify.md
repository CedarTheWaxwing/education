---
lessonId: js-m7-json-parse-stringify
title: JSON parse / stringify
order: 40
difficulty: beginner
module: Module 7 — Strings & Working with Data
objectives:
  - Convert objects to JSON strings
  - Parse JSON back into objects
  - Round-trip a small record
starterCode: |
  const player = { name: "Sam", score: 10 }
  // json -> JSON.stringify(player)
  // again -> JSON.parse(json)
  // Don't change the line below
  console.log(json, again.name, again.score)
expectedOutput: '{"name":"Sam","score":10} Sam 10'
---

## The language of APIs

JSON is text. JavaScript objects are values. Convert between them:

```js
const json = JSON.stringify(player)
const again = JSON.parse(json)
```

Note: `JSON.stringify` skips functions and can behave oddly with `undefined`. Stick to data fields.

### Challenge

Stringify `player`, parse it back, log json + name + score.
