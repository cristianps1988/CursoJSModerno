// curring y partial
// es dividir una funcion en varios parciales

// Forma Larga
const resta = (a, b, c) => a - b - c
const parcial2 = a => b => c => resta(a, b, c)
const primerNumero = parcial2(10)
const segundoNumero = primerNumero(5)
const total = segundoNumero(4)
console.log(total)


// Forma resumida
const suma = (a, b, c) => a + b + c

const parcial = a => b => c => suma(a, b, c)

const resultado = parcial(1)(2)(3)
console.log(resultado)