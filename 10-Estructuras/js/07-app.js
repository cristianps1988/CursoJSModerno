// OR || que se cumpla una y otra condicion

const efectivo = 100;
const credito = 1300;
const disponible = efectivo + credito;
const totalPago = 600;

if(efectivo >= totalPago || credito >= totalPago || disponible >= totalPago){
    console.log('Puede pagar');
} else {
    console.log('Fondos insuficientes');
}