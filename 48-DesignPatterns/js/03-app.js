// Singleton
// Previene que se creen multiples instancias de un un objeto

let instancia = null

class Persona{
    constructor(nombre, correo){
        if(!instancia){
            this.nombre = nombre
            this.correo = correo
            instancia = this
        } else {
            return instancia
        }   
    }
}

const persona = new Persona('Cristian', 'cristian@correo.com')
console.log(persona)

const persona2 = new Persona('Maidelin', 'maidelin@correo.com') // no me deja instanciarlo
console.log(persona2)  // me devuelve la primera instancia del objeto