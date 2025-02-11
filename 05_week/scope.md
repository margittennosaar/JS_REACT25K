# Scope in JavaScript  

Scope determines **where variables and functions can be accessed** in your code. It helps **organize** variables and **prevent conflicts** between them.

## Types of Scope in JavaScript

### Global Scope  

Variables declared **outside of any function or block** are in the **global scope**. They can be accessed **anywhere** in the script.

```js
let globalVar = "I am a global variable";

function exampleFunction() {
  console.log(globalVar); // Accessible here
}

console.log(globalVar); // Also accessible here
```

**Best practice:** Avoid too many global variables to **prevent conflicts** between functions.

### Local (Function) Scope

Variables declared **inside a function** are in the **local scope**. They **cannot** be accessed outside that function.

```js
function exampleFunction() {
  let localVar = "I am a local variable";
  console.log(localVar); // Accessible here
}

console.log(localVar); // ❌ Uncaught ReferenceError: localVar is not defined
```

**Best practice:** Use **local variables** whenever possible to **limit their effect** and make your code more manageable.

### Block Scope (`let` and `const`) 

Variables declared **inside `{}` (blocks)** using `let` or `const` are **only available inside that block**.

```js
if (true) {
  let blockVar = "I am block-scoped";
  console.log(blockVar); // Accessible here
}

console.log(blockVar); // ❌ Uncaught ReferenceError: blockVar is not defined
```

**Best practice:** Use **`let` and `const`** for variables inside loops, conditionals, and functions.

### Var and Function Scope (`var`)  

Before **ES6**, `var` was the primary way to declare variables. It does **not** have block scope, only function scope.

```js
if (true) {
  var testVar = "I am function-scoped";
}
console.log(testVar); // ✅ Accessible here
```

**Best practice:** Avoid `var` and use `let` or `const` instead to **prevent unexpected behavior**.

## Hoisting in JavaScript  

**Hoisting** is JavaScript's behavior of moving **variable and function declarations** to the **top of their scope** before execution.

```js
console.log(hoistedVar); // undefined
var hoistedVar = "I am hoisted";
```

Even though `hoistedVar` is **declared later**, JavaScript **moves the declaration** to the top, but not the assignment.

### Hoisting with `let` and `const`  

Unlike `var`, `let` and `const` **do not** get initialized during hoisting. **Accessing them before declaration causes an error**.

```js
console.log(myLetVar); // ❌ ReferenceError: Cannot access 'myLetVar' before initialization
let myLetVar = 5;
```

**Best practice:** Always declare variables at the top of their scope to avoid hoisting confusion.

## The Temporal Dead Zone (TDZ)  

The **TDZ** is the period **between entering a scope** and **declaring a variable**.

```js
console.log(myVar); // ❌ ReferenceError: Cannot access 'myVar' before initialization
let myVar = "Declared later";
```

**Best practice:** Always **declare variables at the beginning** of their scope.

## Function Scope vs Block Scope

### Function Scope (With `var`)  

```js
function testFunction() {
  var functionVar = "I exist inside this function";
}

console.log(functionVar); // ❌ ReferenceError: functionVar is not defined
```

### Block Scope (With `let` and `const`)  

```js
if (true) {
  let blockScoped = "I exist only inside this block";
}
console.log(blockScoped); // ❌ ReferenceError: blockScoped is not defined
```

## Best practices for Scope

**Use `let` and `const`** instead of `var` to avoid unexpected behavior.  
**Declare variables at the beginning** of their scope.  
**Keep functions and variables inside their smallest possible scope**.  
**Limit global variables** to avoid conflicts between functions.  

## Common mistakes

Using a global variable when a local one is needed

```js
let count = 0; // ❌ Global, could be overwritten accidentally

function increase() {
  count++; // A better way is to use a local variable
}
```

Use a **local variable inside a function**  
```js
function increase() {
  let count = 0;
  count++;
  console.log(count);
}
```