// diferencias entre function declaration y expression

// esta la puedo invocar antes de crearla
sumar();
function sumar(){
    console.log(2 + 2);
} // esta funciona

// esta no la puedo invocar antes de crearla
restar();
const restar = function(){
    console.log(6 - 3);
} // esta no funciona

// hoisting