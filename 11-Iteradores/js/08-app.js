// for.. in ..... especial para iterar objetos

const moto = {
    motor: 990,
    marca: 'Harley Davidson',
    color: 'Negro',
    modelo: 2022
}

for(let propiedad in moto){
    console.log(propiedad);
} // aqui me va mostrar las keys solamente

for(let propiedad in moto){
    console.log(moto[propiedad]);
} // aqui me va mostrar los values solamente

// Asi podemos iterar objetos mostrando keys y values
for(let [keys, values] of Object.entries(moto)){
    console.log(keys); // puedo obtener solo las keys
    console.log(values); // o los values
    console.log(`${keys} : ${values}`); // o ambos
}