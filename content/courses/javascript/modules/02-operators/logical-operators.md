---
lessonId: js-m2-logical-operators
title: Logical operators
order: 10
difficulty: beginner
module: Module 2 — Operators
objectives:
  - Combine conditions with && and ||
  - Negate with !
  - Build a small eligibility check
starterCode: |
  const age = 20
  const hasId = true
  // canEnter -> age >= 18 && hasId
  // needsHelp -> age < 18 || !hasId
  // denied -> !canEnter
  // Don't change the line below
  console.log(canEnter, needsHelp, denied)
expectedOutput: "true false false"
---

## Combine conditions

| Operator | Meaning | Example |
|----------|---------|---------|
| `&&` | And — both true | `age >= 18 && hasId` |
| `\|\|` | Or — either true | `age < 18 \|\| !hasId` |
| `!` | Not — flip boolean | `!hasId` |

```js
const age = 20
const hasId = true
const canEnter = age >= 18 && hasId
```

`&&` / `||` also short-circuit: the right side runs only if needed. That matters later for safe property access and defaults.

### Challenge

Define `canEnter`, `needsHelp`, and `denied` from `age` and `hasId`.
