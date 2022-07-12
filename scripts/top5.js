class Pelicula{
    constructor(id,nombre, genero ,img , duracion){
        this.id = id;
        this.nombre = nombre;
        this.genero = genero;
        this.img = img;
        this.duracion = duracion;
    }

    
}


const Top5 = [];

Top5.push(new Pelicula(1,"P1","Terror","./images/prueba.jpg", "1:30 hs"));
Top5.push(new Pelicula(2,"P2","Terror","./images/prueba.jpg", "1:30 hs"));
Top5.push(new Pelicula(3,"P3","Terror","./images/prueba.jpg", "1:50 hs"));
Top5.push(new Pelicula(4,"P4","Terror","./images/prueba.jpg", "1:30 hs"));
Top5.push(new Pelicula(5,"P5","Terror","./images/prueba.jpg", "1:30 hs"));


let containerCards = document.querySelector('.ContainerCards');

for (let i = 0 ; i < Top5.length ; i++){
    containerCards.innerHTML += `<div id = '${Top5[i].id}' class="card">
                                    <img src="${Top5[i].img}" alt="Pelicula foto">
                                    <p>${Top5[i].nombre}</p>
                                    <p>${Top5[i].duracion}</p>
                                </div>`
}
