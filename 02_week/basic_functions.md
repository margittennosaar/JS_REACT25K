# Basic functions

JavaScript functions are reusable blocks of code designed to perform specific tasks.
They help in organizing your code, making it more modular, readable, and maintainable.

```js
function sum(x, y) {
  return x + y;
}
```

- The `sum` function is declared using the `function` keyword followed by the function name sum, and it takes two parameters `x` and `y`.
- The function adds `x` and `y` together and returns the result using the `return` keyword.

## Calling (invoking) a function

```js
sum(1, 3);  // Returns 4
sum(2, 5);  // Returns 7
```
Each time you call `sum` with different arguments, the function will execute the code inside it and return the corresponding result.


## Returning the result

In JavaScript, you have to return from inside functions. If you forget to write `return`, your function will return `undefined`.
The `return` keyword will also quit/exit the function.

```js
function sum(x, y) {
  return x + y;
  console.log('Hello World'); // this will NEVER run
}
```
In the example above, the `console.log` statement will not execute because the function exits as soon as the `return` statement is executed.

## Implicit return

Implicit return is a shorthand feature in arrow functions where the return keyword is omitted. Instead, the function automatically returns the result of a single expression.

**Explicit Return:** The return keyword is written explicitly.
```js 
const add = (a, b) => {
  return a + b;
};
console.log(add(2, 3)); // 5 
```

**Implicit Return:** Remove the return keyword and curly braces.

```js
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

Use implicit return for short and simple functions where readability is not compromised.

```js
const square = x => x * x;
console.log(square(4)); // 16

const isEven = num => num % 2 === 0;
console.log(isEven(4)); // true 
```

### Objects with Implicit Return

If you want to return an object using implicit return, wrap it in parentheses to avoid confusion with the function body:

```js
const getUser = () => ({ name: "John", age: 30 });
console.log(getUser()); // { name: "John", age: 30 }
Without parentheses, JavaScript interprets the {} as the function body:
```

```js
const getUser = () => { name: "John", age: 30 }; // ❌ SyntaxError
```

- Use implicit return for short, single-expression functions.
- Always prioritize readability and clarity over using implicit return.
- Wrap objects in parentheses when using implicit return.
