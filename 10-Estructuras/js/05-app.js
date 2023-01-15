// switch

const metodoPago = 'cheque';

switch(metodoPago){
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break; // siempre debo poner el break para detener la ejecucion
    case 'tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default:
        console.log('Metodo de pago no aceptado');
        break;
}