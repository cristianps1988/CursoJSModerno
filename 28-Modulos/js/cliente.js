// exportar variables
export const nombreCliente = 'Cristian';
export const ahorro = 300;

// exportar funciones
export function mostrarInformacion(nombre, ahorro){
    return `Nombre ${nombre} - Ahorro $${ahorro}`
}

export function tieneSaldo(ahorro){
    return ahorro > 0 ? 'Tiene saldo' : 'No tiene saldo;'
}

// exportar clases
export class Cliente{
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }
    mostrarInformacion(){
        return `Nombre: ${this.nombre} - Ahorro: $${this.ahorro}`
    }
}

// export default
export default function nuevaFuncion(){
    console.log('Soy una funcion nueva desde el default export');
}