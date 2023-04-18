// Funciones que retornan funciones

const funcionDoble = () => () => console.log('Holis')

const fn = funcionDoble()

fn()