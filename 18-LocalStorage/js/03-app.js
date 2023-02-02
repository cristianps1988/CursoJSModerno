// eliminar elementos de localstorage

localStorage.removeItem('nombre');


// no hay acualizacion... para actualizar un elemento en local debo
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('Nuevo mes');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray));

localStorage.clear(); // limpiar todo el localstorage