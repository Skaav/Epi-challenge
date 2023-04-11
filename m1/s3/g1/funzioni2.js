//esempio pratico, in questo modo possiamo, lanciando la funzione scrivere
function scrivi(str) {
    let testo = document.getElementById("testo");
    testo.innerHTML += str;
}
scrivi('Hello World');
scrivi('<br>');
scrivi('Ciao Mondo');

//call back

function scriviPro(str, fn) {
    let testo = document.getElementById("testo");
    testo.innerHTML += fn(str);
}
function grassetto(stringa) {
    return `<b>${stringa}</b>`;
}
function corsivo(stringa) {
    return `<i>${stringa}</i>`;
}
scriviPro('testo in grassetto', grassetto);
scriviPro('testo in corsivo', corsivo);
scriviPro('testp aggiunto in movimento', function (stringa) {
    return `<marquee>${stringa}</marquee>`
});

/*entrambi i metodi restituiranno lo stesso valore, ossia non serve definire prima la funzione 
ma si può fare anche nella funzione sotto
*/

//usiamo le callback giornalemnte, basti solo pensare a array.map()
let array = [1, 2, 3, 4]

//metodo 1: modalità con funzione nominale
function raddoppia(n) {
    return n * 2
}
let res1 = array.map(raddoppia)

//metodo 2: modalità con funzione anonima
let res2 = array.map(function raddoppia(n) {
    return n * 2
})

console.log(res1, res2);

//le funzioni anonime si possono usare solo in alcuni casi (per esempio con i callback)

/**
 * funzioni anonime
 * 
 */

let prova = function () {
    console.log('funziona');
}
console.log(prova);//con questo console.log vedo il contenuto della funzione

prova(); //serve per eseguire la funzione contenuta all'interno della variabile

/*self invoking = decisamente confuzionari, ma utilizzata in un discorso di programmazione ad oggetti 
dove vi è una programmazione più discorsiva, risulta utile ed efficace
*/
(function () {
    console.log('funzione autoinvocata')
})()

/*
valorizzare una variabile in seguito ad una funzione che non andrò a riutilizzare NON UTILIZZARE PER ADESSO
let dato = (function () {
    //richiesta di dati al server
    return 'dati';
})()
*/

//scope delle variabili nelle funzioni
let pizze = ['Margherita', 'Diavola']; //scope globale
let secondi; //scope globale
function testScope() {
    console.log(pizze);//la variabile globale é visibile all'interno della funzione
    let primi = ['Pasta al pomodoro', 'Carbonara'];
    secondi = ['Parmigiana', 'Pollo arrosto'];
}

testScope();

//copnsole.log(primi);
//darà un errore poiché la variabile primi è nata all'interno della funzione: Uncaught ReferenceError: primi is not defined

console.log(secondi);
//restituirà il cambio effettuato all'interno della funzione. N.B. ricordarsi di lanciare la funzione altrimenti i cambiamenti non verranno applicati

//si può quindi creare una funzione che vada a modificare una variabile globale (sider)


//funzioni annidate

function genitore() {
    let nome = 'Mario';
    function figlio() {
        console.log(nome);//funziona perché nome è globale rispetto alla funzione figlio
        let conognome = 'Rossi';//appartiene solo alla funzione figlio, quindi genitore non lo può utilizzare
    }
    figlio();//la funzione esiste solo dentro alla funzione genitore, quindi posso solamente eseguirla all'interno
}

genitore();

function a(x) {
    return function b(y) {
        return function c(z) {
            return x + y + z;
        }
    }
}
console.log(a(3)(3)(2));

let b = a(3);
let c = b(3);
console.log(c(2));

