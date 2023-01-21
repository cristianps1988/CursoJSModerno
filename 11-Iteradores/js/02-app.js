// break: detiene la ejecucion

for(let i = 0; i < 10; i++){
    if(i === 5){
        console.log('CINCO');
        break;
    }
    console.log(`Numero: ${i}`);
}

// salta la siguiente linea de ejecucion
for(let i = 0; i < 10; i++){
    if(i === 5){
        console.log('CINCO');
        continue;
    }
    console.log(`Numero: ${i}`);
}

// Ejemplo de uso del continue

const carrito = [
    { nombre: 'televisor', precio: 300},
    { nombre: 'tablet', precio: 800},
    { nombre: 'radio', precio: 100},
    { nombre: 'nevera', precio: 1300},
    { nombre: 'celular', precio: 900},
    { nombre: 'estufa', precio: 600, descuento: true},
    { nombre: 'equipo de sonido', precio: 800},
    { nombre: 'lavadora', precio: 1500}
]

for(let i = 0; i < carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`El producto ${carrito[i].nombre} tiene descuento`);
        continue
    }
    console.log(carrito[i].nombre);
}