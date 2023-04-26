// Class pattern

class Persona {
    constructor(nombre, correo){
        this.nombre = nombre
        this.correo = correo
    }
}

const persona = new Persona('Cristian', 'cristian@correo.com')

console.log(persona)