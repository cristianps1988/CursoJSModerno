// includes y some

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si existe un valor en un array con forEach

meses.forEach( e => {
    if(e == "Enero"){
        console.log("Enero existe");
    }
});

// Es mejor utilizar .includes... solo sirve en arrays normales

const existe = meses.includes('Enero');
console.log(existe); // true

const existe2 = meses.includes('Noviembre');
console.log(existe2); // false

// Para buscar un valor en un array de objetos, utilizamos .some

const resultado = carrito.some( e => {
    return e.nombre == "Tablet";
});
console.log(resultado); // true

const resultado2 = carrito.some( e => e.nombre == 'Nevera'); // como es de una sola linea, puedo obviar el return y las llaves
console.log(resultado2);

// tambien puedo utilizar el some en un array sencillo
const existe3 = meses.some(e => e == 'Enero');
console.log(existe3);