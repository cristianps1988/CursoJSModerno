const numero1 = 20;
const numero2 = 30;
const numero3 = '20';
let resultado;

// comparador
resultado = numero1 == numero2;
resultado = numero1 == numero3;

// comparador estricto
resultado = numero1 === numero2;
resultado = numero1 === numero3; // da false
resultado = numero1 === parseInt(numero3);

// diferente que
resultado = numero1 != numero2; 
resultado = numero1 != numero3; // lo convierte a string

// diferente que estricto
resultado = numero1 !== numero3; // compara tambien el tipo
resultado = numero1 !== parseInt(numero3);

console.log(resultado);