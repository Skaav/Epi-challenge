// ottieni il valore precedente dal localStorage e visualizzalo sopra l'input field
const savedName = localStorage.getItem("name");
if (savedName) {
    document.getElementById("saved-name").textContent = "Nome salvato: " + savedName;
}

// gestisci il click sul pulsante Salva
document.getElementById("save-btn").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    if (name) {
        localStorage.setItem("name", name);
        document.getElementById("saved-name").textContent = "Nome salvato: " + name;
    }
});

// gestisci il click sul pulsante Rimuovi
document.getElementById("remove-btn").addEventListener("click", function () {
    localStorage.removeItem("name");
    document.getElementById("name").value = "";
    document.getElementById("saved-name").textContent = "";
});

//Contatore1
let count = sessionStorage.getItem('count') || 0;
const timer = document.getElementById('timer');

// avvia il contatore
setInterval(() => {
    count++;
    timer.textContent = `${count} secondi`;
    // salva il valore del contatore nel sessionStorage
    sessionStorage.setItem('count', count);
}, 1000);

//Contatore2
// Verifica se il sessionStorage è supportato dal browser
if (typeof (Storage) !== "undefined") {
    // Verifica se la variabile del contatore esiste già nel sessionStorage
    if (sessionStorage.counter) {
        // Se esiste, recupera il valore e converte in numero intero
        var counter = parseInt(sessionStorage.counter);
    } else {
        // Altrimenti, inizializza il contatore a zero
        var counter = 0;
    }

    // Aggiorna il contatore ogni secondo
    setInterval(function () {
        counter++;
        // Salva il valore del contatore nel sessionStorage
        sessionStorage.counter = counter;
        // Aggiorna il valore visualizzato nella pagina
        document.getElementById("counter").innerHTML = counter;
    }, 1000);
} else {
    // sessionStorage non supportato dal browser
    document.getElementById("counter").innerHTML = "Session storage non supportato dal browser.";
}