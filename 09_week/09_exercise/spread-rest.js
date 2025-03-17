'use strict';

/* Task 1: Fix the Array Copying  
Fix the function to correctly clone `fruits`.  
*/

const fruits = ["apple", "banana", "orange"];

// Fix this
const newFruits = fruits;
newFruits.push("grape");

console.log(fruits); // Expected: ["apple", "banana", "orange"]

/* Task 2: Fix Array Merging  
Correctly merge the `oldTasks` and `newTasks` arrays.  
*/

const oldTasks = ["task1", "task2"];
const newTasks = ["task3", "task4"];

// Fix this
const allTasks = oldTasks + newTasks;

console.log(allTasks); // Expected: ["task1", "task2", "task3", "task4"]

/* Task 3: Fix Object Merging  
Combine `defaultSettings` with `userSettings`.  
*/

const defaultSettings = { theme: "light", fontSize: 14 };
const userSettings = { theme: "dark" };

// Fix this
const finalSettings = { defaultSettings, userSettings };

console.log(finalSettings); // Expected: { theme: "dark", fontSize: 14 }

/* Task 4: Fix Function with Rest Operator  
Make the function work for any number of numbers.  
*/

function sumNumbers(a, b) {
    return a + b;
}

console.log(sumNumbers(2, 3, 4)); // Expected: 9

/* Task 5: Fix Rest Destructuring  
Extract `title` and collect the remaining properties into `extraInfo`.  
*/

const book = { title: "JavaScript Guide", pages: 400, author: "John Doe" };

// Fix this
const { title } = book;
console.log(title, extraInfo); // Expected: "JavaScript Guide", { pages: 400, author: "John Doe" }

/* Task 6: Create Your Own
Write a function that receives multiple numbers and returns their average using the rest operator.
Test with: `average(10, 20, 30, 40)`. Expected output: `25`.
*/

// Write your code here
