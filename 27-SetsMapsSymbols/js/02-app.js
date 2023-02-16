// weakSet... solo se le pueden pasar objetos

// crear un weakset
const weakset = new WeakSet();

// crear un objeto para agregar
const cristian = {
    nombre: 'cristian',
    apellido: 'sanchez',
    edad: 35
}

// agregar objeto al weakset
weakset.add(cristian);

// comprobar si tiene un elemento

console.log(weakset.has(cristian));

// eliminar elemento
weakset.delete(cristian);

// los weakset no son iterables
// los weakset no tienen .lengt ni .size... no se puede conocer su longitud


console.log(weakset);