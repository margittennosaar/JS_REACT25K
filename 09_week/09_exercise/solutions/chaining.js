'use strict';

const { log } = require("async");

/* Task 1: Fix the User Data Processing  
Correct the method chaining so it filters active users and returns uppercase names.  
*/

const users = [
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false },
    { id: 3, name: "Charlie", active: true },
];

const activeUsers = users.filter(user => user.active).map(user => user.name.toUpperCase());

console.log(activeUsers); // Expected: ["ALICE", "CHARLIE"]

/* Task 2: Fix Optional Chaining  
Safely access `email` inside `user.details`.  
*/

const userData = { details: { contact: { email: "jane@example.com" } } };

console.log(userData?.details?.contact?.email); // Expected: "jane@example.com"

/* Task 3: Fix Optional Chaining with Arrays  
Safely access the second element in `orders` if it exists.  
*/

const customer = { orders: [1001, 1002] };

console.log(customer?.orders?.[3]); // Expected: undefined

/* Task 4: Fix Chained String Manipulation  
Extract initials from a full name using chaining.  
*/

const fullName = "John Doe";

const initials = fullName.split(" ").map(word => word[0]).join(" ").toUpperCase();

console.log(initials);

// Expected: "J D"

/* Task 5: Create Your Own
Write a function that receives a `products` array and returns a
comma-separated string of **only in-stock** product names, **uppercase**.
Test with:
`[{ name: "Laptop", stock: 10 }, { name: "Phone", stock: 0 }]`
Expected output: `"LAPTOP"`
*/

const testProducts = [
    { name: "Laptop", stock: 10 },
    { name: "Phone", stock: 0 },
    { name: "Tablet", stock: 5 }
];

function getInStockProducts(products) {
    return products
        .filter(product => product.stock > 0)
        .map(product => product.name.toUpperCase())
        .join(", ");
}

console.log(getInStockProducts(testProducts));


