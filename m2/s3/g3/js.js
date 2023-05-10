fetch("https://striveschool-api.herokuapp.com/books")
    // Primo then
    .then((res) => {
        if (res.ok) {
            return res.json()
        } else {
            return new Error('Errore nel contattare il server')
        }
    })
    // Secondo then
    .then((books) => {
        const bookList = document.querySelector("#bookList");

        books.forEach((book) => {
            const bookItem = document.createElement("div");
            bookItem.classList.add("col-12", "col-lg-3", "d-flex", "justify-content-evenly", "mb-3",);
            bookItem.innerHTML = `
                <div class="card bg-dark text-light border-light myCard">
                <img src=${book.img} class="altezza-immagini" alt="Books">
                <div class="card-body">
                <h4 class="card-title">${book.title}</h4>
                <p class="card-text">Price: ${book.price}</p>
                <button class="btn btn-primary addToCart">Add Cart</button>
                <button class="btn  btn-danger myButton">Discard</button>
                </div> 
                </div>     
              `;
            bookList.appendChild(bookItem);

            const myButtons = bookItem.querySelectorAll(".myButton");
            myButtons.forEach((button) => {
                button.addEventListener("click", () => {
                    const myCard = button.closest(".myCard");
                    myCard.remove();
                })
            });
            const cart = document.querySelector(".cart");
            const addBut = bookItem.querySelectorAll(".addToCart");
            addBut.forEach((button) => {
                button.addEventListener("click", function () {
                    const card = this.closest(".card");
                    const listItem = document.createElement("li");
                    listItem.classList.add("d-flex", "flex-column");
                    listItem.innerHTML = `
                    <p>${book.title}</p>
                    <p>${book.price}</p>
          `;
                    cart.appendChild(listItem);
                })
            })
        })
    })
    //Terzo then
    .then((delButton) => {
    })
    // Catch
    .catch((error) => {
        console.log(error);
    });