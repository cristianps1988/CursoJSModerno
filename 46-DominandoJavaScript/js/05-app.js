// explicit binding

function persona(primero, segundo){
    console.log(`Mi nombre es ${this.nombre}, me gusta la musica ${primero} y ${segundo}`)
}

const info = {
    nombre: 'Cristian'
}

const musica = ['Metal', 'Rock']

console.log(persona.call(info, musica[0], musica[1])) // utilizando .call tengo que pasar cada parámetro del array individualmente
console.log('--------')

console.log(persona.apply(info, musica)) // utilizando.apply puedo pasar el array como parámetro
console.log('--------')

const nuevaFuncion = persona.bind(info, musica[0], musica[1]) // .bind me crea una nueva funcion y debo pasar los parámetros del array individualmente
nuevaFuncion()