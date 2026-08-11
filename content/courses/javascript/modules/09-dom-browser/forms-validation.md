---
lessonId: js-m9-forms-validation
title: Forms and validation (basic)
order: 52
difficulty: beginner
module: Module 9 — DOM & Browser (light)
objectives:
  - Validate required fields
  - Validate a simple email shape
  - Return field errors as data
starterCode: |
  function validate(form) {
    const errors = []
    // if !form.email trim empty -> push "email required"
    // else if !form.email.includes("@") -> push "email invalid"
    // if !form.name trim empty -> push "name required"
    return errors
  }
  // Don't change the lines below
  console.log(validate({ name: "", email: "x" }).join(",") || "ok")
  console.log(validate({ name: "Ada", email: "ada@ex.com" }).join(",") || "ok")
expectedOutput: "email invalid,name required\nok"
---

## Check before you submit

Browser forms use `required`, `type="email"`, and JS validation. The logic is the same in plain data:

```js
if (!form.email.trim()) errors.push("email required")
```

Returning an `errors` array keeps UI code simple: empty array → ok to submit.

### Challenge

Implement `validate` so the two calls match the expected output (second line empty).
