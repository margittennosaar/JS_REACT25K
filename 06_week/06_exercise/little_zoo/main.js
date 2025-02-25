/* const animalSimple = ["Fox", "Eagle", "Shark", "Wolf", "Panda", "Tiger", "Dolphin", "Owl", "Kangaroo", "Unicorn"]; */

const animals = [
    { name: 'Fox', type: 'Mammal', age: 4, color: 'White' },
    { name: 'Eagle', type: 'Bird', age: 5, color: 'Brown' },
    { name: 'Cobra', type: 'Reptile', age: 3, color: 'Black' },
    { name: 'Frog', type: 'Amphibian', age: 2, color: 'Green' },
    { name: 'Shark', type: 'Fish', age: 6, color: 'Gray' },
    { name: 'Tiger', type: 'Mammal', age: 7, color: 'Orange' },
    { name: 'Parrot', type: 'Bird', age: 4, color: 'Red' },
    { name: 'Turtle', type: 'Reptile', age: 10, color: 'Green' },
    { name: 'Salamander', type: 'Amphibian', age: 3, color: 'Black' },
    { name: 'Goldfish', type: 'Fish', age: 1, color: 'Gold' }
];

const animalList = document.querySelector('#animalList');
const addAnimalButton = document.querySelector('#addAnimal');
const searchInput = document.querySelector('#searchAnimal');
const sortButton = document.querySelector('#sortAnimals');
const filterType = document.querySelector('#filterType');

const displayAnimals = (animalArray) => {
    animalList.innerHTML = '';
    for (const animal of animalArray) {
        const li = document.createElement('li');
        li.textContent = (`${animal.name} (${animal.type}) ${animal.age}, ${animal.color}`);
        animalList.appendChild(li);
    }
};

const addAnimal = () => {
    const nameInput = document.querySelector('#newAnimalName').value.trim();
    animals.push(nameInput);
    displayAnimals(animals);
    document.querySelector('#newAnimalName').value = '';
};

const searchAnimal = () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredAnimals = animals.filter(animal => animal.name.toLowerCase().includes(searchText));

    displayAnimals(filteredAnimals);
};

const filterByTypeAnimal = () => {
    const selectedType = filterType.value;

    if (selectedType === "All") {
        displayAnimals(animals);
    } else {
        const filteredAnimals = animals.filter(animal => animal.type === selectedType);
        displayAnimals(filteredAnimals);
    }
};

const sortAnimal = () => {
    animals.sort();
    displayAnimals(animals);
};

addAnimalButton.addEventListener('click', addAnimal);
searchInput.addEventListener('input', searchAnimal);
sortButton.addEventListener('click', sortAnimal);
filterType.addEventListener('change', filterByTypeAnimal);

displayAnimals(animals);