// objetos dentro de objetos

const producto = {
    nombre: 'televisor',
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            largo: '1m'
        },
        fabricante: {
            pais: 'China'
        }
    }
}

// igual se obtienen las propiedades con el dot notation
console.log(producto.informacion.medidas.peso);

// agregar propiedad
producto.informacion.medidas.ancho = '3m';
console.log(producto.informacion.medidas.ancho);