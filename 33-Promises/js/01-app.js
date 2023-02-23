const paises = ['alemania', 'brasil', 'colombia', 'peru', 'chile'];

function nuevoPais(pais, cb){
    setTimeout(() => {
        paises.push(pais);
        cb();
    }, 2000);
}

function imprimirPaises() {
    setTimeout(() => {
        paises.forEach(e => {
            console.log(e);
        });
        console.log('----');
    }, 1000);
};

imprimirPaises(paises);

nuevoPais('Argentina', imprimirPaises)
