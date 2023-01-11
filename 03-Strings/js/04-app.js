// Metodos para quitar espacios en blanco de strings
const producto = '     televisores     ';

console.log(producto.length);
console.log(producto.trimStart()); //quitar espacios al inicio del string
console.log(producto.trimEnd()); //quitar espacios al final del string
console.log(producto.trimStart().trimEnd()); // quitar espacios en ambas direcciones
console.log(producto.trimStart().trimEnd().length); //quitarlos y contar los caracteres
console.log(producto.trim()); //quitar espacios en ambas direcciones
console.log(producto.trim().length); //quitar espacios en ambas direcciones y contar