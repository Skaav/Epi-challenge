"use strict";
class Cellulare {
    //
    constructor() {
        //EXTRA
        this.registro = [];
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
        //EXTRA
        this.registro = [];
        //
    }
    ricarica(euro) {
        this.carica += euro;
    }
    numero404() {
        return `Credito residuo: ${this.carica.toFixed(2)}€`;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min) {
        const costoChiamata = min * this.costoMinuto;
        if (costoChiamata < this.carica) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
            //EXTRA
            let nuovaChiamata = {
                id: this.numeroChiamate,
                durata: min,
                data: new Date(),
                getCalls: function () {
                    throw new Error("Function not implemented.");
                },
                filtraChiamate: function () {
                    throw new Error("Function not implemented.");
                }
            };
            this.registro.push(nuovaChiamata);
            //
            console.log(`Chiamata effettuata di ${min} minuti.`);
        }
        else {
            console.log(`Credito insufficiente per effettuare la chiamata di ${min} minuti.`);
        }
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        console.log("Contatore chiamate azzerato.");
    }
    //EXTRA
    getCalls() {
        this.registro.forEach(telefonata => {
            console.log(`${telefonata.data}. La chiamata è durata: ${telefonata.durata} minuti`);
        });
    }
    filtraChiamate(inserisciData) {
        let data = new Date(inserisciData);
        this.registro.forEach(element => {
            if (new Date(element.data).getTime() == data.getTime()) {
                console.log(`La chiamata cercata è: ${element.id}, ${element.durata}, ${element.data}`);
            }
            else {
                console.log("Non ci sono chiamate per la data inserita.");
            }
        });
    }
}
const smartphone1 = new Cellulare();
const smartphone2 = new Cellulare();
const smartphone3 = new Cellulare();
console.log("Smartphone 1");
smartphone1.ricarica(10);
console.log(smartphone1.numero404());
smartphone1.chiamata(3);
console.log(smartphone1.numero404());
console.log(smartphone1.getNumeroChiamate());
//EXTRA
smartphone1.getCalls();
smartphone1.filtraChiamate('March 26 2023');
//
smartphone1.azzeraChiamate();
console.log(smartphone1.getNumeroChiamate());
console.log("-----------------------------------------------------------------------------");
console.log("Smartphone 2");
smartphone2.ricarica(5);
smartphone2.ricarica(5);
console.log(smartphone2.numero404());
smartphone2.chiamata(5);
console.log(smartphone2.numero404());
console.log(smartphone2.getNumeroChiamate());
//EXTRA
smartphone2.getCalls();
smartphone2.filtraChiamate('March 26 2023');
//
smartphone2.azzeraChiamate();
console.log(smartphone2.getNumeroChiamate());
console.log("-----------------------------------------------------------------------------");
console.log("Smartphone 3");
smartphone3.ricarica(1);
console.log(smartphone3.numero404());
smartphone3.chiamata(5);
console.log(smartphone3.numero404());
console.log(smartphone3.getNumeroChiamate());
//EXTRA
smartphone3.getCalls();
smartphone3.filtraChiamate('March 26 2023');
//
smartphone3.azzeraChiamate();
console.log(smartphone3.getNumeroChiamate());
console.log("-----------------------------------------------------------------------------");
//# sourceMappingURL=script.js.map