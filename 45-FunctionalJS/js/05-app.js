const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

// utilizar letras en las arrow functions, si es una linea no poner los parentesis
// y el return se da por implicito
const obtenerNombres = p => p.nombre
const resultado = carrito.map(obtenerNombres)
console.log(resultado)

const mayor400 = p => p.precio > 400
const resultado2 = carrito.map(mayor400)
console.log(resultado2)