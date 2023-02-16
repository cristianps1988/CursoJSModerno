// symbol ... ningun symbol es igual a otro

// no se utiliza la palabra new
const sym = Symbol();
const sym2 = Symbol();

// siempre van a ser diferenes, asi esten vacios
console.log(sym === sym2? 'Son iguales' : 'Son diferentes');

// asi tengan el mismo valor, seran diferentes
const sym3 = Symbol('1');
const sym4 = Symbol('1');

console.log(sym3 === sym4? 'Son iguales' : 'Son diferentes');

// agregar symbols como keys de un objeto
const nombre = Symbol();
const apellido = Symbol();
const persona = {};

persona[nombre] = 'Cristian'; // para agregar un symbol como key, debo utilizar corchetes
persona[apellido] = 'Sanchez';
persona.status = 'Premium';
persona.activo = true;
persona.saldo = 300;

console.log(persona); // las key symbol salen como Symbol(), no su nombre

// para acceder a un value de una key symbol, debo utilizar corchetes
console.log(persona[nombre]);

// las propiedades symbol no son iterables
for(let i in persona){
    console.log(i);
}

// se puede agregar una descripcion
const direccion = Symbol('Direccion del cliente');
persona[direccion] = 'Nueva Esperanza';

console.log(persona);
console.log(persona[direccion]); // acceder al value del symbol
console.log(direccion); // acceder a la descripcion del symbol