# JavaScript Curriculum

Topic-outline parity with a Coddy-shaped fundamentals ladder. Lessons are original (MDN + language knowledge). Interview drills are deferred.

## Module 1 — Getting Started & Variables
1. What is JavaScript? — run code, read output
2. Variables with `let` and `const`
3. Primitive types (string, number, boolean, null, undefined)
4. Naming rules and common mistakes
5. Template literals
6. Type coercion basics (`Number`, `String`, `Boolean`)

## Module 2 — Operators
1. Arithmetic operators
2. Assignment operators
3. Comparison operators
4. Logical operators
5. Operator precedence
6. Increment / decrement pitfalls

## Module 3 — Control Flow
1. `if` / `else`
2. Ternary operator
3. `switch`
4. `for` loops
5. `while` / `do...while`
6. `break` and `continue`

## Module 4 — Functions
1. Function declarations
2. Parameters and return values
3. Function expressions & arrow functions
4. Scope and closures (intro)
5. Default parameters
6. Early return style

## Module 5 — Arrays
1. Create and access arrays
2. Push / pop / shift / unshift
3. Looping arrays
4. `map` / `filter` / `find`
5. `reduce` (intro)
6. Spread and shallow copy pitfalls

## Module 6 — Objects
1. Object literals
2. Access and update properties
3. Methods and `this` (surface level)
4. Nested objects
5. Destructuring
6. Object vs Map (when to care)

## Module 7 — Strings & Working with Data
1. String methods (slice, includes, split, trim)
2. Char frequency / counting patterns
3. Parsing numbers from strings
4. JSON parse / stringify
5. Dates (basics)
6. Error handling with try/catch

## Module 8 — Async JavaScript
1. Callbacks (why they exist)
2. Promises
3. `async` / `await`
4. Error handling in async code
5. `fetch` basics
6. Event loop (sync → microtasks → macrotasks)

## Module 9 — DOM & Browser (light)
1. Selecting elements
2. Events and listeners
3. Updating the DOM
4. Forms and validation (basic)
5. Event delegation
6. Accessibility checkpoints (labels, focus)

## Module 10 — Modules & Clean Code
1. ES modules (`import` / `export`)
2. Organizing helpers
3. Reading stack traces
4. Writing small tests for a function
5. Big-O intuition for everyday code
6. Capstone utility: combine prior skills

---

### Generation rules (for agents)
- One Markdown lesson per item, under `content/courses/javascript/modules/<nn>-<slug>/`
- Frontmatter must include: `lessonId`, `title`, `order`, `difficulty`, `starterCode`, `expectedOutput`, `objectives`, `module`
  (`lessonId` is ours — Nuxt Content already uses `id` for the file path)
- Grade via `console.log` output match (exact after trim)
- Teach in the body; keep challenges small and progressive
