const AGENDA_URL = 'https://striveschool-api.herokuapp.com/api/product/'


let productID = new URLSearchParams(window.location.search).get('productID')


const getDetails = function () {


    fetch(AGENDA_URL + `${productID}`, {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDA4Zjg4Zjc0MDAwMTQyODc0NmIiLCJpYXQiOjE2ODM4ODIxMjgsImV4cCI6MTY4NTA5MTcyOH0.uSYfRzU3cp291ZaMriaR9W_9DQrIbjVhWpSXHOW5EU0'
        }
    })

        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Errore nel recupero dei prodotti!');
            }
        })
        .then((product) => {
            console.log('PRODOTTO', product);
            let colTemplate = `
        <h2 class=" fs-1 text-center" >${product.name}-${product.brand}</h2>   
        <img class="imgSize"src=${product.imageUrl}>
        <p>${product.description}</p>
        `;
            let rowReference = document.getElementById('details-container');
            rowReference.innerHTML = colTemplate;
        })
        .catch((error) => {
            console.log(error);
        });

};
window.onload = () => {
    getDetails()
};