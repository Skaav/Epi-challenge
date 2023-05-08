// esercizio 1
class CreateUser {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
    static ageDiff(a, b) {
        if (a.age > b.age) {
            return a.firstName + " is older than " + b.firstName;
        } else {
            return b.firstName + " is older than " + a.firstName;
        }
    }
}
let x = new User("Mario", "Rossi", 38, "Tivoli");
let y = new User("Carlo", "Verdi", 89, "Ostia");


// let users = [
//     new CreateUser('Franco', 'Rossi', '20', 'Roma'),
//     new CreateUser('Pippo', 'Bianchi', '35', 'Venezia'),
//     new CreateUser('Francesco', 'Ghiari', '85', 'Palermo'),
//     new CreateUser('Gianni', 'Del Pero', '99', 'Torino'),
// ];

// let theOldest = users.reduce(function (p, g) {
//     if (p.age < g.age) {
//         return g;
//     } else {
//         return p;
//     }
// })
// console.log(theOldest.firstName + " è il più vecchio");




// esercizio 2

const pets = [];

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    haveSameOwner(otherPet) {
        return this.ownerName === otherPet.ownerName;
    }
}

const createForm = document.querySelector('#petForm')
createForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let petName = document.querySelector('#petName').value;
    let ownerName = document.querySelector('#petOwner').value;
    let species = document.querySelector('#petSpecies').value;
    let breed = document.querySelector('#petBreed').value;
    let pet = new Pet(petName, ownerName, species, breed);
    pets.push(pet)

    const petListElement = document.querySelector('#petList');
    const newPetListItem = document.createElement('li');
    newPetListItem.classList.add('list-group-item');
    newPetListItem.textContent = `Pet Name: ${pet.petName}, Owner Name: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
    petListElement.appendChild(newPetListItem);

    for (let i = 0; i < pets.length - 1; i++) {
        const otherPet = pets[i];
        if (pet.haveSameOwner(otherPet)) {
            alert(`Warning: ${pet.petName} and ${pet.petName} have the same owner!`);
        }
    }

    createForm.reset();
});