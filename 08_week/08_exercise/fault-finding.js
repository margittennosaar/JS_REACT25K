/* 
- Each function is broken—it does not return the expected result.
- Use console.log(), breakpoints, and careful analysis to debug.
- Test each function using the provided test cases.
- Fix the errors and validate the expected output.
*/


'use strict';

/* Task 1: Fix the Greeting Function  
Should return "Hello, [name]!".  
If no name is provided, return "Hello, guest!".  
*/

function greet(name) {
    return "Hello " + Name;
}

// Debug & Test
console.log(greet("Alice")); // Expected: "Hello, Alice!"
console.log(greet()); // Expected: "Hello, guest!"

/* Task 2: Fix the Price Calculation  
Should multiply `price` by `quantity`.  
If `quantity` is missing, default to `1`.  
*/

function calculatePrice(price, quantity) {
    return price + quantity;
}

// Debug & Test
console.log(calculatePrice(10, 2)); // Expected: 20
console.log(calculatePrice(5)); // Expected: 5

/* Task 3: Fix Even Number Checker  
Should return `true` if number is even, otherwise `false`.  
*/

function isEven(num) {
    return num % 2 = 0;
}

// Debug & Test
console.log(isEven(4)); // Expected: true
console.log(isEven(7)); // Expected: false

/* Task 4: Fix Loop Off-by-One Error  
Should log numbers from 1 to 5.  
*/

function countToFive() {
    for (let i = 1; i <= 5; i--) {
        console.log(i);
    }
}

// Debug & Test
countToFive(); // Expected: 1, 2, 3, 4, 5

/* Task 5: Fix Array Indexing Issue  
Should return the last item of the array.  
*/

function getLastItem(arr) {
    return arr[arr.length + 1];
}

// Debug & Test
console.log(getLastItem(["apple", "banana", "cherry"])); // Expected: "cherry"
console.log(getLastItem([1, 2, 3])); // Expected: 3

/* Task 6: Debug JSON Parsing  
Should parse a JSON string into an object.  
*/

function parseJson(jsonString) {
    return JSON.stringify(jsonString);
}

// Debug & Test
console.log(parseJson('{"name": "Alice", "age": 25}')); // Expected: { name: "Alice", age: 25 }
console.log(parseJson("{ name: 'Alice', age: 25 }")); // Expected: Error (invalid JSON)

/* Task 7: Debug Object Property Access  
Should return the user’s email from an object.  
*/

function getEmail(user) {
    return user.mail;
}

// Debug & Test
console.log(getEmail({ name: "Alice", email: "alice@example.com" })); // Expected: "alice@example.com"

/* Task 8: Debug Nested Function Calls  
Should return the square of a number after doubling it.  
*/

function double(num) {
    return num + num;
}

function square(num) {
    return num * 2;
}

function processNumber(num) {
    return double(square(num));
}

// Debug & Test
console.log(processNumber(3)); // Expected: 36
console.log(processNumber(4)); // Expected: 64

/* Task 9: Fix Sorting Algorithm  
Should return an array of numbers sorted in ascending order.  
*/

function sortNumbers(arr) {
    return arr.sort((a, b) => b - a);
}

// Debug & Test
console.log(sortNumbers([5, 3, 9, 1])); // Expected: [1, 3, 5, 9]
console.log(sortNumbers([20, 100, 3, 50])); // Expected: [3, 20, 50, 100]

/* Task 10: Debug Nested Data Processing  
Should return a list of full names from an array of user objects.  
*/

const users = [
    { firstName: "Alice", lastName: "Smith" },
    { firstName: "Bob", lastName: "Jones" },
];

function getFullNames(users) {
    return users.map(user => user.firstName + " " + user.LastName);
}

// Debug & Test
console.log(getFullNames(users)); // Expected: ["Alice Smith", "Bob Jones"]

/* Task 11: Debug Object Data Transformation  
Should return an array of user names from a nested data structure.  
*/

const userData = {
    users: [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
    ],
};

function getUserNames(data) {
    return data.user.map(user => user.name);
}

// Debug & Test
console.log(getUserNames(userData)); // Expected: ["Alice", "Bob"]

/* Task 12: Debug Complex Function  
Should filter products under a given price from an array of products.  
*/

const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Mouse", price: 50 },
];

function filterProducts(products, maxPrice) {
    return products.filter(product => product.price < maxPrice);
}

// Debug & Test
console.log(filterProducts(products, 1000)); // Expected: ["Phone", "Mouse"]

/* Task 13: Debug LocalStorage Data Saving  
Should save a user object to LocalStorage and retrieve it.  
*/

function saveUser(user) {
    localStorage.setItem("user", user);
}

function getUser() {
    return localStorage.getItem("user");
}

// Debug & Test
saveUser({ name: "Alice", age: 25 });
console.log(getUser()); // Expected: { name: "Alice", age: 25 }

/* Task 14: Debug a Loop that Processes Array  
Should return an array of squared numbers.  
*/

function squareNumbers(arr) {
    let squaredArr = [];
    for (let i = 0; i <= arr.length; i++) {
        squaredArr.push(arr[i] * arr[i]);
    }
    return squaredArr;
}

// Debug & Test
console.log(squareNumbers([1, 2, 3, 4])); // Expected: [1, 4, 9, 16]

/* Task 15: Debug Nested Object Handling  
Should return an array of students who scored above 80.  
*/

const students = [
    { name: "Alice", score: 90 },
    { name: "Bob", score: 75 },
    { name: "Charlie", score: 85 },
];

function getTopStudents(studentList) {
    return studentList.map(student => {
        if (student.score > 80) {
            return student.name;
        }
    });
}

// Debug & Test
console.log(getTopStudents(students)); // Expected: ["Alice", "Charlie"]
