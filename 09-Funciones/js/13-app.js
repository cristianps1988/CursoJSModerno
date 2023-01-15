// convirtiendo el reproductor en arrow

// asi lo hicimos antes
const reproductor = {
    play: function(artista){
        console.log(`Reproduciendo cancion de ${artista}`);
    },
    pause: function(){
        console.log('Pausando...');
    },
    stop: function(){
        console.log('Parando...');
    },
    crearPlaylist: function(nombre){
        console.log(`Creando playlist de ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo playlist de ${nombre}`);
    },
}

// asi queda en arrow functions

const reproductor2 = {
    cancion: '',
    play: artista => console.log(`Tocando cancion de ${artista}`),
    pause: () => console.log('Pausando...'),
    stop: () => console.log('Parando...'),
    crearPlaylist: nombre => console.log(`Creando playlist de ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo playlist de ${nombre}`),

    // set
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Agregando ${this.cancion}`);
    },

    // set
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}

reproductor2.play('Rush');
reproductor2.pause();
reproductor2.stop();
reproductor2.crearPlaylist('Cristian');
reproductor2.reproducirPlaylist('metal para saltar');

reproductor2.nuevaCancion = 'Hacelo por mi'; // se agrega como si fuera una variable, y se muestra en pantalla de una vez
reproductor2.obtenerCancion; // se invoca sin los parentesis