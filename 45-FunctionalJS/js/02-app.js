// funciones como argumentos

const suma = (a, b) => a + b
const multiplicacion = (a, b) => a * b

const sumaOmultiplica = fn => fn(10, 20)

console.log(sumaOmultiplica(multiplicacion))
console.log(sumaOmultiplica(suma))