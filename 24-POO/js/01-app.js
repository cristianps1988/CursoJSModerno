// class expresion
class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}
// instanciar
const cristian = new Cliente('Cristian', 500);
console.log(cristian);



// class declaration
const Cliente2 = class{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const cristian2 = new Cliente('Cristian', 600);
console.log(cristian2);