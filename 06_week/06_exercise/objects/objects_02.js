/* Task 1
Create an object `weather` that contains properties `temperature`, `humidity`, and `condition` (e.g., "Sunny", "Rainy").
Write a function that logs `"Take an umbrella!"` if it's rainy.
*/

// Your code here
const weather = {
  temperature: 20,
  humidity: 50,
  condition: "Sunny",
};

function logWeatherStatus(weather) {
  if (weather.condition === "Rainy") {
    console.log("Take an umbrella!");
  }
}

/* Task 2
Define an object named `shoppingCart` that contains an array of items.
Each item has `name`, `price`, and `quantity`.
Write a function that calculates the total price of all items in the cart.
*/

// Your code here
const shoppingCart = {
  items: [
    { name: "Apple", price: 1, quantity: 10 },
    { name: "Banana", price: 2, quantity: 5 },
  ],
};

function calculateTotalPrice(shoppingCart) {
  return shoppingCart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

console.log("Total price: ", calculateTotalPrice(shoppingCart));

/* Task 3
Create an array of objects named `restaurants`, each with properties `name`, `cuisineType`, and `rating`.
Write a function that returns only the restaurants with a rating of 4 or higher.
*/

// Your code here
const restaurants = [
  { name: "Restaurant 1", cuisineType: "Italian", rating: 4 },
  { name: "Restaurant 2", cuisineType: "Japanese", rating: 3 },
  { name: "Restaurant 3", cuisineType: "Mexican", rating: 5 },
];

function filterRestaurants(restaurants) {
  return restaurants.filter((restaurant) => restaurant.rating >= 4);
}

console.log("Filtered restaurants: ", filterRestaurants(restaurants));

/* Task 4
Define an object named `bankAccount` with properties `accountHolder`, `balance`, and `transactions` (an array of numbers).
Write a function that calculates the total balance after all transactions.
*/

// Your code here
const bankAccount = {
  accountHolder: "John",
  balance: 1000,
  transactions: [100, -50, 200, -100],
};

function calculateTotalBalance(bankAccount) {
  return bankAccount.transactions.reduce(
    (total, transaction) => total + transaction,
    bankAccount.balance
  );
}

console.log("Total balance: ", calculateTotalBalance(bankAccount));

/* Task 5
Create an array `students` where each student has `name`, `scores` (array of numbers), and `averageScore` (initially null).
Write a function that calculates and updates each student's `averageScore`.
*/

// Your code here

const students = [
  { name: "John", scores: [85, 90, 88], averageScore: null },
  { name: "Jane", scores: [95, 88, 92], averageScore: null },
  { name: "Jim", scores: [78, 85, 89], averageScore: null },
];

function calculateAverageScore(students) {
  return students.map((student) => {
    const averageScore =
      student.scores.reduce((total, score) => total + score, 0) /
      student.scores.length;
    return { ...student, averageScore };
  });
}

console.log("Students with average scores: ", calculateAverageScore(students));

/* Task 6
Define an array named `courses`, each containing `courseName`, `instructor`, and `studentsEnrolled`.
Write a function that logs the course name of any course with more than 30 students.
*/

// Your code here
const courses = [
  { courseName: "Math", instructor: "John", studentsEnrolled: 35 },
  { courseName: "Science", instructor: "Jane", studentsEnrolled: 28 },
  { courseName: "History", instructor: "Jim", studentsEnrolled: 42 },
];

function logCourseName(courses) {
  return courses.filter((course) => course.studentsEnrolled > 30);
}

console.log("Courses with more than 30 students: ", logCourseName(courses));

/* Task 7
Create an object `pet` with properties `species`, `name`, and `isVaccinated`.
Write a function that returns `"Vaccination required"` if the pet is not vaccinated.
*/

// Your code here

const pet = {
  species: "Dog",
  name: "Rex",
  isVaccinated: true,
};

function logPetStatus(pet) {
  if (!pet.isVaccinated) {
    console.log("Vaccination required");
  }
}

/* Task 8
Define an object named `city` with properties `name`, `population`, and `landmark`.
Write a function that logs `"This is a big city!"` if the population exceeds 1,000,000.
*/

// Your code here

const city = {
  name: "New York",
  population: 8400000,
  landmark: "Statue of Liberty",
};

function logCityStatus(city) {
  if (city.population > 1000000) {
    console.log("This is a big city!");
  }
}

/* Task 9
Create an array `transactions`, where each transaction is an object with `type` ("credit" or "debit") and `amount`.
Write a function that calculates the total balance after processing all transactions.
*/

// Your code here

const transactions = [
  { type: "credit", amount: 100 },
  { type: "debit", amount: 50 },
  { type: "credit", amount: 200 },
  { type: "debit", amount: 100 },
];

function calculateTotalBalance(transactions) {
  return transactions.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );
}

