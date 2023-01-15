// buenas practicas

const usuario = true;

if(usuario){ // no colocar: usuario == true
    console.log('Puede ingresar');
}

// evitar colocar else if, tras else if... mejor ponerlo 
//dentro de una funcion ne ifs separados

const puntaje = 400;

const revisarPuntos = () =>{
    if(puntaje >= 400){
        console.log('Excelente puntaje');
        return; // los return solo funcionan dentro de una funcion
    }

    if(puntaje >= 300){
        console.log('Buen puntaje');
        return; // el return hace que no se repita este if si no se cumple
    }
}

revisarPuntos();