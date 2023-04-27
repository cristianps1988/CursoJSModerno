// Prueba sencilla

function suma(a, b){
    return a + b
}

let resultado = suma(1, 2)
let esperado = 3

if(resultado !== esperado){
    console.error(`El numero ${resultado} es diferente a lo esperado, prueba fallida`)
} else{
    console.log('La prueba pasó correctamente')
}

// otro test
function resta(a, b){
    return a - b
}

resultado = resta(10, 3) // prueba mal implementada
esperado = 5

if(resultado !== esperado){
    console.error(`El numero ${resultado} es diferente a lo esperado, prueba fallida`)
} else{
    console.log('La prueba pasó correctamente')
}