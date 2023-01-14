// agregar elementos a un array

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'abril'];

// un arreglo asi sea un const, pueden ser modificados sus elementos, agregados o eliminados
meses[0] = 'nuevo mes'

console.log(meses);

meses[0] = 'enero'

// de forma manual puedo agregar un nuevo elemento
meses[6] = 'ultimo mes'
console.table(meses);