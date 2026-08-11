---
lessonId: js-m9-selecting-elements
title: Selecting elements
order: 49
difficulty: beginner
module: Module 9 — DOM & Browser (light)
objectives:
  - Know querySelector vs querySelectorAll
  - Choose a precise CSS selector string
  - Practice without a live DOM (runner has no document)
starterCode: |
  const html = '<main><h1 class="title">Hi</h1><button id="save">Save</button></main>'
  // Write selector strings (not real DOM calls):
  // titleSel -> select the h1.title
  // buttonSel -> select the element with id save
  // Don't change the line below
  console.log(titleSel, buttonSel)
expectedOutput: "h1.title #save"
---

## Find nodes in the page

In the browser:

```js
document.querySelector("h1.title")
document.querySelector("#save")
document.querySelectorAll("button") // NodeList
```

This runner can’t touch a real DOM, so you practice the **selectors** themselves — the skill that matters most at first.

| Goal | Selector |
|------|----------|
| class `title` on `h1` | `h1.title` |
| id `save` | `#save` |

### Challenge

Set `titleSel` and `buttonSel` to the correct selector strings.
