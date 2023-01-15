// ternarias

const autenticado = true;
const pago = false;

// ternaria simple
console.log( autenticado ? 'Puede ingresar' : 'No puede ingresar');

// podemos ponerle && o un ||
console.log(autenticado && pago ? 'Puede comprar' : 'No puede comprar');

// ternaria anidada
console.log(autenticado ? pago ? 'Puede ingresar' : 'Autenticado, pero no tiene dinero' : 'No esta autenticado');