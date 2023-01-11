// reemplazar y dividir strings
const producto = 'monitor de 20 pulgadas';

console.log(producto);

// .replace para reemplazar caracteres en un string
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('monitor', 'radio'));

// .slice para cortar strings
console.log(producto.slice(0,7));
console.log(producto.slice(2,1)); //no muestra nada si el primer indice es mayor que el segundo

// .substring tambien corts strings

console.log(producto.substring(0,7));
console.log(producto.substring(2,1)); //a diferencia de slice, muestra algo si el primer indice es mayor que el segundo


// mostrar primera letra de un nombre
const usuario = 'cristian';
console.log(usuario);
console.log(usuario.slice(0, 1));
console.log(usuario.charAt(0)); //muestra solo el indice, no un rango como slice o substring