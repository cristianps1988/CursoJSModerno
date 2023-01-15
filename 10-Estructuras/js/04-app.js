// varias condiciones con else if

const dinero = 300;
const pagar = 500;
const tarjeta = false;
const cheque = true;

if(dinero > pagar){
    console.log('Si puedo pagar');
} else if(tarjeta){
    console.log('Tengo la tarjeta para pagar');
} else if(cheque){
    console.log('Tengo cheque para pagar');
} 
else{
    console.log('Fondos insuficientes');
}