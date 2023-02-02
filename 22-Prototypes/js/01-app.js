
// objeto literal
const carro = {
    marca: 'BMW',
    year: 2020
}

console.log(carro);

// object constructor

function Carro(marca, year){
    this.marca = marca,
    this.year = year
}

const carros = new Carro('Mercedes Benz', 2023);
console.log(carros);