// hoisting: es cuando se carga todo el contenido de js en el navegador
// funciona en 2 etapas:
// 1. Se registran todas las funciones
// 2. Se ejecutan todas las funciones


// function declaration
mostrarNombre('Pedrito') // puedo llamar la funcion antes de crearla, no va a dar error porque las funciones caran en la primera pasada en el navegador
function mostrarNombre(nombre){
    console.log(`El nombre es ${nombre}`)
}

mostrarApellido('Alvarez') // aqui me va a dar un error, de esta manera no se puede llamar antes de declararla.
// porque las variables no se registran en la primera carga del código en el navegador
const mostrarApellido = function(apellido){
    console.log(`El apellido es ${nombre}`)
}