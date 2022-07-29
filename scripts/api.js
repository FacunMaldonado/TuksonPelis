const  API_URL = 'https://omdbapi.com/?apikey=2d4bbd2a&';
const endpointHarry = 't=harry';

const traerDatos = () => {
    fetch(API_URL+endpointHarry)
    .then((response) => response.json())
    .then((data) => {
        pelicula = data
        console.log(data)
        //generarCartaEnHTML(data)
    })
};

const generarCartaEnHTML = () => {
    containerCards.innerHTML += `<div id = '${data.imdbID}' class="card">
                                    <img src="${data.Poster}" alt="Pelicula foto">
                                    <p>${data.Title}</p>
                                    <p>${data.Runtime}</p>
                                </div>`
}
//let containerCards = document.querySelector('.ContainerCards');

traerDatos();