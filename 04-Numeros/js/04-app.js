// orden de las operaciones: primero lo que esta dentro de los parentesis, luego multiplicaciones y divisiones, al final sumas y restas

let resultado;

resultado = 20 + 30 * 2; // primero multiplica 20 * 2 y luego lo suma al 20
resultado = (20 + 30) * 2; // aqui suma primero lo que esta dentro del parentesis

// sacar porcentaje
resultado = (20 + 30 + 50 + 100) * .2;

// adicionar porcentaje
resultado = (20 + 30 + 50 + 100) * 1.2;


console.log(resultado);