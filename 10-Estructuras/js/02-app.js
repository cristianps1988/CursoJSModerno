// comparador de diferencia

const puntaje = 1000;;
const puntaje2 = '1000';

if(puntaje != 1001){
    console.log('Si es diferente');
} else{
    console.log('no es diferente');
}

// comparador de diferencia estricto
if(puntaje2 !== 1000){
    console.log('si es diferente');
}else{
    console.log('No es diferente');
}

// comparador menos estricto ==
if(puntaje == '1000'){
    console.log('Es igual');
} else{
    console.log('Es diferente');
}

// comparador estricto ===
if(puntaje === '1000'){
    console.log('Es igual');
} else{
    console.log('Es diferente');
}