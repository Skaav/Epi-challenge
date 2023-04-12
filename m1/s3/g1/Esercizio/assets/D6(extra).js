// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") 
 e per ogni elemento stampa in console se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/
{
    function giveMeRandom(n) {
        let raddo = [];
        for (let g = 0; g < n; g++) {
            raddo.push(Math.floor(Math.random() * 10) + 1);
        }
        return raddo;
    }

    function checkArray(raddo) {
        let somma = 0;
        for (let k of raddo) {
            if (k > 5) {
                console.log(`${k} è maggiore di 5.`);
                somma += k;
            } else {
                console.log(`${k} è minore di 5`);
            }
        }
        console.log(`La somma totale è ${somma}`);
    }
    checkArray(giveMeRandom(5));

}

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". 
 Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio 
 (tenendo conto delle quantità di ogni oggetto).
*/
let shoppingCart = [
    {
        price: 5,
        name: 'Brum',
        id: '7584',
        quantity: 2,
    },
    {
        price: 10,
        name: 'Puff',
        id: '693',
        quantity: 3,
    },
    {
        price: 8,
        name: 'Sip',
        id: '1574',
        quantity: 5,
    },
    {
        price: 6,
        name: 'Mit',
        id: '111222333',
        quantity: 3,
    },
];

function shoppingCartTotal(oggetti) {
    let totale = 0;
    for (let k of shoppingCart) {
        totale += k.price * k.quantity;
    }
    console.log(`Totale da pagare: ${totale}!`);
}
shoppingCartTotal(shoppingCart);

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". 
 Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, 
 lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
function addToShoppingCart(object) {
    shoppingCart.push(object)
}


/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* potremmo usare read us per trovare il prezzo più grande */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. 
La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", 
 e torna un valore booleano. La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/
let now = new Date();
let nextMonth = new Date();
nextMonth.setMonth(nextMonth.getMonth() + 1);

if (now < nextMonth) {

}
/* il mese 0 è Gennaio  */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
