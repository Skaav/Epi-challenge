/* var y = 1;
function f() {
    console.log(y);
    var z = 2;
    console.log(z);
}
f();

function g() {
    console.log(y);
    var y = 3;
    console.log(y);
}
g();
console.log(y); */

// === comparazione non solo di valore ma anche di tipo
var x = 5;
if (x == 5) {
    console.log(x + 'primo');
}

if (x == "5") {
    console.log(x + 'secondo');
}

if (x === "5") {
    console.log(x + 'terzo');
}

if (x === 5.0) {
    console.log(x + 'quarto');
}


var z = 5.1;
if (x === 5) {
    console.log(z + 'prova');
}

//Block Scope 
if (x == 5) {
    let x = 10;
    console.log(x + 'let');
}
console.log(x);