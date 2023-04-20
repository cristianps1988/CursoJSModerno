// Composition o composición
// Escribir funciones de uso general para usarlas en varios objetos diferentes

const obtenerNombre = info => ({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`)
    }
})

const guardarEmail = info => ({
    agregarEmail(email){
        console.log(`Agregando email a ${info.nombre}`)
        info.email = email 
    }
})

const obtenerEmail = info => ({
    mostrarEmail(){
        console.log(`Email: ${info.email}`)
    }
})

const obtenerEmpresa = info => ({
    mostrarEmpresa(){
        console.log(`Email: ${info.empresa}`)
    }
})

const obtenerPuesto = info => ({
    mostrarPuesto(){
        console.log(`Email: ${info.puesto}`)
    }
})

function Cliente(nombre, email, empresa){
    let info = {
        nombre, 
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
    )
}

function Empresa(nombre, email, puesto){
    let info = {
        nombre, 
        email,
        puesto
    }
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    )
}

const cliente = Cliente('Cristian', null, 'B&M Travels')
cliente.mostrarNombre()
cliente.agregarEmail('cristian@correo.com')
cliente.mostrarEmail()
cliente.mostrarEmpresa()

console.log('-----------------------')

const empresa = Empresa('B&M Travels', null, 'CEO')
empresa.mostrarNombre()
empresa.agregarEmail('b&mtravels@correo.com')
empresa.mostrarEmail()
empresa.mostrarPuesto()