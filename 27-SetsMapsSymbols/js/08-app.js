// Iteradores

const ciudades = ['Melgar', 'Girardot', 'Flandes', 'Ibague'];
const ordenes = new Set([1243, 2427, 3684, 3684]);
const datos = new Map();

datos.set('nombre', 'Cristian');
datos.set('direccion', 'Nueva Esperanza');
datos.set('estado civil', 'Casado');

// .entries iterador
for(let entry of ciudades.entries()){
    console.log(entry);
}
for(let entry of ordenes.entries()){
    console.log(entry);
} // como el set no tiene key, me imprime el value 2 veces
for(let entry of datos.entries()){
    console.log(entry);
}


// .values iterador
for(let entry of ciudades.values()){
    console.log(entry);
}
for(let entry of ordenes.values()){
    console.log(entry);
} 
for(let entry of datos.values()){
    console.log(entry);
}


// keys iterator
for(let entry of ciudades.keys()){
    console.log(entry);
}
for(let entry of ordenes.keys()){
    console.log(entry);
} // como el set no tiene key, me imprime el value
for(let entry of datos.keys()){
    console.log(entry);
}

// iteradores por default segun el tipo de dato
// array
for(let i of ciudades){
    console.log(i);
} // me arroja los values

// Set
for(let i of ordenes){
    console.log(i);
} // me arroja los values

// map
for(let i of datos){
    console.log(i);
} // me arroja los keys y los values/entries