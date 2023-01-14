// eliminar elementos de un arreglo
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

const producto4 = {
    nombre: 'tablet',
    precio: 400
}

carrito.push(producto1, producto2, producto3, producto4);
console.table(carrito);

// eliminar ultimo elemento de un array
carrito.pop();
console.table(carrito);

// eliminar primer elemento de un array
carrito.shift();
console.table(carrito);

carrito.push(producto1, producto4);
console.table(carrito);

// eliminar elementos de cualquier posicion del array
carrito.splice(2,1); // el primer numero es el indice de donde quiero comenzar a eliminar, el segundo es cuantos quiero eliminar
console.table(carrito);

carrito.splice(0,2); // puedo eliminar varios elementos
console.table(carrito);