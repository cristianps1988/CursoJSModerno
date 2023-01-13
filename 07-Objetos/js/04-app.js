// sacar una propiedad de un objeto y asignarlo a una nueva variable

const producto = {
    nombre: 'televisor',
    precio: 300,
    disponible: true,
    peso: '1kg',
    ancho: '1m',
    largo: '3m'
}

// forma antigua
const precio = producto.precio;
console.log(precio);

// destructuring
const { nombre } = producto;
console.log(nombre);

// puedo hacer destructuring de varias propiedades al mismo tiempo
const { disponible, peso, ancho, largo } = producto;

// se pone entre corchetes la key del objeto que quiero extraer, asi se llamara la nueva variable

// a la derecha del igual pongo el nombre del objeto del cual quiero sacar la variable