---
lessonId: js-m10-organizing-helpers
title: Organizing helpers
order: 56
difficulty: beginner
module: Module 10 — Modules & Clean Code
objectives:
  - Extract pure helpers instead of one giant script
  - Keep helpers small and named clearly
  - Compose helpers into a feature function
starterCode: |
  function clamp(n, min, max) {
    // return n limited to [min, max]
  }
  function toPercent(n) {
    // return String(n) + "%"
  }
  function formatHealth(hp) {
    // clamp hp to 0..100, then toPercent
  }
  // Don't change the line below
  console.log(formatHealth(140), formatHealth(-5), formatHealth(80))
expectedOutput: "100% 0% 80%"
---

## Small functions, clear jobs

Rather than one 40-line block, split steps:

1. `clamp` — enforce a range  
2. `toPercent` — format  
3. `formatHealth` — feature-level composition  

This is how modules stay readable as apps grow.

### Challenge

Implement the three helpers so the log is `100% 0% 80%`.
