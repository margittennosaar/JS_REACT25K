# Objects

JavaScript objects allow you to store **collections of data** and model **real-world entities**. Objects group related data (**properties**) and functions (**methods**) together, making data management more efficient.

## Creating objects

There are multiple ways to create objects in JavaScript.

### Object literals

The easiest way to create an object is using **object literals**.

```js
const animal = {
  name: 'Fox',
  species: 'Canine',
  age: 4
};
```

### Constructor functions

A **constructor function** lets you create multiple objects with the same structure.

```js
function Animal(name, species, age) {
  this.name = name;
  this.species = species;
  this.age = age;
}

const animal1 = new Animal('Wolf', 'Canine', 5);
```

### Using ES6 class syntax

JavaScript introduced **classes** in ES6 as a more structured way to create objects.

```js
class Animal {
  constructor(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
  }
}

const animal2 = new Animal('Deer', 'Herbivore', 2);
```

---

## Accessing and modifying properties

You can **access properties** in two ways:  
- **Dot notation** → The most common and easiest to read.  
- **Bracket notation** → Needed when property names have special characters or are stored in variables.

### Dot notation

```js
console.log(animal.name); // Outputs: Fox
animal.age = 5; // Updates the age
```

### Bracket notation

```js
const property = 'species';
console.log(animal[property]); // Outputs: Canine

animal['age'] = 6;
console.log(animal['age']); // Outputs: 6
```

---

## Adding and removing properties

Objects are **dynamic**, meaning you can add or remove properties anytime.

### Adding properties

```js
animal.habitat = 'Forest';
console.log(animal.habitat); // Outputs: Forest
```

### Removing properties

Use the `delete` operator to remove a property.

```js
delete animal.age;
console.log(animal.age); // Outputs: undefined
```

---

## Object methods

An **object method** is a function stored inside an object.

```js
const animal = {
  name: 'Fox',
  speak: function () {
    console.log(`I am a ${this.name}!`);
  }
};

animal.speak(); // Outputs: I am a Fox!
```

### Method shorthand (ES6)

```js
const animal = {
  name: 'Fox',
  speak() {
    console.log(`I am a ${this.name}!`);
  }
};

animal.speak(); // Outputs: I am a Fox!
```

---

## Objects inside arrays

Objects can be stored inside arrays, making it easier to manage **multiple items**.

```js
const zoo = [
  { name: 'Fox', species: 'Canine' },
  { name: 'Eagle', species: 'Bird' },
  { name: 'Bear', species: 'Mammal' }
];

console.log(zoo[1].name); // Outputs: Eagle
```

---

## The `this` keyword

The **`this`** keyword refers to the object that calls the function.

```js
const animal = {
  name: 'Fox',
  speak() {
    console.log(this); // Refers to the animal object
  }
};

animal.speak();
```

---

## Summary

- **Dot notation** is the easiest way to access and modify properties.  
- **Bracket notation** is useful when property names are stored as variables.  
- **Methods** are functions stored inside objects, using **`this`** to access object properties.  
- **Objects can be inside arrays**, allowing structured data.  

---
