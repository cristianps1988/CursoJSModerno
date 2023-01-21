// forEach y .map

// forEach es ideal para recorrer arreglos!!!

const tareas = ['barrer', 'trapear', 'cocinar', 'arreglar', 'martillar'];

tareas.forEach((tarea) => {console.log(tarea)}); // las llaves no son necesarias porque es un codigo de una linea

// puedo nombrar el argumento como yo quiera, algo mas corto, quitar las llaves y el parentesis porque es un solo argumento
tareas.forEach( e => console.log(e));

// si quiero acceder al indice de cada elemento, pongo otro argumento seguido de una coma
tareas.forEach((e, i) => console.log(`${i} : ${e}`));

// forEach para recorrer arreglos de objetos
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

carrito.forEach(e => console.log(e.nombre));
carrito.forEach(e => console.log(e.precio));
carrito.forEach(e => console.log(`El producto ${e.nombre} vale ${e.precio} dolares`));

// ejemplo anterior pero con map

carrito.map(e => console.log(e.nombre));
carrito.map(e => console.log(e.precio));
carrito.map(e => console.log(`El producto ${e.nombre} vale ${e.precio} euros`));

// pero con map puedo hacer una variable nueva para guardar datos
const nuevoArray = carrito.map( e => e.nombre);
console.log(nuevoArray); // me crea un nuevo array con los elementos

const nuevoArray2 = carrito.forEach( e => e.nombre);
console.log(nuevoArray2); // me arroja undefined.... no lo puedo utilizar para crear una nueva variable!!!