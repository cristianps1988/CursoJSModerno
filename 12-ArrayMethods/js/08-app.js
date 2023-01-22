// spread operator con indices

const meses = ['Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

// .push me va a modificar el array original
meses.push('Agosto')
console.log(meses);

// el spread no modifica el array original
const resultado = [...meses, 'Septiembre']; // no le coloco los puntos
console.log(resultado); // tiene ahora septiembre al final
console.log(meses); // no modifico al original

// para agregar al inicio del array
const resultado2 = ['Enero', ...resultado]; //coloro primero el texto, la coma y luego el array
console.log(resultado2);



// spread operator con arrays de objetos

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const nuevoProducto = { nombre: 'Nevera', precio: 990}

// agregar al final 
const resultado3 = [...carrito, nuevoProducto]; // no se colocan los ... al elemento que quiero agregar porque da error
console.log(resultado3);

// agregar al inicio
const resultado4 = [nuevoProducto, ...carrito];
console.log(resultado4);