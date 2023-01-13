const boolean1 = true;
const boolean2 = false;
const boolean3 = 'true'; 

console.log(boolean1);
console.log(boolean2);
console.log(boolean1 == boolean3); // en este caso no convierte el string a boolean

console.log(typeof boolean1);

const boolean4 = new Boolean(true); // aqui contruye un boolean, pero el tipo es objeto
console.log(boolean4);
console.log(typeof boolean4);