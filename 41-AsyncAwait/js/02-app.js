function descargarClientes(){
    return new Promise((resolve, reject) => {
        const error = false
        setTimeout(() => {
            if(!error){
                console.log('Listado de clientes se descargo correctamente')
            } else{
                console.log('Error al descargar el listado de clientes')
            }
        }, 3000)
    })
}

// async await

async function ejecutar(){
    try {
        console.log(1 + 1)
        const respuesta = await descargarClientes() //espera hasta que se resuelva la función
        console.log(respuesta)

    } catch (error) {
        console.log(error) // muestra automaticamente el else de la función que espera resolverse
    }
}

ejecutar()