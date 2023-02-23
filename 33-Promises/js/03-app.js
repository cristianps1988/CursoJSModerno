const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = true;
    if(descuento){
        resolve('Descuento aplicado');
    } else{
        reject('No se aplico descuento')
    }
})

aplicarDescuento
    .then( resultado => descuento(resultado) )
    .catch( error => console.log(error) )


// Hay 3 posibles respuestas:
// fullfilled = el promise se cumplio
// rejected = el profmise no se cumplio
// pending = no se cumplio pero tampoco se rechazo

function descuento(mensaje){
    console.log(mensaje);
}