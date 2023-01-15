// agregar funciones a un objeto/metodo

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
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo playlist de ${nombre}`);
    },
}

reproductor.play('Metallica');
reproductor.play('Megadeth');
reproductor.reproducirPlaylist('Cristian')

// tambien se pueden agregar nuevos metodos

reproductor.playlist = function(usuario){
    console.log(`Creando nueva playlist llamada ${usuario}`);
}
reproductor.playlist('Cristian')

console.table(reproductor);