class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // metodos
    mostrarInformacion(){
        return `Mr. ${this.nombre}, su saldo es de $${this.saldo}`
    }

    // metodo estatico
    static bienvenida(){
        return `Bienvenidos al banco`
    }
}

// herencia
class Empresa extends Cliente{ // empresa hereda de cliente 
    constructor(nombre, saldo, telefono, tipo) { // nombro todos los parametros
        super(nombre, saldo); // el super me llama los iguales al padre
        this.telefono = telefono; // escribo los parametros adicionales
        this.tipo = tipo;
    }

    // reescribir metodos
    static bienvenida(){
        return `Bienvenidos al banco de empresas`
    }
}

const crisDesign = new Empresa('crisDesign', 2000, 3212355, 'Web design');
console.log(crisDesign);
console.log(crisDesign.mostrarInformacion());
console.log(Cliente.bienvenida()); // el del padre queda intacto
console.log(Empresa.bienvenida()); // se reescribe el metodo