"use strict";

/* Task 1: Try-Catch for Debugging
/*
Task: Wrap the code inside a `try-catch` block.
      Simulate an error by calling an undefined function.

Test cases:
task1(); // Should log: "Error caught: function is not defined"
*/

function task1() {
  try {
    undefinedFunction();
  } catch (error) {
    console.log("Error caught: function is not defined");
  }
}

/* Task 2: Handle ReferenceError
/*
Task: Try using a variable that hasn’t been declared.
      Catch the error and log: "ReferenceError caught: [error message]"

Test cases:
task2(); // Should log: "ReferenceError caught: myVariable is not defined"
*/

function task2() {
  try {
    console.log(myVariable);
  } catch (error) {
    console.log("ReferenceError caught: myVariable is not defined");
  }
}

/* Task 3: Using Finally
/*
Task: Simulate an error, log it, and ensure "Task completed." always runs.

Test cases:
task3(); // Should log an error message and "Task completed."
*/

function task3() {
  try {
    throw new Error("Error message");
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Task completed.");
  }
}

/* Task 4: Fix JSON Parsing Error
/*
Task: Try to parse invalid JSON. If it fails, log `"Invalid JSON format"`

Test cases:
parseJSON('{"name": "Alice", "age": 25}'); // Should return object
parseJSON("Invalid JSON text"); // Should log an error and return null
*/

function parseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.log("Invalid JSON format");
  }
}

console.log(parseJSON('{"name": "Alice", "age": 25}'));
console.log(parseJSON("Invalid JSON text"));

/* Task 5: Throwing a Custom Error
/*
Task: If age is below 18, throw `"You must be at least 18."`

Test cases:
checkAge(20); // Should log: "Access granted."
checkAge(16); // Should log: "Error: You must be at least 18."
*/

function checkAge(age) {
  try {
    if (age < 18) {
      throw new Error("You must be at least 18.");
    }
    console.log("Access granted.");
  } catch (error) {
    console.log(error.message);
  }
}

checkAge(20);
checkAge(16);

/* Task 6: Save and Retrieve from LocalStorage
/*
Task: Write a function to store an object in **LocalStorage**.
      Then retrieve it and handle errors if JSON is invalid.

Test cases:
saveUser({ name: "Alice", age: 25 }); // Should save user
console.log(getUser()); // Should return saved user object
localStorage.setItem("user", "{ invalid JSON }"); // Simulate corruption
console.log(getUser()); // Should log an error and return null
*/

function saveUser(user) {
  try {
    localStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    console.log("Error saving user");
  }
}

function getUser() {
  try {
    return JSON.parse(localStorage.getItem("user"));
  } catch (error) {
    console.log("Error retrieving user");
  }
}

saveUser({ name: "Alice", age: 25 });
console.log(getUser());

/* Task 7: Check if Object Property Exists
/*
Task: If a property is missing, log `"Property not found"`

Test cases:
checkProperty({ name: "Bob", age: 30 }, "name"); // Should log value
checkProperty({ name: "Bob", age: 30 }, "email"); // Should log "Property not found"
*/

function checkProperty(obj, key) {
  try {
    return obj[key];
  } catch (error) {
    console.log("Property not found");
  }
}

/* Task 8: Fetch API Error Handling
/*
Task: Use `fetch()` to get data, handle errors properly.

Test cases:
fetchData("https://jsonplaceholder.typicode.com/users"); // Should log API data
fetchData("invalid-url"); // Should log network error
*/

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Network error");
  }
}

console.log(fetchData("https://jsonplaceholder.typicode.com/users"));
console.log(fetchData("invalid-url"));

/* Task 9: Fix a URI Error
/*
Task: Try decoding a broken URI string.

Test cases:
task9("https%3A%2F%2Fexample.com"); // Should decode properly
task9("%"); // Should log URIError
*/

function checkBrokenURI(malformedURI) {
  try {
    return decodeURIComponent(malformedURI);
  } catch (error) {
    console.log("URIError");
  }
}

console.log(checkBrokenURI("https%3A%2F%2Fexample.com"));
console.log(checkBrokenURI("%"));

/* Task 10: Clear LocalStorage
/*
Task: Ensure LocalStorage is cleared safely.

Test cases:
clearStorage(); // Should log "LocalStorage cleared."
*/

function clearStorage() {
  try {
    localStorage.clear();
  } catch (error) {
    console.log("Error clearing LocalStorage");
  }
}

clearStorage();
