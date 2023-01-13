
const autenticado = true;

// Nivel principiante
if(autenticado === true){
    console.log('Puede ingresar');
} else{
    console.log('No puede ingresar');
}

// Nivel intermedio
if(autenticado){
    console.log('Puede ingresar');
}else{
    console.log('No puede ingresar');
}

// Nivel avanzado
console.log(autenticado ? 'Puede ingresar' : 'No puede ingresar');