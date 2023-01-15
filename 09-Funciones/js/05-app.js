// parametros y argumentos
function sumar(a, b){ // a y b son parametros
    console.log(a + b);
}

sumar(5,6); //5 y 6 son argumentos

// otro ejemplo
function saludar(nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Cristian', 'Camilo');
saludar('Cristian') // si no le paso el segundo argumento, me da undefined