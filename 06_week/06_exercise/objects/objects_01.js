/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`.
Add at least two book objects to this collection.
*/

// Your code here
const library = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
  },
  { title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960 },
];

/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

// Your code here
console.log(library[0].title);
library[1].yearPublished = 1961;
console.log(library[1]);

/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here
library[0].genres = ["Drama", "Tragedy"];
library[0]["isAvailable"] = true;
console.log(library[0]);

/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here
function Book(title, author, yearPublished, genres) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
  this.genres = genres;
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, [
  "Drama",
  "Tragedy",
]);
library.push({ book1 });
console.log(library);

/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here
function createBook(title, author, yearPublished, genres) {
  const book = new Book(title, author, yearPublished, genres);
  return book;
}

const createdBook = createBook("Different Title", "Different Author", 1960, [
  "Drama",
  "Tragedy",
]);
library.push({ ...createdBook });
console.log("createdBook in Library: ", library);

/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/

// Your code here
// Converts to JSON String
const jsonLibrary = JSON.stringify(library);
console.log("JSON String: ", jsonLibrary);

// Convert back to Javascript Object
const jsonObject = JSON.parse(jsonLibrary);
console.log("JSON Object: ", jsonObject);
console.log("First book title: ", jsonObject[0].title);

/* Task 7
Create an array named `students`, where each student has a `name`, `age`, and `grade`.
Log the name of any student who has a grade higher than 90.
*/

// Your code here
const students = [
  { name: "John", age: 20, grade: 95 },
  { name: "Jane", age: 21, grade: 88 },
  { name: "Jim", age: 22, grade: 92 },
];
console.log(students[0].name);

/* Task 8
Define an object named `car` with properties for `brand`, `model`, `year`, and `isElectric`.
Use a function to check if the car is electric. If it is, log `"This car is eco-friendly!"`. Otherwise, log `"This car runs on fuel."`
*/

// Your code here
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  isElectric: false,
};

/* Task 9
Create a `movies` array where each movie is an object with properties for `title`, `director`, and `rating`.
Write a loop that logs all movie titles with a rating higher than 8.
*/

// Your code here
const movies = [
  { title: "The Dark Knight", director: "Christopher Nolan", rating: 9.0 },
  { title: "Inception", director: "Christopher Nolan", rating: 8.8 },
  { title: "The Matrix", director: "The Wachowskis", rating: 8.7 },
];

/* Task 10
Write a function `findOldestCar` that takes an array of car objects and returns the car with the earliest `year`.
*/

// Your code here
function findOldestCar(cars) {
  return cars.reduce((oldest, current) => {
    return current.year < oldest.year ? current : oldest;
  });
}

/* Task 11
Define a `userProfiles` array containing objects representing users.
Each user should have a `username`, `email`, and `isAdmin` property.
Write a function that filters and returns only the users who are administrators.
*/

// Your code here
const userProfiles = [
  { username: "admin", email: "admin@example.com", isAdmin: true },
  { username: "user", email: "user@example.com", isAdmin: false },
  { username: "moderator", email: "moderator@example.com", isAdmin: true },
];

function filterAdmins(userProfiles) {
  return userProfiles.filter((user) => user.isAdmin);
}

/* Task 12
Define an array named `orders`, where each order contains `orderId`, `customerName`, `totalAmount`, and `status` (either "pending" or "completed").
Write a function that returns only the completed orders.
*/

// Your code here
const orders = [
  { orderId: 1, customerName: "John", totalAmount: 100, status: "pending" },
  { orderId: 2, customerName: "Jane", totalAmount: 200, status: "completed" },
  { orderId: 3, customerName: "Jim", totalAmount: 300, status: "pending" },
];

function filterCompletedOrders(orders) {
  return orders.filter((order) => order.status === "completed");
}

/* Task 13
Create an object named `smartphone` with properties for `brand`, `model`, `batteryLife`, and `is5GEnabled`.
Write a function that logs `"This phone supports 5G!"` if `is5GEnabled` is `true`, otherwise logs `"This phone does not support 5G."`
*/

// Your code here
const smartphone = {
  brand: "Samsung",
  model: "Galaxy S20",
  batteryLife: 4000,
  is5GEnabled: true,
};

function logPhoneStatus(smartphone) {
  if (smartphone.is5GEnabled) {
    console.log("This phone supports 5G!");
  } else {
    console.log("This phone does not support 5G.");
  }
}

/* Task 14
Define an object named `fox` with properties `name`, `age`, and `habitat`.
Write a function that logs `"This fox is young"` if its age is under 3, `"This fox is an adult"` if 3 or older.
*/

// Your code here
const fox = {
  name: "Fox",
  age: 2,
  habitat: "Forest",
};

function logFoxStatus(fox) {
  if (fox.age < 3) {
    console.log("This fox is young");
  } else {
    console.log("This fox is an adult");
  }
}

logFoxStatus(fox);

/* Task 15
Define an array named `employees`, where each employee has `name`, `position`, and `salary`.
Write a function that calculates the total salary of all employees in the company.
*/

// Your code here
const employees = [
  { name: "John", position: "Manager", salary: 50000 },
  { name: "Jane", position: "Developer", salary: 60000 },
  { name: "Jim", position: "Designer", salary: 70000 },
];

function calculateTotalSalary(employees) {
  return employees.reduce((total, employee) => total + employee.salary, 0);
}

console.log("Total salary: ", calculateTotalSalary(employees));
