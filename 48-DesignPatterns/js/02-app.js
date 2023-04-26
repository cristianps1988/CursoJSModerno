// Constructor pattern
// Utilizar una clase padre y sobre ella heredar las demás

class Persona{ // clase padre
    constructor(nombre, correo){
        this.nombre = nombre
        this.correo = correo
    }
}

class Cliente extends Persona{ // clase que hereda
    constructor(nombre, correo, empresa){
        super(nombre, correo)
        this.empresa = empresa
    }
}

const persona = new Persona('Maidelin', 'maidelin@correo.com')
console.log(persona)

const cliente = new Cliente('Cristian', 'cristian@correo.com', 'MC travels')
console.log(cliente)