// operador && para revisar que ambas condiciones se cumplan

const usuario = true;
const pago = false;

if(usuario && pago){
    console.log('Puede comprar');
} else if(!usuario && !pago){ // con ! se niega: si usuario es false...
    console.log('No tiene cuenta ni dinero');
} else if(!usuario){ 
    console.log('Sin iniciar sesion, autenticarse');
} else if(!pago){ // si pago es false...
    console.log('Fondos insuficientes');
}