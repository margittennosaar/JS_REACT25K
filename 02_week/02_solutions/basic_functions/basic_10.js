/* Create a function named cleanAndTransform that:
Takes one parameter, str.
Trims whitespace, converts the string to lowercase, and replaces "powerful" with "amazing".
Returns the transformed string.
Call the function with " JavaScript is powerful! ".
Print the result using console.log(). 

*/Here are the ** solutions ** for all tasks with multiple possible correct approaches:

---

### ** Task 1: Create a Function to Add Two Numbers **
    ```javascript
// Solution 1: Standard function declaration
function add(a, b) {
  return a + b;
}

// Solution 2: Function expression
const addExpression = function (a, b) {
  return a + b;
};

// Solution 3: Arrow function
const addArrow = (a, b) => a + b;

// Test the function
console.log(add(10, 5));
console.log(addExpression(10, 5));
console.log(addArrow(10, 5));
```;

---

### ** Task 2: Function to Check if a Number is Even **
    ```javascript
// Solution 1: Standard function
function isEven(num) {
  return num % 2 === 0;
}

// Solution 2: Arrow function with implicit return
const isEvenArrow = (num) => num % 2 === 0;

// Test the function
console.log(isEven(4)); // true
console.log(isEvenArrow(7)); // false
```;

---

### ** Task 3: Function to Find the Length of a String **
    ```javascript
// Solution 1: Standard function
function getLength(str) {
  return str.length;
}

// Solution 2: Arrow function with implicit return
const getLengthArrow = (str) => str.length;

// Test the function
console.log(getLength("JavaScript")); // 10
console.log(getLengthArrow("JavaScript")); // 10
```;

---

### ** Task 4: Function to Capitalize a String **
    ```javascript
// Solution 1: Standard function
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

// Solution 2: Arrow function
const capitalizeArrow = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();

// Test the function
console.log(capitalize("javascript")); // JavaScript
console.log(capitalizeArrow("javascript")); // JavaScript
```;

---

### ** Task 5: Function to Generate a Random Number **
    ```javascript
// Solution 1: Standard function
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Solution 2: Arrow function
const generateRandomNumberArrow = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Test the function
console.log(generateRandomNumber(1, 10)); // Random number between 1 and 10
console.log(generateRandomNumberArrow(1, 10)); // Random number between 1 and 10
```;

---

### ** Task 6: Function to Replace a Word in a Sentence **
    ```javascript
// Solution 1: Standard function
function replaceWord(sentence, oldWord, newWord) {
  return sentence.replace(oldWord, newWord);
}

// Solution 2: Arrow function
const replaceWordArrow = (sentence, oldWord, newWord) => sentence.replace(oldWord, newWord);

// Test the function
console.log(replaceWord("I like apples.", "apples", "bananas")); // I like bananas.
console.log(replaceWordArrow("I like apples.", "apples", "bananas")); // I like bananas.
```;

---

### ** Task 7: Function to Check if a String Contains a Word **
    ```javascript
// Solution 1: Standard function
function containsWord(sentence, word) {
  return sentence.includes(word);
}

// Solution 2: Arrow function with implicit return
const containsWordArrow = (sentence, word) => sentence.includes(word);

// Test the function
console.log(containsWord("JavaScript is fun!", "fun")); // true
console.log(containsWordArrow("JavaScript is fun!", "fun")); // true
```;

---

### ** Task 8: Function to Round a Number **
    ```javascript
// Solution 1: Standard function
function roundNumber(num, precision) {
  return parseFloat(num.toFixed(precision));
}

// Solution 2: Arrow function
const roundNumberArrow = (num, precision) => parseFloat(num.toFixed(precision));

// Test the function
console.log(roundNumber(19.56789, 2)); // 19.57
console.log(roundNumberArrow(19.56789, 0)); // 20
```;

---

### ** Task 9: Function to Find the Maximum Number **
    ```javascript
// Solution 1: Standard function
function findMax(a, b, c) {
  return Math.max(a, b, c);
}

// Solution 2: Arrow function
const findMaxArrow = (a, b, c) => Math.max(a, b, c);

// Test the function
console.log(findMax(12, 7, 20)); // 20
console.log(findMaxArrow(12, 7, 20)); // 20
```;

---

### ** Task 10: Function to Trim and Transform a String **
    ```javascript
// Solution 1: Standard function
function cleanAndTransform(str) {
  return str.trim().toLowerCase().replace("powerful", "amazing");
}

// Solution 2: Arrow function
const cleanAndTransformArrow = (str) =>
  str.trim().toLowerCase().replace("powerful", "amazing");

// Test the function
console.log(cleanAndTransform("   JavaScript is powerful!   ")); // javascript is amazing!
console.log(cleanAndTransformArrow("   JavaScript is powerful!   ")); // javascript is amazing!
```;

---

### Usage
    - Combine these solutions into one file, test them, and let students compare different approaches.;
- Let me know if you need these solutions consolidated into a single file!;