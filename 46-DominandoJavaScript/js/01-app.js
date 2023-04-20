// Scope: alcance de una variable

// esta variable esta en el scope global
const cliente = 'Pedro'
const premium = true

function mostrarCliente(){
    // esta variable esta en el scope de la funcion, asi que se puede llamar igual
    const cliente = 'Andres'
    console.log(cliente)
    if(premium){
        // esta variable esta dentro del scope del bloque, asi que se puede llamar igual
        const cliente = 'Sancho'
        console.log(cliente)
    }
}

console.log(cliente)
mostrarCliente()