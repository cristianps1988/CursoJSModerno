// Destructuring de objetos anidados

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

// es como hacer un destructuring anidado
const { informacion: { medidas: { peso } } } = producto;
console.log(peso); // solo me crea peso, no me crea medidas ni informacion

// si quiero destructurar un nivel superior y uno mas profundo al mismo tiempo, tengo que ponerle la coma y luego seguir entrando mas profundo en el objeto
const {informacion:{medidas, medidas:{largo}}} = producto;
console.log(medidas);
console.log(largo);

// igual se puede hacer destructuring de varias propiedades a la vez
const { nombre, precio, informacion, informacion:{fabricante, fabricante:{pais}}} = producto;

console.log(nombre);
console.log(precio);
console.log(informacion);
console.log(fabricante);
console.log(pais);