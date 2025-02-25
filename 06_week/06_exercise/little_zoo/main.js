const animalSimple = ["Fox", "Eagle", "Shark", "Wolf", "Panda", "Tiger", "Dolphin", "Owl", "Kangaroo", "Unicorn"];

const animalList = document.querySelector('#animalList');
const addAnimalButton = document.querySelector('#addAnimal');
const searchInput = document.querySelector('#searchAnimal');
const sortButton = document.querySelector('#sortAnimals');

const displayAnimals = (animalArray) => {
    animalList.innerHTML = '';
    for (const animal of animalArray) {
        const li = document.createElement('li');
        li.textContent = (`${animal}`);
        animalList.appendChild(li);
    }
};

const addAnimal = () => {
    const nameInput = document.querySelector('#newAnimalName').value.trim();
    animalSimple.push(nameInput);
    displayAnimals(animalSimple);
    document.querySelector('#newAnimalName').value = '';
};

const searchAnimal = () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredAnimals = animalSimple.filter(animal => animal.toLowerCase().includes(searchText));

    displayAnimals(filteredAnimals);
};

const sortAnimal = () => {
    animalSimple.sort();
    displayAnimals(animalSimple);
};

addAnimalButton.addEventListener('click', addAnimal);
searchInput.addEventListener('input', searchAnimal);
sortButton.addEventListener('click', sortAnimal);


displayAnimals(animalSimple);