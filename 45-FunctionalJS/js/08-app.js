// Acceder a una funcion o valor desde el exterior o scope global

const obtenerCliente = () => {
    const nombre = 'Cristian'
    const mostrarNombre = () => {
        console.log(nombre)
    }
    return mostrarNombre
}

const cliente = obtenerCliente()
cliente()