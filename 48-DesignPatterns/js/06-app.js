// Mixins

class Persona{
    constructor(nombre, correo){
        this.nombre = nombre
        this.correo = correo
    }
}

class Cliente{
    constructor(nombre, correo, empresa){
        this.nombre = nombre
        this.correo = correo
        this.empresa = empresa
    }
}

const funcionesPersona = { // este objeto de funciones se lo puedo agregar al proto de la clase
    mostrarInfo(){
        console.log(`Nombre: ${this.nombre}, Correo: ${this.correo}`)
    },
    mostrarNombre(){
        console.log(`Nombre: ${this.nombre}`)
    }
}

Object.assign(Persona.prototype, funcionesPersona) // agregando las funciones a la clase Persona

const persona = new Persona('Cristian', 'cristian@correo.com')
console.log(persona)
persona.mostrarInfo()
persona.mostrarNombre()

console.log('------------')

Object.assign(Cliente.prototype, funcionesPersona) // Tambien puedo agregar el objeto de funciones a la otra clase

const cliente = new Cliente('Maidelin', 'maidelin@correo.com', 'MC Travels')
console.log(cliente)
cliente.mostrarInfo()
cliente.mostrarNombre()