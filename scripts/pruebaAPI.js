//FALTA PROBAR

const  API_URL = 'https://omdbapi.com/?apikey=2d4bbd2a&';
const containerCards = document.querySelector('.ContainerCards')
const botonBuscar = document.getElementById('boton-para-buscar-pelicula')

const generarCartaEnHTML = (data) => {
    containerCards.innerHTML = `<div id = '${data.imdbID}' class="card">
                                    <img src="${data.Poster}" alt="Pelicula foto">
                                    <p>${data.Title}</p>
                                    <p>${data.Runtime}</p>
                                </div>`
}


botonBuscar.addEventListener('click', (e) => {
        console.log('HOLA')
        e.preventDefault();
        const nombrePelicula = document.getElementById('nombre-pelicula-a-buscar').value;

        fetch(API_URL + "t=" + nombrePelicula)
        .then((response) => response.json())
        .then ((data) => {
            pelicula = data;
            console.log (data);
            generarCartaEnHTML(data);
        })
})

