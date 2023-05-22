function generaNumeroCasuale(): number {
    return Math.floor(Math.random() * 100) + 1;
}

function giocatoreVincitore(numeroGiocatore1: number, numeroGiocatore2: number, numeroCasuale: number): string {
    const differenzaGiocatore1 = Math.abs(numeroGiocatore1 - numeroCasuale);
    const differenzaGiocatore2 = Math.abs(numeroGiocatore2 - numeroCasuale);

    if (numeroGiocatore1 === numeroCasuale && numeroGiocatore2 === numeroCasuale) {
        return "Entrambi i giocatori hanno indovinato il numero!";
    } else if (numeroGiocatore1 === numeroCasuale) {
        return "Il giocatore 1 ha indovinato il numero!";
    } else if (numeroGiocatore2 === numeroCasuale) {
        return "Il giocatore 2 ha indovinato il numero!";
    } else if (differenzaGiocatore1 < differenzaGiocatore2) {
        return "Il giocatore 1 si è avvicinato di più al numero.";
    } else if (differenzaGiocatore2 < differenzaGiocatore1) {
        return "Il giocatore 2 si è avvicinato di più al numero.";
    } else {
        return "Entrambi i giocatori sono alla stessa distanza dal numero.";
    }
}

const numeroGiocatore1: number = 45;
const numeroGiocatore2: number = 60;
const numeroCasuale = generaNumeroCasuale();
const risultato = giocatoreVincitore(numeroGiocatore1, numeroGiocatore2, numeroCasuale);
console.log(`Il numero casuale generato è ${numeroCasuale}.`);
console.log(risultato);