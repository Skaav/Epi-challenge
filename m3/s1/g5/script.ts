interface Smartphone {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;

    ricarica(euro: number): void;
    numero404(): string;
    getNumeroChiamate(): number;
    chiamata(min: number): void;
    azzeraChiamate(): void;
}

//EXTRA
interface RegistroChiamate {
    id: number;
    durata: number;
    data: Date;

    //mostraRegistroChiamate(): void;
    getCalls(): void;
    filtraChiamate(): void;
}

class Cellulare implements Smartphone {
    carica: number;
    numeroChiamate: number;
    costoMinuto: number;
    //EXTRA
    registro: RegistroChiamate[] = [];
    //

    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
        //EXTRA
        this.registro = [];
        //
    }

    ricarica(euro: number): void {
        this.carica += euro;
    }

    numero404(): string {
        return `Credito residuo: ${this.carica.toFixed(2)}€`;
    }

    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    chiamata(min: number): void {
        const costoChiamata = min * this.costoMinuto;
        if (costoChiamata < this.carica) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
            //EXTRA
            let nuovaChiamata: RegistroChiamate = {
                id: this.numeroChiamate,
                durata: min,
                data: new Date(),
                getCalls: function (): void {
                    throw new Error("Function not implemented.");
                },
                filtraChiamate: function (): void {
                    throw new Error("Function not implemented.");
                }
            }
            this.registro.push(nuovaChiamata);
            //
            console.log(`Chiamata effettuata di ${min} minuti.`);
        } else {
            console.log(`Credito insufficiente per effettuare la chiamata di ${min} minuti.`);
        }
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0;
        console.log("Contatore chiamate azzerato.");
    }

    //EXTRA
    getCalls(): void {
        this.registro.forEach(telefonata => {
            console.log(`${telefonata.data}. La chiamata è durata: ${telefonata.durata} minuti`)
        })
    }
    filtraChiamate(inserisciData: string): void {
        let data = new Date(inserisciData);
        this.registro.forEach(element => {
            if (new Date(element.data).getDate() == data.getDate()) {
                console.log(`La chiamata cercata è: ${element.id} con durata ${element.durata} minuti, in data ${element.data}`);
            } else {
                console.log("Non ci sono chiamate per la data inserita.");
            }
        });
    }
    //
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
smartphone2.filtraChiamate('March 25 2023');
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
