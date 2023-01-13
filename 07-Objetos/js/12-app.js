// object constructor


// object literal
const producto = {
    nombre: 'televisor',
    precio: 300,
    disponible: true
}

// object constructor
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
} // creamos el constructor como una funcion, debe comenzar en mayuscula

const producto2 = new Producto('radio', 100); // ahora tenemos una plantilla para crear nuevos objetos
console.log(producto2);

const producto3 = new Producto('tablet', 800);
console.log(producto3);