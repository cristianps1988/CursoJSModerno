// undefined
let numero; // se declara la variable pero su valor no esta definido
console.log(numero);
console.log(typeof numero); // es de tipo undefined

// null

let numero2 = null; // se declara con valor null
console.log(numero2);
console.log( typeof numero2); // es de tipo objeto

// al comparar undefined y null, da true
console.log(numero == numero2);

// al utilizar el comparador estricto da false
console.log(numero === numero2);