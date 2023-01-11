// Metodos de strings
const productos = 'televisor';


console.log(productos);
console.log(productos.length); //longitud de la cadena de texto
console.log(productos.indexOf('visor'));// indice donde se encuentra lo que buscamos
console.log(productos.indexOf('radio')); //si no esta, se muestra como -1
console.log(productos.includes('tele')); // si incluye lo que buscamos en el string muestra true
console.log(productos.includes('radio')); // si no, muestra false