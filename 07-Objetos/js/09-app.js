// Sellar un objeto
// si se pueden modificar las propiedades, pero no se pueden agregar ni eliminar propiedades

'use strict'; //primero se debe invocar esto

const producto = {
    nombre: 'televisor',
    precio: 300,
    disponible: true
}

Object.seal(producto); // con esto queda sellado

producto.disponible = false;
console.log(producto.disponible); // si se modifica, no da error

producto.imagen = 'imagen.png';
console.log(producto.imagen); // da error

delete producto.precio;
console.log(producto); // da error

// para saber si un objeto esta sellado
console.log(Object.isSealed(producto)); // da true, esta sellado