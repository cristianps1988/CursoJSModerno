// eliminar elementos del DOM

// eliminandolo por si solo
const primerEnlace = document.querySelector('a');
primerEnlace.remove();

// eliminandolo desde el padre
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children); // solo para poder identificar mejor el que quiero eliminar
navegacion.removeChild(navegacion.children[1]); // elimino el hijo de navegacion, en la posicion 1 del indice (osea el segundo)