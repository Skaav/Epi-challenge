const savedName = localStorage.getItem("name");
if (savedName) {
    document.querySelector("#savedName").textContent = "Nome salvato: " + savedName;
}

document.querySelector("#saveBtn").addEventListener("click", function () {
    const name = document.querySelector("#name").value;
    if (name) {
        localStorage.setItem("name", name);
        document.querySelector("#savedName").textContent = "Nome salvato: " + name;
    }
});

document.querySelector("#removeBtn").addEventListener("click", function () {
    localStorage.removeItem("name");
    document.querySelector("#name").value = "";
    document.querySelector("#savedName").textContent = "";
});

//Contatore1
let count = sessionStorage.getItem('count') || 0;
const timer = document.querySelector('#timer');

setInterval(() => {
    count++;
    timer.textContent = `${count}`;
    sessionStorage.setItem('count', count);
}, 1000);

//Contatore2
let seconds = 0;
let reset = document.querySelector('#reset');

setInterval(() => {
    seconds++;
    reset.textContent = `${seconds}`;
}, 1000);