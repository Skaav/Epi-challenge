const AGENDA_URL = 'https://striveschool-api.herokuapp.com/api/product/'
const getProduct = function () {

    fetch(AGENDA_URL, {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDA4Zjg4Zjc0MDAwMTQyODc0NmIiLCJpYXQiOjE2ODM4ODIxMjgsImV4cCI6MTY4NTA5MTcyOH0.uSYfRzU3cp291ZaMriaR9W_9DQrIbjVhWpSXHOW5EU0'
        }
    })
        .then((res) => {
            console.log('RES', res)
            if (res.ok) {
                return res.json()
            } else {
                throw new Error('Errore nel recupero degli prodotti!')
            }
        })
        .then((data) => {
            console.log('PRODOTTI IN DB', data)
            data.forEach((product) => {
                let colTemplate = `
              <div class="col-12 col-md-3">
                <div class="card">
                    <img src=${product.imageUrl}>
                  <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">${product.brand}</p>
                    <p>${product.price}€</p>
                    <a href="./backoffice.html?productID=${product._id}" class="btn btn-primary">Edit</a>
                    <a href="./details.html?productID=${product._id}" target="_blanc" class="btn btn-primary">More info!</a>                    
                  </div >
                </div >
              </div >
              `
                let rowReference = document.getElementById('products-container')
                rowReference.innerHTML += colTemplate
            })
        })
        .catch((error) => {
            console.log(error)
        })
}

window.onload = () => {
    getProduct()
}