// problema que solucionan los prototypes

function Cliente(nombre, saldo){
    this.nombre = nombre,
    this.saldo = saldo
}

const cristian = new Cliente('Cristian', 500);
console.log(cristian);

function formatearCliente(cliente){
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene $${saldo} en su cuenta`
}

console.log(formatearCliente(cristian));

// si el proyecto crece y tengo otras clases como por ejemplo
function Empresa(nombre, saldo, sector){
    this.nombre = nombre,
    this.saldo = saldo,
    this.sector = sector
}

const andina = new Empresa('Andina', 5000, 'Educacion');

console.log(formatearCliente(andina)); // ahora tiene otro parametro... entonces debo hacer otra funcion

function formatearEmpresa(empresa){
    const { nombre, saldo, sector} = empresa;
    return `El cliente ${nombre} tiene $${saldo} de cuenta y pertenece al sector de ${sector}`;
}
console.log(formatearEmpresa(andina));

// en proyectos grandes, con muchas clases se vuelve insostenible crear tantas funciones nuevas y hacer tantos ajustes