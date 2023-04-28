let navbar = document.querySelector('nav');
let button = document.querySelector('.start');

window.onscroll = function () {
    if (window.pageYOffset > 200) {
        navbar.classList.add('colorSwitch');
        button.classList.add('colorSwitch2');
    } else {
        navbar.classList.remove('colorSwitch')
        button.classList.remove('colorSwitch2')
    }
};

// ANIMAZIONE LETTERE

let letters = document.querySelectorAll('.artwork svg g')

function selectRandom(x) {
    return x[Math.floor(Math.random() * x.length)];
}

function animateLetters() {
    let switchTrue = selectRandom(Array.from(letters));
    if (switchTrue.classList.contains('letterM')) {
        switchTrue.classList.remove('letterM');
    } else {
        switchTrue.classList.add('letterM');
    }
};

setInterval(animateLetters, 2);