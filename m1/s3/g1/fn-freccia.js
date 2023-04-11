//funzione freccia, sono tutte anonime
//le funzioni freccia omettono il function e mettono una => tra le () e le {}    ()=>{}
let prova = () => {
    console.log('invocata');
}
/*
    //posso comunuque usare la forma oneline
    let prova = () => console.log('invocata')
*/

prova();

//funzione piccola, oneline. Se si omettono le graffe il return è implicito
let provaReturn = () => 'Dato restituito';

console.log(provaReturn());


//fn freccia e parametri

//un solo parametro
let grassetto = stringa => `<b>${stringa}</b>`;
console.log(grassetto('ciao'));

//più di un parametro
let somma = (a, b) => a + b;//return sottointeso
console.log(somma(2, 2));