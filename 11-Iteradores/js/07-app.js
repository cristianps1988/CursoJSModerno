// for...of ...... para recorrer arreglos

const tareas = ['barrer', 'trapear', 'cocinar', 'arreglar', 'martillar'];

for(let tarea of tareas){ // lo primero es crear un indice ... of ... y luego lo que quiero iterar
    console.log(tarea);
}

// puedo poner cualquier cosa como indice, algo mas corto... como una letra
for(let i of tareas){
    console.log(i);
}

// tambien puedo recorrer un arreglo de objetos

const carrito = [
    { nombre: 'televisor', precio: 300},
    { nombre: 'tablet', precio: 800},
    { nombre: 'radio', precio: 100},
    { nombre: 'nevera', precio: 1300},
    { nombre: 'celular', precio: 900},
    { nombre: 'estufa', precio: 600},
    { nombre: 'equipo de sonido', precio: 800},
    { nombre: 'lavadora', precio: 1500}
]

for(let i of carrito){
    console.log(i.nombre);
}

for(let i of carrito){
    console.log(i.precio);
}

for(let i of carrito){
    console.log(`El producto ${i.nombre} vale ${i.precio} euracos`);
}