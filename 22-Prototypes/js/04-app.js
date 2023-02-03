// heredar un prototype

function Cliente(nombre, saldo){
    this.nombre = nombre,
    this.saldo = saldo
}

Cliente.prototype.tipoCliente = function(){ 
    let tipo;
    if(this.saldo > 10000){
        tipo = 'Black';
    } else if(this.saldo > 5000){
        tipo = 'Platinum';
    } else{
        tipo = 'Gold';
    }
    return tipo;
} 

Cliente.prototype.clienteNombreSaldo = function(){
    return `El cliente ${this.nombre} tiene $${this.saldo} en su cuenta tipo ${this.tipoCliente()}`
}

Cliente.prototype.retiro = function(retiro){
    this.saldo -= retiro;
}

function Persona(nombre, saldo, telefono){
    Cliente.call(this, nombre, saldo); // heredamos nombre y saldo de Cliente, el this debe ir de primero siempre
    this.telefono = telefono
} // solo heredamos el constructor... no las funciones

// antes de instanciar, heredamos las funciones del proto de Cliente
Persona.prototype = Object.create(Cliente.prototype);

// heredar el constructor
Persona.prototype.constructor = Cliente; 


// instanciar 
const juan = new Persona('Juan', 8000, 4311243);
console.log(juan);
console.log(juan.clienteNombreSaldo());

// agregar una nueva funcion al proto de Persona
Persona.prototype.mostrarTelefono = function(){
    return `El telefono de ${this.nombre} es ${this.telefono}`;
}
console.log(juan.mostrarTelefono());