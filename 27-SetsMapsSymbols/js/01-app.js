// los sets no aceptan elementos duplicados, es parecido a un array, no tiene keys y values... solo values

// crear un set
const carrito = new Set();

// agregar elementos al set
carrito.add('Medias');
carrito.add('Pantalon');
carrito.add('Camisa');
carrito.add('Pantaloneta');
carrito.add('Medias'); // como este es repetido, no lo agrega

// tama;o del set
console.log(carrito.size);

// revisar si un valor existe en un set
console.log(carrito.has('Camisa')); // true
console.log(carrito.has('Bermuda')); // false

// eliminar elemento de un set
carrito.delete('Medias')

// eliminar todos los elementos de un set
//carrito.clear();

// iterar los elementos de un set
carrito.forEach( p => {
    console.log(p);
})

console.log(carrito);