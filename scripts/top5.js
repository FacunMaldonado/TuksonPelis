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

Top5.push(new Pelicula(1,"Primera peli","Terror","../images/prueba.jpeg", "1:30 hs"));