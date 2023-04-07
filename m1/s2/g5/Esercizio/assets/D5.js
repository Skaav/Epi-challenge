/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log(pets)

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort()
console.log(pets)

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.reverse()
console.log(pets)

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
pets.shift()   //se dovessi aggiungere un elemento alla prima posizione useresti .unshift('elemento')
pets.push('redfish') //se dovessi togliere un elemento dalla posizione finale .pop()
console.log(pets)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
/*cars.forEach(function (car) {
  car.licensePlate = "";
})
console.log(cars)*/

for (i = 0; i < cars.length; i++) {
  cars[i].licensePlate = "AABBCC" + i;
}

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
let b = {
  brand: 'Fiat',
  model: 'Panda',
  color: 'white',
  trims: ['oldstyle', 'titanium'],
}
cars.push(b)

for (y = 0; y < cars.length; y++) {
  cars[y].trims.pop();
}
console.log(cars)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
for (u = 0; u < cars.length; u++) {
  justTrims.push(cars[u].trims[0])
}
console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (z = 0; z < cars.length; z++) {
  if (cars[z].color.startsWith('b')) {
    console.log('Fizz');
  } else {
    console.log('Buzz');
  }
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
let o = 0
while (numericArray[o] !== 32) {
  console.log(numericArray[o]);
  o++;
}
/*let o = 0
for (o = 0; o < numericArray.length; o++) {
  do {
    console.log(numericArray[o]);
    o++;
  }
  while (numericArray[o] !== 32) {
    break;
  }
}*/

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle 
    posizioni di ogni carattere all'interno dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"]
let p = 0
for (p = 0; p < charactersArray.length; p++)
  switch (charactersArray[p]) {
    case 'a':
      console.log(1);
      break;
    case 'b':
      console.log(2);
      break;
    case 'c':
      console.log(3);
      break;
    case 'd':
      console.log(4);
      break;
    case 'e':
      console.log(5);
      break;
    case 'f':
      console.log(6);
      break;
    case 'g':
      console.log(7);
      break;
    case 'h':
      console.log(8);
      break;
    case 'i':
      console.log(9);
      break;
    case 'j':
      console.log(10);
      break;
    case 'k':
      console.log(11);
      break;
    case 'l':
      console.log(12);
      break;
    case 'm':
      console.log(13);
      break;
    case 'n':
      console.log(14);
      break;
    case 'o':
      console.log(15);
      break;
    case 'p':
      console.log(16);
      break;
    case 'q':
      console.log(17);
      break;
    case 'r':
      console.log(18);
      break;
    case 's':
      console.log(19);
      break;
    case 't':
      console.log(20);
      break;
    case 'u':
      console.log(21);
      break;
    case 'v':
      console.log(22);
      break;
    case 'w':
      console.log(23);
      break;
    case 'x':
      console.log(24);
      break;
    case 'y':
      console.log(25);
      break;
    case 'z':
      console.log(26);
      break;
    default:
      console.log(charactersArray[p]);
      break;
  }
