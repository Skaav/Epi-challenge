abstract class LavoratoreAutonomo {
    protected codredd: number;
    protected redditoannuolordo: number;
    protected tasseinps: number;
    protected tasseirpef: number;

    constructor(codredd: number, redditoannuolordo: number, tasseinps: number, tasseirpef: number) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }

    abstract getUtileTasse(): number;
    abstract getTasseInps(): number;
    abstract getTasseIrpef(): number;

    getRedditoAnnuoNetto(): number {
        const tasseTotali = this.getUtileTasse();
        const redditoAnnuoNetto = this.redditoannuolordo - tasseTotali;
        return redditoAnnuoNetto;
    }
}

class LavoratoreAutonomo1 extends LavoratoreAutonomo {
    getUtileTasse(): number {
        return this.tasseinps + this.tasseirpef;
    }

    getTasseInps(): number {
        return this.tasseinps;
    }

    getTasseIrpef(): number {
        return this.tasseirpef;
    }
}

class LavoratoreAutonomo2 extends LavoratoreAutonomo {
    getUtileTasse(): number {
        // Implementazione specifica per il lavoratore autonomo 2
        // Calcolo delle tasse in base a una formula personalizzata
        return this.redditoannuolordo * 0.3;
    }

    getTasseInps(): number {
        return this.tasseinps;
    }

    getTasseIrpef(): number {
        return this.redditoannuolordo * 0.1;
    }
}

// Utilizzo del programma

// Creazione di un lavoratore autonomo di tipo 1
const lavoratore1 = new LavoratoreAutonomo1(1, 50000, 2000, 5000);
console.log("Reddito annuo netto lavoratore 1:", lavoratore1.getRedditoAnnuoNetto());

// Creazione di un lavoratore autonomo di tipo 2
const lavoratore2 = new LavoratoreAutonomo2(2, 75000, 3000, 0);
console.log("Reddito annuo netto lavoratore 2:", lavoratore2.getRedditoAnnuoNetto());