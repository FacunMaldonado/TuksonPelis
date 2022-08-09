const API_KEY = 'api_key=b4262c8b9fa2b06ee1b6adfb5916a5e1';
const  BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500'

const searchURL = BASE_URL+'/search/movie?'+API_KEY;

const main = document.getElementById('main')
const form = document.getElementById('form');
const search = document.getElementById('search');

const containerCards = document.querySelector('.ContainerCards')

/* const generarCartaEnHTML = (data) => {
    c.innerHTML = `<div id = '${data.imdbID}' class="card">
                                    <img src="${data.Poster}" alt="Pelicula foto">
                                    <p>${data.Title}</p>
                                    <p>${data.Runtime}</p>
                                </div>`
} */


getMovies(API_URL);

function getMovies(url){
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data.results);
        showMovies(data.results);
    })
}

function showMovies(data){
    containerCards.innerHTML = '';

    data.forEach(movie => {
        const {title, poster_path, vote_average} = movie
        const movieElement = document.createElement('div');
        movieElement.classList.add('card');
        containerCards.innerHTML +=  `<div id = '${data.id}' class="card">
                                    <img src="${IMG_URL+poster_path}" alt="Pelicula foto">
                                    <p>${title}</p>
                                    </div>`
    })

    /* main.appendChild(containerCards) */
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if(searchTerm) {
        getMovies(searchURL+'&query='+searchTerm)
    }else{
        getMovies(API_URL);
    }
})