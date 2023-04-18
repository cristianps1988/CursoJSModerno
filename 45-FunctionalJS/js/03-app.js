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

// como se haría de la forma tradicional para filtrar los mayores de 400
const resultado = carrito.filter(p => {
    return p.precio > 400
})

console.log(resultado)

// Conviertiendo en higher order functions, pasamos una funcion como argumento

const mayor500 = p => {
    return p.precio > 500
}

const resultado2 = carrito.filter(mayor500)

console.log(resultado2)