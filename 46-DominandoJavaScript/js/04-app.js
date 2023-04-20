// Implicit binding
// Se utiliza .this para que busque el valor en el scope local de una función

const usuario = {
    nombre: 'Cristian',
    edad: 23,
    información(){
        console.log(`El usuario ${this.nombre} tiene ${this.edad} años`) // aqui al this se refiere a lo que esta en usuario
    },
    mascota: {
        nombre: 'Samanta',
        edad: 3,
        información(){
            console.log(`El usuario ${this.nombre} tiene ${this.edad} años`) // aqui al this se refiere a lo que esta en mascota
    }
    }
}

usuario.información()
usuario.mascota.información()