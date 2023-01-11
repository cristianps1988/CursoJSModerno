// Concatenar strings

const producto = 'televisor';
const precio = '30 usd';

// Concat
console.log(producto.concat(precio));
console.log(producto.concat('en descuento de 30%'));

// Concatenar con +

console.log('El producto ' + producto + ' tiene un precio de ' + precio);

// Concatenar con ,
console.log('El producto' , producto , 'tiene un precio de' , precio);

// Template string nuevo
console.log(`El producto ${producto} tiene un precio de ${precio}`); //Recomendada