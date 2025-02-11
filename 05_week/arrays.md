# **Arrays in JavaScript**  

Arrays are **ordered collections of data** that let you **store multiple values** in a single variable. They help manage lists efficiently and provide many built-in methods for common tasks.  

## Creating Arrays

Arrays can hold **any type of data**, including numbers, strings, and even other arrays.  

```js
const emptyArray = []; // An empty array
const numbers = [10, 20, 30, 40]; // Numbers
const fruits = ["apple", "banana", "cherry"]; // Strings
const mixed = [42, "hello", true, null]; // Mixed types
const nestedArray = [[1, 2], [3, 4]]; // Arrays inside arrays
```

## Adding and Removing Elements  

### Add to the array  

#### `.push()` – Add to the end  
```js
let groceries = ["bread", "milk"];
groceries.push("eggs"); 
console.log(groceries); // ["bread", "milk", "eggs"]
```

#### `.unshift()` – Add to the beginning  
```js
groceries.unshift("butter");
console.log(groceries); // ["butter", "bread", "milk", "eggs"]
```

### Remove from the array  

#### `.pop()` – Remove last element  
```js
groceries.pop();
console.log(groceries); // ["butter", "bread", "milk"]
```

#### `.shift()` – Remove first element  
```js
groceries.shift();
console.log(groceries); // ["bread", "milk"]
```

### Modify at a specific position  

#### `.splice()` – Add, remove, or replace elements

```js
let colors = ["red", "blue", "yellow"];
colors.splice(1, 1, "green"); // Remove 1 item at index 1, insert "green"
console.log(colors); // ["red", "green", "yellow"]
```

#### `.slice()` – Extract part of an array without modifying it  

```js
let animals = ["dog", "cat", "elephant", "lion"];
let someAnimals = animals.slice(1, 3); // Extracts from index 1 to 2
console.log(someAnimals); // ["cat", "elephant"]
console.log(animals); // ["dog", "cat", "elephant", "lion"] (Unchanged)
```

## Merging and expanding Arrays

#### `.concat()` – Merge two or more arrays  
```js
const firstHalf = ["a", "b", "c"];
const secondHalf = ["d", "e", "f"];
const combined = firstHalf.concat(secondHalf);
console.log(combined); // ["a", "b", "c", "d", "e", "f"]
```

#### `.map()` – Create a new array without modifying the original  
```js
const prices = [10, 20, 30];
const discountedPrices = prices.map(price => price * 0.9); // 10% discount
console.log(discountedPrices); // [9, 18, 27]
console.log(prices); // [10, 20, 30] (Unchanged)
```

## Searching in Arrays  

#### Find the position of a value  

#### `.indexOf()` – First occurrence  
```js
const numbers = [5, 10, 15, 10];
console.log(numbers.indexOf(10)); // 1
```

#### `.lastIndexOf()` – Last occurrence  
```js
console.log(numbers.lastIndexOf(10)); // 3
```

#### Find the first matching value  

#### `.find()` – Get the first item that matches a condition  
```js
const ages = [12, 18, 22, 15];
const firstAdult = ages.find(age => age >= 18);
console.log(firstAdult); // 18
```

#### Find all matching values  

#### `.filter()` – Get all items that match a condition  
```js
const adults = ages.filter(age => age >= 18);
console.log(adults); // [18, 22]
```

## Transforming Arrays  

#### Apply a function to every element  

#### `.map()` – Modify each item without changing the original  
```js
const names = ["alice", "bob", "charlie"];
const capitalizedNames = names.map(name => name.toUpperCase());
console.log(capitalizedNames); // ["ALICE", "BOB", "CHARLIE"]
```

#### Combine elements into a single value  

#### `.reduce()` – Sum all values in an array  
```js
const bills = [20, 30, 50];
const total = bills.reduce((sum, bill) => sum + bill, 0);
console.log(total); // 100
```

## Iterating Over Arrays  

#### Loop through elements using `.forEach()`  
```js
const tasks = ["clean", "cook", "shop"];
tasks.forEach(task => console.log(`Task: ${task}`));
```

#### Loop through an array with a `for` loop  
```js
for (let i = 0; i < tasks.length; i++) {
  console.log(tasks[i]);
}
```

#### Simpler loop using `for...of`  
```js
for (const task of tasks) {
  console.log(task);
}
```

## Checking Conditions in Arrays  

#### Check if at least one element meets a condition  

#### `.some()` – Does at least one item match?  
```js
const scores = [45, 80, 90, 60];
const hasHighScore = scores.some(score => score >= 85);
console.log(hasHighScore); // true
```

#### Check if all elements meet a condition  

#### `.every()` – Do all items match?  
```js
const allPassed = scores.every(score => score >= 50);
console.log(allPassed); // false
```

## Common mistakes and best practices  

### Forgetting `return` in `.map()` and `.filter()`
```js
// ❌ Incorrect
const doubled = numbers.map(num => { num * 2; }); 
console.log(doubled); // [undefined, undefined, undefined]

// ✅ Correct
const correctDoubled = numbers.map(num => num * 2);
console.log(correctDoubled); // [10, 20, 30, 40]
```

### Misusing `.splice()` when `.slice()` is better
```js
// ❌ Splice (modifies the original)
const original = ["apple", "banana", "cherry"];
const removed = original.splice(1, 1); // Removes "banana"
console.log(original); // ["apple", "cherry"]

// ✅ Slice (keeps original unchanged)
const copy = original.slice(0, 2);
console.log(copy); // ["apple", "cherry"]
```

### Mutating vs. Non-Mutating Methods
- **Mutating methods** (modify the original array): `.push()`, `.pop()`, `.splice()`, `.shift()`, `.unshift()`
- **Non-mutating methods** (return a new array): `.map()`, `.filter()`, `.reduce()`

**Best Practice:** Prefer **non-mutating** methods unless modifying the original array is required.