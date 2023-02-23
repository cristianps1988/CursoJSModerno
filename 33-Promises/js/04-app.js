const paises = [];

const nuevoPais = pais => new Promise(resolve => {
    setTimeout(() => {
        paises.push(pais);
        resolve(`Se agrego ${pais} a la lista`)
    }, 3000);
})

nuevoPais('Alemania')
    .then( resultado => { // ese parametro resultado es el resultado del resolve de arriba
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Francia')
    })
    .then(resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Holanda')
    })
    .then( resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Colombia')
    })
    .then( resultado =>{
        console.log(resultado);
        console.log(paises);
    })