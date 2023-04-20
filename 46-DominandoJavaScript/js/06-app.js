// New binding

function Auto(año, modelo){
    this.año = año, // aqui estoy agregando un nuevo binding con .this
    this.modelo = modelo
} 

const auto = new Auto(2020, 'Camaro')
console.log(auto)

// window binding

window.color = 'Black'

function mostrarColor(){
    console.log(color)
}

mostrarColor()