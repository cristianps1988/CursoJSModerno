// for sencillo

for(let i = 0; i < 10; i++){
    console.log(`Numero: ${i}`);
}

// for para identificar numeros pares e impares

for(let i = 1; i <=50; i++ ){
    console.log( i % 2 === 0 ? `El numero ${i} es PAR` : `El numero ${i} es IMPAR`);
}

// for para recorrer arrays

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

for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}