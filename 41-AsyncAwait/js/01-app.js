// try catch

// utilizar en casos como: conectar una base de datos, consultar una API, autenticar un user
// o acciones que cuando algo falle, la aplicación continue funcionando y obtengamos un msj error

console.log(1 + 1)

try {
    hola()
} catch (error) {
    console.log(error)
}

console.log(2 + 2)