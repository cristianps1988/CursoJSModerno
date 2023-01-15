// arrow functions

const aprendiendo = function(){
    console.log('Aprendiendo javascript');
}
aprendiendo();

// Solo cambiamos la palabra function por una flecha y la ponemos al 
//lado derecho del parentesis

const aprendiendo2 = () => {
    console.log('Aprendiendo Javascipt');
}
aprendiendo2();

// cuando la funcion tiene una sola linea, se pueden quitar los corchetes
// tambien da por implicito el return

const aprendiendo3 = () => 'Aprendiendo Arrow functions'
console.log(aprendiendo3());