// agregar o eliminar propiedades

const producto = {
    nombre: 'televisor',
    precio: 300,
    disponible: true
}

// agregar propiedades
producto.imagen = "imagen.png";

// eliminar propiedades
delete producto.imagen;

console.log(producto);