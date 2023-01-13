// Como juntar 2 objetos y ponerlos en uno solo

const producto = {
    nombre: 'televisor',
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    largo: '3m'
}

// metodo assign
const resultado = Object.assign(producto, medidas);
console.log(resultado);

// spread operator o rest operator. Este es mas utilizado
const resultado2 = {...producto, ...medidas};
console.log(resultado2);