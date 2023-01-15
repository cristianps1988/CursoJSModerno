// como se comunican las funciones

primerFuncion();

function primerFuncion(){
    console.log('Iniciando app');
    segundaFuncion();
}

function segundaFuncion(){
    console.log('Desde la segunda funcion');
    terceraFuncion('Cristian');
}

function terceraFuncion(nombre){
    console.log(`Bienvenido ${nombre}`);
}