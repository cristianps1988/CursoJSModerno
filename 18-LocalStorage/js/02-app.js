// obtener datos de local storage
const nombre = localStorage.getItem('nombre');
console.log(nombre); // si no existiera, marca null

const meses = localStorage.getItem('meses');
console.log(JSON.parse(meses)); // vienen como string, tengo que convertirlo a array

const producto = localStorage.getItem('producto');
const productoObjeto = JSON.parse(producto); // lo uedo asignar a una nueva variable
console.log(productoObjeto);