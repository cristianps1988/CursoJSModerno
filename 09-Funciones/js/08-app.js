// funciones que retornan valores

function sumar(a, b){
    return a + b; // tengo que ponerle un return 
}

const resultado = sumar(4,2); // debo guardarlo en una variable
console.log(resultado); // ahora muestro la variable 

// ejemplo mas avanzado

// hacer una funcion que sume lo que se le agregue, luego le sume 15% 
// de impuestos y al final muestre el resultado a pagar

let total = 0;

function carrito(producto){
    return total += producto;
}

function impuesto(total){
    return total * 1.15;
}

carrito(900);
carrito(50);
carrito(400);
carrito(1900);
carrito(100);
carrito(800);

const totalPago = impuesto(total);

console.log(`El total a pagar es ${total}`);