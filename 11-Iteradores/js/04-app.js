// while sencillo

let i = 0; // inicio

while (i < 10) { // condicion
    console.log(`Numero ${i}`);
    i++ // incremento
}

// while para identificar numeros pares

let e = 1; // utilizo e porque i ya la utilice arriba
while (e < 100) {
    if(e % 2 ==0){
        console.log(`${e} es PAR`);
        e++
    }
    console.log(`${e} es IMPAR`);
    e++
}

// while para recorrer arrays

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

while (o < carrito.length) {
    console.log(carrito[o].nombre);
    o++
}

// fizzbuz con while

let u = 1;
while (u <= 100) {
    if(u % 15 == 0){
        console.log('FizzBuzz');
    } else if(u % 5 == 0){
        console.log('Buzz');
    } else if(u % 3 == 0){
        console.log('Fizz');
    } else{
        console.log(u);
    }
    u++
}