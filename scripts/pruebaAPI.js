//FALTA PROBAR

const  API_URL = 'https://omdbapi.com/?apikey=2d4bbd2a&';

const generarCartaEnHTML = (data) => {
    containerCards.innerHTML += `<div id = '${data.imdbID}' class="card">
                                    <img src="${data.Poster}" alt="Pelicula foto">
                                    <p>${data.Title}</p>
                                    <p>${data.Runtime}</p>
                                </div>`
}


document.getElementById('boton-para-buscar-pelicula').addEventListener('click', (e) => {
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