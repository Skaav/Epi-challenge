//le funzioni sono soggette ad hoisting, qundi posso invocarle prima della loro definizione

prova()

function prova() {
    console.log('invocata');
}

//posso invocare la funzione N volte
prova();
prova();

console.log(prova()); //restituisce undefined (non è proprio definito)

//return
//ATTENZIONE: return termina la funzione
function provaReturn() {
    return 'Dato restutito';
}
console.log(provaReturn());


//funzioni parametriche

function somma(a, b) {
    //alert (a + b);
    return a + b;
}

let risultato = somma(5, 2);
console.log('il risultato della somma è pari a ' + risultato)

let risultato2 = somma(2)//il valor di b, essendo mancato sarà undefined
console.log(risultato2);//il 2 + undefined = Nan

//parametri opzionali

function sommaTripla(a, b, c) {
    if (c === undefined) {
        c = 0;
    }
    /* if(!c){
        c = 0;
    }
    //operatore di coalescenza
    c =c || 0
    */

    return a + b + c;
}
let risultato3 = sommaTripla(2, 2);
console.log('il risultato n° 3 è pari a ' + risultato3);

//è possibile impostare valori predefiniti, che verranno usati se in fase di invocazione non viene inserito un valore
function sommaTriplaPro(a = 0, b = 0, c = 0) {
    return a + b + c;
}

let risutltato4 = sommaTriplaPro(2, 2);/* il valore di c è volutamente mancante, il suo valore verrà quindi 
impostato a 0 (valore predefinito0)*/
console.log('il risultato n° 4 è pari a ' + risutltato4);

//funzioni con argomenti illimitati
//i tre puntini metteranno tutto in un array di numeri
function sommaPro(...numeri) {
    /*versione base con for loop
    let risultato = 0
    for(i=0, i < numeri.length, i++){
        risultato += numeri[i]
    }
    */
    for (let n of numeri) {
        risultato += n;
    }
    return risultato;
}
let risultato5 = sommaPro(4, 8, 90);//tutti i valori verranno messi nell'array numeri
console.log('il risultato n° 5 è pari a ' + risultato5);

let arrNumeri = [4, 8, 90, 7, 9, 5, 4];
let risultato6 = arrNumeri.reduce(function (p, c) {
    return p + c;
})

console.log(risultato6);
