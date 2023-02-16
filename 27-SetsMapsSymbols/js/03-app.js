// maps
const cliente = new Map();

// agregar datos al map
cliente.set('nombre', 'Cristian');
cliente.set('saldo', 300);
cliente.set(true, false);
cliente.set([1, 8, 3], false);

// longitud del map
console.log(cliente.size);

// comprobar que un elemento existe dentro de un map
console.log(cliente.has('nombre')); // true
console.log(cliente.has('Cristian')); // false... me busca la key

// obtener un valor de un map
console.log(cliente.get('nombre')); // me devuelve el value de esa key

// borrar un elemento de un map
cliente.delete('saldo');

// borrar todo el map
cliente.clear();

console.log(cliente);


// iniciar un map con valores
const paciente = new Map([['nombre', 'paciente'], ['habitacion', 105]]); // se pueden incluir arrays

// asignar valores luego de inicializarlos con valores
paciente.set('medico', 'Bimbo');

// se pueden reasignar los valores
paciente.set('nombre', 'cristian');

// iterar maps
paciente.forEach((value, key) => {
    console.log(key);
    console.log(value);
})

console.log(paciente);