// filter: me crea un nuevo array con la condicion que quiera evaluar

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado;

resultado = carrito.filter(producto => producto.precio > 400);// crea el array con los productos que valgan mas de 300

resultado = carrito.filter(p => p.precio < 600); // los que valgan mas de 600

resultado = carrito.filter(p => p.nombre === 'Celular'); // me crea el array solo con el producto que se llame celular

resultado = carrito.filter( e => e.nombre !== "Tablet") // me crea el array con todos los productos, menos el que se llame 'Tablet'


console.log(resultado);