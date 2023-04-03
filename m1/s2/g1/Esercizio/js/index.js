// alert('test di prova');

var a = 2;
var b = 3;
document.write(a + b); //da non prendere l'abitudine di utilizzarlo
console.log(a + b);
document.getElementById("primo").innerHTML = a + b;

var c = -5;
var d = 2;
console.log(c - d);
document.getElementById("secondo").innerHTML = c - d;




var n = 10;
if (n > 10) {
    console.log('superiore');
} else if (n == 10) {
    console.log('è uguale');
    
} else {
    console.log('inferiore');
}
document.getElementById("terzo").innerHTML = n > 10;
document.getElementById("quarto").innerHTML = n == 10; "È uguale"
document.getElementById("quinto").innerHTML = n < 10;