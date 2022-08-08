class Pelicula{
    constructor(id,nombre, genero ,img , duracion){
        this.id = id;
        this.nombre = nombre;
        this.genero = genero;
        this.img = img;
        this.duracion = duracion;
    }

    
}


const Peliculas = [];

Peliculas.push(new Pelicula(1,"P1","Terror","../images/prueba.jpeg", "1:46 hs"));
Peliculas.push(new Pelicula(2,"P2","Suspenso","../images/prueba.jpeg", "1:45 hs"));
Peliculas.push(new Pelicula(3,"P3","Suspenso","../images/prueba.jpeg", "1:16 hs"));
Peliculas.push(new Pelicula(4,"P4","Terror","../images/prueba.jpeg", "1:40 hs"));
Peliculas.push(new Pelicula(5,"P5","Terror","../images/prueba.jpeg", "2:30 hs"));
Peliculas.push(new Pelicula(6,"Tonto Y Re Tonto","Comedia","../images/TyT.jpg", "1 HS"));
Peliculas.push(new Pelicula(7,"Son Como Niños","Comedia","../images/sonComoNiños.jpg", "1:50 HS"));
Peliculas.push(new Pelicula(8,"Good Burger","Comedia","../images/GoodBurger.jpg", "1:43 HS"));

const PelisJSON = JSON.stringify(Peliculas);



let containerCards = document.querySelector('.ContainerCards');

/* for (let i = 0 ; i < Peliculas.length ; i++){
        containerCards.innerHTML += `<div id = '${Peliculas[i].id}' class="card">
                                        <img src="${Peliculas[i].img}" alt="Pelicula foto">
                                        <p>${Peliculas[i].nombre}</p>
                                        <p>${Peliculas[i].duracion}</p>
                                    </div>`
} */

function filtrarGenero (Peliculas){
    let nuevoArray ;

    nuevoArray = Peliculas.filter((pelicula) => pelicula.genero == 'Comedia')

    console.log (nuevoArray)

    for (let i = 0 ; i < nuevoArray.length ; i++){
        containerCards.innerHTML += `<div id = '${nuevoArray[i].id}' class="card">
                                        <img src="${nuevoArray[i].img}" alt="Pelicula foto">
                                        <p>${nuevoArray[i].nombre}</p>
                                        <p>${nuevoArray[i].duracion}</p>
                                    </div>`
}
}

filtrarGenero(Peliculas);

