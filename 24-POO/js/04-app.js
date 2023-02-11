// propiedades privadas

class Cliente{
    #nombre; // declaramos que nombre va a ser privado
    constructor(nombre, saldo){
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Mr. ${this.#nombre}, su saldo es de $${this.saldo}`
    }

    static bienvenida(){
        return `Bienvenidos al banco`
    }
}

const cristian = new Cliente('Cristian', 800);
console.log(cristian);
console.log(cristian.mostrarInformacion());
// console.log(cristian.#nombre); // da error porque es privado


// otra forma con set y get

class Cliente2{
    #nombre;
    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre;
    }
}

const cristian2 = new Cliente2();
cristian2.setNombre('Cristian')
console.log(cristian2);
console.log(cristian2.getNombre());