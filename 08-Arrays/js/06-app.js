// crear un nuevo arreglo con spread operator

// forma declarativa: no modifica la variable, sino que crea una nueva

const carrito = [];

const producto1 = {
    nombre: 'monitor',
    precio: 300
}

const producto2 = {
    nombre: 'celular',
    precio: 990
}

const producto3 = {
    nombre: 'radio',
    precio: 100
}

// agregar elemento al final del array, creamos una nueva variable
let resultado = [...carrito, producto1];
console.table(resultado);

// agregar otro elemento al final, ahora tenemos que agregarlo a resultado
resultado = [...resultado, producto2];
console.table(resultado);

// agregar elemento al inicio del array
resultado = [producto3, ...resultado];
console.table(resultado);