console.log('Hello world!');


let none: string = 'Mario';
let anni: number = 30;
let booleans: boolean = false;

let array: any[] = [20, 'testo', true];
let arrayString: string[] = ['stringa'];
let arrayNumber: number[] = [30, 15, 24];

none = 'Marco';

let vuota: undefined | number;

vuota = 0;

/* tipizzazione oggetti */

let user: { nome: string, } = {
    nome: 'Mario',
};

console.log(user.nome);

let element: Element | null = document.querySelector('#test');
let element2: HTMLInputElement | null = document.querySelector('input');



//tipizzazione funzioni
let salutoVar: Function = (): void => {
    console.log('Ciao!');
}
function saluto(): void {
    console.log('Ciao!');
}

saluto();

function resituisciSaluto(): string {
    return 'Ciao!';
}