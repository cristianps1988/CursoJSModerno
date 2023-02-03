//

function Cliente(nombre, saldo){
    this.nombre = nombre,
    this.saldo = saldo
}

// agregar funciones al prototype
Cliente.prototype.tipoCliente = function(){ // no se utiliza el arrow function (busca en el global)... el function busca en el local scope
    //console.log('desde el nuevo proto');
    //console.log(this.saldo); // busca la referencia del objeto actual

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

// agregando otra funcion que hace referencia a otro prototype
Cliente.prototype.clienteNombreSaldo = function(){
    return `El cliente ${this.nombre} tiene $${this.saldo} en su cuenta tipo ${this.tipoCliente()}`
}

// agregando una funcion que actualiza el objeto
Cliente.prototype.retiro = function(retiro){
    this.saldo -= retiro;
}

// instanciarlo
const cristian = new Cliente('cristian', 6000);

console.log(cristian.tipoCliente()); // utilizando la nueva funcion
console.log(cristian.clienteNombreSaldo());

// llamando funcion que actualiza el objeto
cristian.retiro(2000);
console.log(cristian.clienteNombreSaldo());

console.log(cristian);