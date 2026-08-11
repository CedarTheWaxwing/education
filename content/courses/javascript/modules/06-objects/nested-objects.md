---
lessonId: js-m6-nested-objects
title: Nested objects
order: 34
difficulty: beginner
module: Module 6 — Objects
objectives:
  - Read nested properties safely in simple cases
  - Update a nested field
  - Log a deep value
starterCode: |
  const profile = {
    name: "Kai",
    address: { city: "Austin", zip: "78701" },
  }
  // Change profile.address.city to "Dallas"
  // Create city alias from the nested property
  // Don't change the line below
  console.log(city, profile.address.zip)
expectedOutput: "Dallas 78701"
---

## Objects inside objects

```js
profile.address.city = "Dallas"
const city = profile.address.city
```

Real apps nest data often (API JSON). Later you’ll learn optional chaining (`profile.address?.city`) for missing levels — here the structure is guaranteed.

### Challenge

Update the city and log `Dallas` with the zip.
