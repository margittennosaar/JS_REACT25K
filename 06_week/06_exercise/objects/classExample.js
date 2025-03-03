class Person {
  // Constructor initializes instance properties
  constructor(name, tel, city) {
    this.name = name;
    this.tel = tel;
    this.city = city;
  }
}

// Creating instances (each has its own separate data)
const alice = new Person("Alice", "0451234567", "New York");
const bob = new Person("Bob", "0451234568", "London");

console.log("Alice's phone number: ", alice.tel);
console.log("Bob's city: ", bob.city);
