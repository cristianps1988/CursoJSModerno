// map y forEach en arrow

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

// map a la antigua
const nuevoArray = carrito.map(function(p){
    return `El producto ${p.nombre} vale ${p.precio}`
});
console.log(nuevoArray);

// map con arrow function
const nuevoArray2 = carrito.map(p => `El producto ${p.nombre} vale ${p.precio}`)
console.log(nuevoArray2);



// forEach a la antigua
carrito.forEach(function(p){
    console.log(`${p.nombre} - ${p.precio}`);
}); 

// forEach con arrow funcion
carrito.forEach(p => console.log(`El ${p.nombre} vale ${p.precio}`));