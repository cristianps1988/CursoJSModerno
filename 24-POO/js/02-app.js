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
// instanciar
const cristian = new Cliente('Cristian', 500);
console.log(cristian);
console.log(cristian.mostrarInformacion());
console.log(cristian.bienvenida()); // asi da error
console.log(Cliente.bienvenida()); // se llama desde la clase