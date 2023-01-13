// metodos de objetos: keys, values, entries

const producto = {
    nombre: 'televisor',
    precio: 300,
    disponible: true
}

// keys
console.log(Object.keys(producto)); // me retorna solos las keys (nombre, precio, disponible)

// values
console.log(Object.values(producto)); // me retorna solo los valores (televisor, 300, true)

// entries
console.log(Object.entries(producto)); // me devuelve todo: keys y values