const numero1 = 20;
const numero2 = 30;
const numero3 = '10';
let resultado;

// mayor que
resultado = numero1 > numero2;
resultado = numero2 > numero1;
resultado = numero2 > numero3; // convierte el string en number

// menor que
resultado = numero1 < numero2;
resultado = numero2 < numero1;
resultado = numero2 < numero3; // convierte el string en number

console.log(resultado);