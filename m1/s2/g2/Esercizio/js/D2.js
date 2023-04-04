/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/*
-Dato 'Stringa' indica sia il singolo carattere che la sequenza finita di caratteri. Possono essere modificate e manipolate tramite metodi.
Si dichiarano scrivendoli in mezzo agli apostrofi 'così', o alle  virgolette "così".

-Dato Numerico, indica un numero. In JS non c'è distinzione fra intero e decimale, che viene scritto con il punto e non con la virgola. 
I dati numerici non richiedono '' o "".

-Dato booleano, indica un booleano ossia due soli valori, true o false. Serve a definire se un controllo risulta vero o falso.

-Null è una parola chiave che indica l'assenza intenzionale di un oggetto ossia nessun valore ed è diverso da zero. 
Se rimandato da una logica booleana indica false.

-Undefined indica che una variabile non è stata definita o non ha un valore assegnato.

-Object un contenitore di proprietà (dati) e di metodi (funzionalità), che servono a formare una struttura logica.

-Array è una variabile che contiene più dati al suo interno dello stesso valore.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let name = "Paolo";
console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
//esistono due modi, ho diamo a due variabili i valori 12 e 20 e poi li sommiamo, o chiediamo un console.log() in cui andiamo a scrivere l'operazione matematica richiesta
let k = 12;
let l = 20;
console.log(k + l);
console.log(12 + 20);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
name = "Scavino";
console.log(name);
const IMPOSSIBILE_RIASSEGNARE = 28;
//var impossibileRiassegnare = 17;
/*se si toglie il commento '//' da davanti a var lanciando js risulterà 
un errore "UncaughtSyntaxError: Identifier 'impossibileRiassegnare' has already been declared"
*/
console.log(impossibileRiassegnare);


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
console.log(4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = "john";
let name2 = "John";
console.log(name1 == name2);
console.log(name1.toLowerCase === name2.toLowerCase);
