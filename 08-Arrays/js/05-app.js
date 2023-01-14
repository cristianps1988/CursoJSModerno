// metodos para agregar elementos al array

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];


// Forma imperativa
// agregar elemento al final del array
meses.push('Junio')
console.table(meses);

// otro ejemplo, agregando objetos a un array
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

// agregar objetos al final del array

carrito.push(producto1);
carrito.push(producto2);
console.table(carrito);

// agregar objetos al inicio del array
carrito.unshift(producto3);
console.table(carrito);