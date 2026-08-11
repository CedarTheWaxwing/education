---
lessonId: js-m10-capstone-utility
title: Capstone utility
order: 60
difficulty: intermediate
module: Module 10 — Modules & Clean Code
objectives:
  - Combine strings, arrays, objects, and helpers
  - Normalize messy input
  - Produce a clean summary object
starterCode: |
  function summarize(lines) {
    // lines is an array of raw strings like "  alice, 3 "
    // 1) trim each line, skip empties
    // 2) split on comma into name + count text
    // 3) name -> trimmed lowercase
    // 4) count -> Number(countText); skip row if NaN
    // Return { entries: number of valid rows, total: sum of counts, names: sorted unique names join(",") }
  }

  const raw = ["  Alice, 3 ", "", "bob,2", "Alice, 1", "bad,x"]
  // Don't change the line below
  const result = summarize(raw)
  console.log(result.entries, result.total, result.names)
expectedOutput: "3 6 alice,bob"
---

## Put the toolkit together

This mini utility touches most of the course:

- string cleanup (`trim`, `split`, case)  
- parsing numbers + skipping bad rows  
- arrays + objects accumulation  
- sorting unique names  

There’s no single “clever” trick — just clear steps. That’s what junior/mid day-one work looks like.

### Challenge

Implement `summarize` so the log is `3 6 alice,bob`.
