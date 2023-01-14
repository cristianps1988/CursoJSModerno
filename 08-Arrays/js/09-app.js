// forEach

const carrito = [
    { nombre: 'televisor', precio: 300},
    { nombre: 'tablet', precio: 800},
    { nombre: 'radio', precio: 100},
    { nombre: 'nevera', precio: 1300},
    { nombre: 'celular', precio: 900},
    { nombre: 'estufa', precio: 600},
    { nombre: 'equipo de sonido', precio: 800},
    { nombre: 'lavadora', precio: 1500}
]

console.table(carrito);

// un for tradicional para recorrer el array
for(let i = 0; i < carrito.length; i++){
    console.log(`${carrito[i].nombre} - ${carrito[i].precio}`);
}

console.log('---');

// con forEach, for es es un metodo de un array
carrito.forEach(function(producto){
    console.log(`${producto.nombre} - ${producto.precio}`);
}); // el argumento de la funcion lo llamo como yo quiera

console.log('---');

carrito.forEach(function(p){
    console.log(`${p.nombre} - ${p.precio}`);
}); 