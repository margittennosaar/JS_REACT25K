# Scope in JavaScript  

Scope determines **where variables and functions can be accessed** in your code. JavaScript has **different types of scope**, which define whether a variable is **globally available** or **restricted to a specific part of the code**.

## **Types of Scope in JavaScript**  

### 1. Global Scope  
A variable declared **outside any function or block** is in the **global scope**. It can be accessed from **anywhere** in the program.

```js
let globalVar = 'I am a global variable';

function showGlobalVar() {
  console.log(globalVar); // ✅ Accessible inside the function
}

console.log(globalVar); // ✅ Accessible outside the function

showGlobalVar();
```

- Global variables **stay in memory** as long as the program runs.
- They **can be accessed from anywhere**, but **too many global variables** can cause conflicts.

### 2. Local (Function) Scope  
A variable declared **inside a function** is in **local scope**. It **cannot** be accessed **outside the function**.

```js
function showLocalVar() {
  let localVar = 'I am a local variable';
  console.log(localVar); // ✅ Accessible inside the function
}

showLocalVar();

console.log(localVar); // ❌ ReferenceError: localVar is not defined
```

- **Local variables exist only inside the function** where they are declared.
- **They prevent accidental overwrites** of variables used elsewhere.

### 3. Block Scope (`let` & `const`)  
Variables declared using **`let`** or **`const`** are **block-scoped**, meaning they **only exist inside the block** (e.g., inside `{}` in loops, if statements, etc.).

```js
if (true) {
  let blockVar = 'I am a block-scoped variable';
  console.log(blockVar); // ✅ Accessible inside the block
}

console.log(blockVar); // ❌ ReferenceError: blockVar is not defined
```

- Prevents **accidental modifications** of variables outside the block.  
- Encourages **better variable scoping** in loops and conditionals.

## **Hoisting in JavaScript**  

Hoisting is JavaScript’s behavior of **moving variable and function declarations to the top of their scope before execution**.  

### Hoisting with `var` (Avoid This!)
Variables declared with `var` are **hoisted but not initialized**, meaning they exist but hold `undefined` until assigned a value.

```js
console.log(hoistedVar); // ✅ Output: undefined (not an error, but confusing)
var hoistedVar = 'I am hoisted';

console.log(hoistedFunction()); // ✅ Works fine

function hoistedFunction() {
  return 'I am hoisted';
}
```
- The function `hoistedFunction()` **is moved to the top**, so it works even before it appears in the code.
- The variable `hoistedVar` **exists but is undefined** until it is assigned a value.

**Why is this a problem?**  
- Using `var` **can lead to unexpected behavior**, as variables can be used before they are assigned.
- Instead, **use `let` or `const`** to avoid hoisting issues.

### Hoisting with `let` and `const` (Safer!)
With `let` and `const`, **hoisting still happens**, but the variables **are not initialized**, leading to a **ReferenceError** if accessed before declaration.

```js
console.log(myLetVar); // ❌ ReferenceError: Cannot access 'myLetVar' before initialization
let myLetVar = 5;

console.log(myConstVar); // ❌ ReferenceError: Cannot access 'myConstVar' before initialization
const myConstVar = 10;
```
- The variables **exist** in memory but are in the **Temporal Dead Zone (TDZ)** until the line where they are declared.
- Trying to access them before declaration **throws an error**.

## What is the Temporal Dead Zone (TDZ)?  

The **Temporal Dead Zone (TDZ)** is the period **between** the start of a function or block **and** the variable's actual declaration.  

```js
console.log(value); // ❌ ReferenceError: Cannot access 'value' before initialization
let value = 'Hello!';
```

- The variable **exists in memory but cannot be accessed** until it is assigned a value.
- This prevents using variables **before they are ready**.

## **Best practices for Scope in JavaScript**  

### Prefer `let` and `const` Over `var`
- `let` and `const` **prevent accidental hoisting issues**.  
- `const` ensures **the variable cannot be reassigned**, making code safer.  

### Declare Variables at the Start of Their Scope
- Keep **global variables to a minimum**.  
- Declare variables **inside the blocks or functions** where they are needed.  

### Understand Function Scope vs. Block Scope
- Use **function scope** for variables needed **only inside a function**.  
- Use **block scope (`let` & `const`)** to prevent variable leaks outside loops and conditions.  

## Common Pitfalls with Scope  

**Mistake 1: Using `var` and expecting Block scope**

```js
if (true) {
  var testVar = 'I am using var';
}
console.log(testVar); // ✅ Output: "I am using var" (Unexpected)
```

**Problem:** `var` is function-scoped, not block-scoped, so it **leaks outside the block**.

**Fix:** Use `let` instead:

```js
if (true) {
  let testVar = 'Now I am block-scoped';
}
console.log(testVar); // ❌ ReferenceError (Correct behavior)
```

**Mistake 2: Assuming Hoisting Works the Same for `let` and `var`**

```js
console.log(myVar); // ✅ Output: undefined
var myVar = 10;

console.log(myLet); // ❌ ReferenceError
let myLet = 20;
```

**Fix:** Always declare variables **before using them**.

**Mistake 3: Modifying Global Variables Accidentally**

```js
let counter = 10;

function increment() {
  counter++;
}

increment();
console.log(counter); // ✅ Output: 11 (Modified globally)
```

**Problem:** The function **modifies a global variable**, which can cause issues if other parts of the code rely on `counter`.  

**Fix:** Use **local scope** inside the function:

```js
function increment() {
  let counter = 0; // Local variable
  counter++;
  console.log(counter); // ✅ Output: 1 (No global impact)
}
increment();
console.log(counter); // ✅ Output: 10 (Global variable unchanged)
```

## Notes
✔ Global scope makes variables available everywhere but should be used sparingly.  
✔ Local scope keeps variables inside a function and prevents accidental changes.  
✔ Block scope (`let`, `const`) ensures variables are used only where needed.  
✔ Hoisting moves declarations to the top, but `let` and `const` avoid the issues caused by `var`.  
✔ Understanding scope helps prevent common JavaScript errors and improves code maintainability.  