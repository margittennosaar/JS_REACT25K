# JavaScript Writing Rules

Writing clean, maintainable, and error-free JavaScript code is essential for all developers. Following these rules will help improve readability, reduce bugs, and ensure your code is easier to understand and maintain over time.

## Use "use strict"

Start your JavaScript files or functions with `"use strict"`. This helps enforce stricter error handling and catches common coding mistakes early.

- **Catches quiet errors**: Some errors that might pass silently in normal mode (like assigning to undeclared variables) will be caught in strict mode.
- **Improves performance**: JavaScript engines can optimize code better when strict mode is used.
- **Prepares for the future**: Strict mode prevents the use of some features that might become problematic with future JavaScript versions.

```javascript
"use strict";
function exampleFunction() {
  // Strict mode applies here
}
```

## Adopt Consistent Formatting

- **Indentation:** Use **2 or 4 spaces** for indentation consistently. Never mix spaces and tabs.
- **Semicolons:** Always **use semicolons** to terminate statements to avoid unexpected errors.
- **Curly Braces:** Always use curly braces `{}` for blocks, even for single-line `if`, `for`, or `while` statements. This prevents potential errors when modifying code later.

```javascript
if (isActive) {
  console.log("Active");
}
```

## Declare Variables Properly

- Use `let` and `const`: 
  - `let` for variables that may change.
  - `const` for variables that should not change.
- Avoid using `var` to prevent scoping issues.

```javascript
const MAX_USERS = 100;
let currentUser = "Alice";
```

## Naming Conventions

Using clear and consistent names for variables, functions, and classes makes your code more understandable.

- **Variables and Functions:** Use `camelCase` (e.g., `userName`, `getUserInfo`).
- **Classes:** Use `PascalCase` (e.g., `Car`, `UserProfile`).
- **Constants:** Use `UPPER_CASE` (e.g., `MAX_VALUE`).

```javascript
const MAX_SPEED = 120; // Constant
function calculateDistance() { // camelCase function
  // Function logic
}
class Vehicle { // PascalCase class
  // Class logic
}
```

## Functions Best Practices

- **Single Responsibility:** A function should ideally do only one thing.
- **Limit Parameters:** If a function requires multiple parameters, consider passing them as an object.
- **Use Arrow Functions** where appropriate for cleaner syntax.

```javascript
const getUserInfo = (user) => {
  return `${user.name} is ${user.age} years old.`;
};
```

## Commenting and Documentation

- **Write meaningful comments:** Avoid redundant comments like `// Add 1 to x` for `x += 1;`.
- **Use JSDoc** for larger projects to generate documentation automatically.

```javascript
/**
 * Calculate the area of a rectangle.
 * @param {number} width
 * @param {number} height
 * @returns {number} Area of the rectangle
 */
function calculateArea(width, height) {
  return width * height;
}
```

## Error Handling

- **Use `try...catch` for Error Handling:** Prevent the entire application from crashing.
- **Throw Custom Errors:** When necessary, throw custom error messages to make debugging easier.

```javascript
try {
  let result = riskyOperation();
} catch (error) {
  console.error('An error occurred:', error.message);
}
```

## Use ESLint

- **Automate Code Checking:** Use ESLint to check your code for style violations, syntax errors, and other mistakes.
- **Integrate with Code Editor:** Most editors (like VSCode) support ESLint for real-time feedback.

## Avoid Magic Numbers and Strings

Magic numbers or strings are unexplained values in code. Instead, assign them to descriptive constants.

```javascript
// Bad practice
let discount = total * 0.2; // What does 0.2 mean?

// Good practice
const DISCOUNT_RATE = 0.2;
let discount = total * DISCOUNT_RATE;
```

## Refactor Regularly and Keep Learning

- **Refactor often:** Improve code structure, readability, and performance as your project evolves.
- **Stay updated:** The JavaScript ecosystem evolves rapidly. Keep learning about new features and best practices.

```javascript
// Before refactoring
function add(a, b) { return a + b; }

// After refactoring (arrow function)
const add = (a, b) => a + b;
```

Following these best practices will help you write **cleaner, more maintainable JavaScript code**, leading to fewer bugs and better performance!

