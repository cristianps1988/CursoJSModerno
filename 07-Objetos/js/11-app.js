// this

const nombre = 'Cristian';
const precio = 1000;

const producto = {
    nombre: 'televisor',
    precio: 300,
    disponible: true,
    mostrarInfoMal: function(){
        console.log(`El producto: ${nombre}, tiene un precio de: ${precio}`); // aqui se va a ir al scope global a buscar la variable nombre, eso no queremos
    },
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre}, tiene un precio de: ${this.precio}`); // agregando la palabra this, nos referimos al scope del objeto, que es lo que queremos
    }
}

producto.mostrarInfoMal();
producto.mostrarInfo();