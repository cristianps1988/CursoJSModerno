// find

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// con for Each
let resultado = "";
carrito.forEach( (e, i) => {
    if(e.nombre == "Tablet"){
        resultado = carrito[i];
    }
});
console.log(resultado);

// con find
const resultado2 = carrito.find( e => e.nombre === 'Tablet');
console.log(resultado2); // solo me retorne el primer elemento que cumple la funcion