console.log("Total balance: ", calculateTotalBalance(transactions));

/* Task 10
Define an object named `foxPack` containing an array of fox objects.
Each fox has `name`, `age`, and `furColor`.
Write a function that filters out only the foxes that are younger than 2.
*/

// Your code here

const foxPack = {
  foxes: [
    { name: "Fox 1", age: 1, furColor: "Red" },
    { name: "Fox 2", age: 3, furColor: "Blue" },
    { name: "Fox 3", age: 0.5, furColor: "White" },
  ],
};

function filterFoxes(foxPack) {
  return foxPack.foxes.filter((fox) => fox.age < 2);
}

console.log("Foxes younger than 2: ", filterFoxes(foxPack));
/* Task 11
Create an object `gameCharacter` with properties `name`, `level`, `health`, and `inventory` (an array).
Write a function that logs all items in the character’s inventory.
*/

// Your code here

const gameCharacter = {
  name: "John",
  level: 1,
  health: 100,
  inventory: ["Sword", "Shield", "Potion"],
};

function logInventory(gameCharacter) {
  console.log("Inventory: ", gameCharacter.inventory);
}

logInventory(gameCharacter);

/* Task 12
Define an array named `employees`, where each employee has a `name`, `role`, and `workingHours`.
Write a function that finds and logs employees who work more than 40 hours.
*/

// Your code here

const employees = [
  { name: "John", role: "Manager", workingHours: 45 },
  { name: "Jane", role: "Developer", workingHours: 35 },
  { name: "Jim", role: "Designer", workingHours: 40 },
];

function findEmployees(employees) {
  return employees.filter((employee) => employee.workingHours > 40);
}

console.log(
  "Employees who work more than 40 hours: ",
  findEmployees(employees)
);

/* Task 13
Create an array `musicAlbums` where each album has `title`, `artist`, and `releaseYear`.
Write a function that logs albums released after 2000.
*/

// Your code here

const musicAlbums = [
  { title: "Album 1", artist: "Artist 1", releaseYear: 2005 },
  { title: "Album 2", artist: "Artist 2", releaseYear: 2010 },
  { title: "Album 3", artist: "Artist 3", releaseYear: 2015 },
];

function logMusicAlbums(musicAlbums) {
  return musicAlbums.filter((album) => album.releaseYear > 2000);
}

console.log("Music albums released after 2000: ", logMusicAlbums(musicAlbums));

/* Task 14
Define an array named `cars`, each containing `brand`, `model`, and `horsepower`.
Write a function that finds and returns the car with the highest horsepower.
*/

// Your code here

const cars = [
  { brand: "Toyota", model: "Corolla", horsepower: 120 },
  { brand: "Ford", model: "Mustang", horsepower: 300 },
  { brand: "Chevrolet", model: "Camaro", horsepower: 400 },
];

function findCarWithHighestHorsepower(cars) {
  return cars.reduce((max, car) => Math.max(max, car.horsepower), 0);
}

console.log(
  "Car with highest horsepower: ",
  findCarWithHighestHorsepower(cars)
);

/* Task 15
Create an array of `airports`, where each airport has `name`, `country`, and `flightsPerDay`.
Write a function that finds the airport with the most daily flights.
*/

// Your code here

const airports = [
  { name: "Airport 1", country: "USA", flightsPerDay: 100 },
  { name: "Airport 2", country: "Canada", flightsPerDay: 150 },
  { name: "Airport 3", country: "Mexico", flightsPerDay: 200 },
];

function findAirportWithMostFlights(airports) {
  return airports.reduce(
    (max, airport) => Math.max(max, airport.flightsPerDay),
    0
  );
}

console.log(
  "Airport with most daily flights: ",
  findAirportWithMostFlights(airports)
);
