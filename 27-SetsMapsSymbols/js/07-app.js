// generadores

function *crearGenerador(){
    yield 3;
    yield 'Cristian';
    yield true;
    yield 3 * 4;
    yield ['hola', true, 34];
}

const iterador = crearGenerador();

console.log(iterador); // aparece como suspendido
console.log(iterador.next());
console.log(iterador.next().value);
console.log(iterador.next().done); // todavia no se ha terminado, sale false
console.log(iterador.next()); // cada next va avanzando
console.log(iterador.next().value);
console.log(iterador.next().done); // aqui ya termino
console.log(iterador); // ya se cerro porque termino de iterarse

// otro ejemplo

function *generadorCarrito(carrito){
    for(let i = 0; i < carrito.length; i++){
        yield carrito[i];
    }
}

const carrito = ['producto 1', 'producto 2', 'producto 3'];

const iterador2 = generadorCarrito(carrito);

console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());