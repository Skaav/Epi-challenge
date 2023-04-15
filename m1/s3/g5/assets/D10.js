/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i 
  valori 10 e 20.
*/
{
  let sum = 10 + 20;
  console.log(sum);
}

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 
  (deve essere generato dinamicamente a ogni esecuzione).
*/
let random = Math.floor(Math.random() * 21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti 
  proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
let me = {
  name: 'Paolo',
  surname: 'Scavino',
  age: 27,
}
console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà 
  "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto 
  precedentemente creato un array chiamato "skills", contenente i linguaggi di 
  programmazione che conosci.
*/
me.skills = ['JavaScript', 'Java'];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" 
  contenuto nell'oggetto "me".
*/
me.skills.push('PhP');
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento 
  dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop()
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
function dice() {
  return Math.floor(Math.random() * 6) + 1;
}
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e 
  ritorna il maggiore dei due.
*/
function whoIsBigger(a, b) {
  if (a > b) {
    return console.log(a)
  } else {
    return console.log(b);
  }
}
whoIsBigger(10, 6);
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e 
  ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
function splitMe(str) {
  let splitted = str.split(" ");
  return splitted;
}
console.log(splitMe("I love coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, 
  altrimenti la deve ritornare senza l'ultimo.
*/
function deleteOne(str, a) {
  if (a === true) {
    return str.slice(1);
  } else {
    return str.slice(0, -1);
  }
}
console.log(deleteOne('Gianni e Pinotto', true));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e 
  la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
function onlyLetters(stringa) {
  return stringa.replace(/[0-9]/g, '');
}
console.log(onlyLetters('awddyaw67de3d'));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e 
  ritorna true se la stringa è un valido indirizzo email.
*/
function isThisAnEmail(email) {
  let regexp = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  let validEmail = regexp.test(email);
  return validEmail;
}
console.log(isThisAnEmail('paolo.scavino@gmail.com'));
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
let giorni = [
  'domenica',
  'lunedì',
  'martedì',
  'mercoledì',
  'giovedì',
  'venerdì',
  'sabato',
]
function whatDayIsIt() {
  let now = new Date();
  let weekDay = now.getDay();
  return giorni[weekDay];
}
console.log(whatDayIsIt());
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, 
  e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le 
  invocazioni di dice(). L'oggetto ritornato deve anche contenere una proprietà "values", 
  contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
function rollTheDices(n) {
  let sum = 0;
  let values = [];
  for (i = 0; i < n; i++) {
    let tiroDado = dice();
    sum += tiroDado;
    values.push(tiroDado);
  }
  let threeDice = {
    sum: sum,
    values: values,
  }
  return threeDice;
}
console.log(rollTheDices(3));
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna 
  il numero di giorni trascorsi da tale data.
*/
function howManyDays(data) {
  let now = new Date().getTime();
  let dif = now - new Date(data).getTime();
  let days = Math.floor(dif / (1000 * 60 * 60 * 24));
  return days;
}
let days = howManyDays('2023-04-10');
console.log(days);


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo 
  compleanno, falso negli altri casi.
*/
function isTodayMyBirthday(giorno, mese) {
  let today = new Date();
  let monthDay = today.getMonth() + 1;
  let day = today.getDate();
  if (day === giorno && monthDay === mese) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}
isTodayMyBirthday(16, 12);
// Arrays & Oggetti
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
// se non dice necessariamente for loop possiamo usare tutto

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; 
  deve ritornare l'oggetto fornito dopo aver eliminato in esso la proprietà chiamata come la 
  stringa passata come secondo parametro.
*/
let oggetto = {
  nome: 'Francesco',
  cognome: 'Bianchi',
  vita: '27',
  morte: 'no',
}
function deleteProp(obj, str) {
  delete obj[str]
  return obj;
}
console.log(deleteProp(oggetto, 'morte'));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" 
  fornito.
*/
let newestMovie = movies.reduce(function (p, g) {
  if (p.Year < g.Year) {
    return g;
  } else {
    return p;
  }
})
console.log(newestMovie);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array
  "movies" fornito.
*/
function nFilm() {
  return movies.length;
}
console.log(nFilm());

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita
  dei film contenuti nell'array "movies" fornito.
*/
function onlyTheYears() {
  let annoUscita = [];
  for (i = 0; i < movies.length; i++)
    annoUscita.push(movies[i].Year);
  return annoUscita;
}
console.log(onlyTheYears());

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel
  millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInLastMillennium() {
  let filmVecchi = [];
  movies.filter(function (p) {
    if (p.Year < '2000') {
      filmVecchi.push(p);
    }
  }
  )
  return filmVecchi;
}
console.log(onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono
  stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sAnni() {
  return movies.reduce(function (p, c) {
    return p + Number(c.Year);
  }, 0)
}
console.log(sAnni());

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i
  film nell'array "movies" fornito che la contengono nel titolo.
*/
function searchByTitle(str) {
  let risultato = [];
  movies.forEach((p) => {
    if (p.Title.includes(str)) {
      risultato.push(p.Title)
    }
  });
  return risultato;
}
console.log(searchByTitle('The'));
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un
  oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa
  fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
function searchAndDivide(str) {
  let big = {
    match: [],
    unmatch: [],
  }
  movies.forEach((p) => {
    if (p.Title.includes(str)) {
      big.match.push(p.Title)
    } else {
      big.unmatch.push(p.Title)
    }
  });
  return big;
}
console.log(searchAndDivide('The'));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array
  "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
function removeIndex(num) {
  movies.splice(num, 1);
  return movies;
}
console.log(removeIndex(1));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function isContainer() {
  let conteier = document.querySelector('#container');
}
console.log(isContainer());

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function selectAllTd() {
  let td = document.querySelectorAll('td');
  console.log(td);
}
selectAllTd();

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td>
  all'interno della pagina.
*/
function stampaTd() {
  let allTd = document.querySelectorAll('td')
  let b = [];
  for (let i of allTd) {
    let contentTd = i.textContent;
    console.log(contentTd);
  }
}
stampaTd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della
  pagina.
*/
function backgroundColor() {
  let allLinks = document.querySelectorAll('a');
  for (i = 0; i < allLinks.length; i++) {
    allLinks[i].style.backgroundColor = "red";
  }
}
backgroundColor();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function addList() {
  let list = document.querySelector('#myList');
  let nuovaLista = document.createElement('li');
  nuovaLista.textContent = 'Nuovo elemento';
  list.appendChild(nuovaLista);
}
addList();
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function removeList() {
  document.querySelector('#myList').remove()
}
removeList();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function addClass() {
  let allTr = document.querySelectorAll('tr');
  for (let i of allTr) {
    allTr.classList.add('test')
  }
}
addClass();


// [EXTRA] JS Avanzato
//aberelli stampati in console
/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo 
  albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero 
  di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il 
  numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

