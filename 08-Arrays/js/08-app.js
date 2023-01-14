// destructuring de arrays

const numeros = [10, 20, 30, 40, 50];

// destructuring de un solo elemento
const [primero] = numeros; // ahora es con corchetes, nombro la variable que quiera crear como yo quiera
console.log(primero);

// destructuring de varios elementos, van llevando el orden de los indices, no se pueden saltar
const [primer, segundo, tercero] = numeros;
console.log(primer);
console.log(segundo);
console.log(tercero);

// si quiero crear solo el tercer elemento por ejemplo, pongo comas en los espacios donde irian esas posiciones
const [,,,,quinto] = numeros;
console.log(quinto);

// puedo sacar una parte y volverla un array, con el spread operator
const [,,...grupo] = numeros; // mete en el nuevo array el resto de numeros, porque se salta los 2 primeros
console.log(grupo);