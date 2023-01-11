// metodos con numeros

const numero1 = '30';
const numero2 = '20.1';
const numero3 = 'uno';
const numero4 = 20.3;
const numero5 = 20;

// string a number
console.log( Number.parseInt(numero1));
console.log(Number.parseInt(numero2)); // lo redondea

// string a float
console.log( Number.parseFloat(numero2));

// No es un numero
console.log( Number.parseInt(numero3)); // NaN

// revisar si un numero es enter/integer
console.log( Number.isInteger(numero4)); // false
console.log( Number.isInteger(numero5)); // true