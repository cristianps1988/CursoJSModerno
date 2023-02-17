// importar una clase a heredar
import {Cliente} from './cliente.js'

export class Empresa extends Cliente{
    constructor(nombre, ahorro, categoria){
        super(nombre, ahorro);
        this.categoria = categoria;
    }
    mostrarInformacion(){
        return `Nombre: ${this.nombre} - Ahorro: $${this.ahorro} - Categoria: ${this.categoria}`
    }
}