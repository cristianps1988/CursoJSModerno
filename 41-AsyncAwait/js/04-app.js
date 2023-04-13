// ejecutar varios asynt await simultanemaente

function descargarClientes(){
    return new Promise(resolve => {
        console.log('Descargando clientes')
        setTimeout(() => {
            console.log('Los clientes se descargaron correctamente')
        }, 3000)
        
    })
}

function descargarPedidos(){
    return new Promise(resolve => {
        console.log('Descargando pedidos')
        setTimeout(() => {
            console.log('Los pedidos se descargaron correctamente')
        }, 5000)
        
    })
}

const app = async () => {
    try {
        const respuesta = await Promise.all([descargarClientes(), descargarPedidos()])
        console.log(respuesta[0])
        console.log(respuesta[1])
    } catch (error) {
        console.log(error)
    }
}

app()