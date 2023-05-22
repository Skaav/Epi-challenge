"use strict";
console.log('Hello world!');
let none = 'Mario';
let anni = 30;
let booleans = false;
let array = [20, 'testo', true];
let arrayString = ['stringa'];
let arrayNumber = [30, 15, 24];
none = 'Marco';
let vuota;
vuota = 0;
/* tipizzazione oggetti */
let user = {
    nome: 'Mario',
};
console.log(user.nome);
let element = document.querySelector('#test');
//tipizzazione funzioni
let salutoVar = () => {
    console.log('Ciao!');
};
function saluto() {
    console.log('Ciao!');
}
saluto();
function resituisciSaluto() {
    return 'Ciao!';
}
