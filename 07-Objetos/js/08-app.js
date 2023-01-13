// hacer que un objeto se comporte como un const

'use strict'; //primero se debe invocar esto

const producto = {
    nombre: 'televisor',
    precio: 300,
    disponible: true
}

Object.freeze(producto); // con esto queda como congelado, no se pueden agregar, modificar o eliminar propiedades

producto.imagen = 'imagen.png';
console.log(producto.imagen); // da error

producto.disponible = false;
console.log(producto.disponible); // da error

delete producto.precio;
console.log(producto); // da error

// para saber si un objeto esta frozen
console.log(Object.isFrozen(producto)); // da true, esta congelado