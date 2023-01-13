// una const no se puede reasignar su valor

const producto = {
    nombre: 'televisor',
    precio: 300,
    disponible: true
}

// pero si esta dentro de un objeto, si se puede reasignar
producto.disponible = false;

console.log(producto.disponible);