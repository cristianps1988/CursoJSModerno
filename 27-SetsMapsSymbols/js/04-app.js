// Weakmap... no se pueden iterar, no se puede conocer su extension, solo aceptan objetos

const producto = {
    'cantidad': 20
}

// crear weakmap
const weakmap = new WeakMap();

// agregarle valores
weakmap.set(producto, 'Monitor');

// obtener su valor
console.log(weakmap.get(producto));

// borrar elementos
weakmap.delete(producto);

console.log(weakmap.size); // undefined



console.log(weakmap);