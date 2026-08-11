---
lessonId: js-m9-accessibility-checkpoints
title: Accessibility checkpoints
order: 54
difficulty: beginner
module: Module 9 — DOM & Browser (light)
objectives:
  - Pair labels with inputs via for/id
  - Ensure buttons have accessible names
  - Spot a few high-impact a11y checks
starterCode: |
  function audit(node) {
    const issues = []
    // if node.type === "input" and !node.labelForMatch -> push "input missing label"
    // if node.type === "button" and !String(node.name || "").trim() -> push "button missing name"
    return issues
  }
  // Don't change the lines below
  console.log(audit({ type: "input", labelForMatch: false }).join(",") || "ok")
  console.log(audit({ type: "button", name: "Save" }).join(",") || "ok")
expectedOutput: "input missing label\nok"
---

## Small checks, big usability wins

In real HTML:

- Inputs need associated `<label for="id">`
- Buttons need clear text (or `aria-label`)
- Interactive elements should be keyboard reachable (`button` / `a`, not clickable `div`s)

```html
<label for="email">Email</label>
<input id="email" type="email" />
<button>Save</button>
```

### Challenge

Implement `audit` so the unlabeled input fails and the named button passes (empty second line).
