const paises = [];

function nuevoPais(pais, cb){
    paises.push(pais);
    console.log(`Pais: ${pais}`);
    cb();
}

function mostrarPaises(){
    console.log(paises);
}

function callbackHell(){
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises);
        setTimeout(() => {
            nuevoPais('Holanda', mostrarPaises);
            setTimeout(() => {
                nuevoPais('Austria', mostrarPaises);
                setTimeout(() => {
                    nuevoPais('Portugal', mostrarPaises);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

callbackHell();