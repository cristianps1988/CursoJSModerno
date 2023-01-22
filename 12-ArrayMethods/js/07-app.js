// concat para crear un nuevo arreglo que uno 2 o mas

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre']

// concat
const resultado = meses.concat(meses2, meses3); // el orden que los ponga es importante
console.log(resultado); 

// con spread operator
const resultado2 = [...meses, ...meses2, ...meses3]; // el orden importa
console.log(resultado2);