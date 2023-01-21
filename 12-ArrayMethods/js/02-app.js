// finIndex: sirve para mostrar el indice de lago que busco en un array

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// forma tradicional con un forEach
meses.forEach((e, i) => { // el primer argumento es el value, el segundo el indice
    if(e == 'Marzo'){
        console.log(i);
    }
});

// con finIndex es mas sencillo

const indice = meses.findIndex( i => i == "Marzo");
console.log(indice);

const indice2 = meses.findIndex( i => i == "Diciembre");
console.log(indice2); // si no existe, me da -1

// finIndex en un array de objetos

const indice3 = carrito.findIndex( e => e.nombre == "Celular");
console.log(indice3);

const indice4 = carrito.findIndex( e => e.precio == 100);
console.log(indice4); // hay 2 que valen 100, pero solo me va a arrojar el indice del primero que encuentre, esa es la desventaja