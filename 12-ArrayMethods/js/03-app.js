// reduce para sumar 

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// con forEach
let total = 0;
carrito.forEach(e => total += e.precio);
console.log(total);

// con un reduce
const resultado = carrito.reduce((total, producto) => total + producto.precio, 0 ); //le tengo que decir desde cuanto comenzar con el 0
console.log(resultado);
