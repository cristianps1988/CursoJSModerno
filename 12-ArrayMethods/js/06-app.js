// every para validar una condicion que cumplan todos los objetos

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// valido que todos cumplan la condicion
const resultado = carrito.every( e => e.precio < 500); // todos no valen menos de 500, false
console.log(resultado); // me retorna true o false

// con some, validos que al menos uno cumpla la condicion
const resultado2 = carrito.some( e => e.precio < 500); // al menos uno vale menos de 500, true
console.log(resultado2);