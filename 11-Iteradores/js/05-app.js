// Do while sencillo

let i = 0; // inicio

do{
    console.log(i);
    i++; // incremento
} while(i <= 10); // condicion

// do while para pares e impares
let e = 1;
do{
    if(e % 2 == 0){
        console.log(`${e} es PAR`);
    } else{
        console.log(`${e} es IMPAR`);
    }
    e++;
} while(e <= 10);

// do while para recorrer arraya

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

let o = 0;

do{
    console.log(`El producto ${carrito[o].nombre} vale ${carrito[o].precio}`);
    o++
} while(o < carrito.length);

// fizzbuzz con do while

let u = 1;

do{
    if(u % 15 ==0){
        console.log('FIZBUZZ');
    } else if(u % 5 == 0){
        console.log('Buzz');
    } else if(u % 3 == 0){
        console.log('Fizz');
    } else{
        console.log(u);
    }
    u++;
} while(u <= 100);