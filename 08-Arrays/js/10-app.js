// map

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

// la sintaxis es igual que el forEach
carrito.map(function(p){
    console.log(`${p.nombre} - ${p.precio}`);
})

// la diferencia es que puedo crear una variable nueva
const nuevoArray = carrito.map(function(p){
    return `El producto ${p.nombre} vale ${p.precio}`
});

console.log(nuevoArray);