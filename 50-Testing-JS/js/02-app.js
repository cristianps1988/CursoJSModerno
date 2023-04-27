// Crear una función para hacer la prueba

function suma(a, b){
    return a + b
}

let resultado = suma(1, 2)
let esperado = 3
expected(esperado).toBe(resultado)
expected(esperado).toEqual(resultado)


function resta(a, b){
    return a - b
}

resultado = resta(10, 5)
esperado = 5
expected(esperado).toBe(resultado)
expected(esperado).toEqual(resultado)




function expected(esperado){
    return {
        toBe(resultado){
            if(resultado !== esperado){
                console.error(`El numero ${resultado} es diferente a lo esperado, prueba fallida`)
            } else{
                console.log('La prueba pasó correctamente')
            }
        },
        toEqual(resultado){
            if(resultado !== esperado){
                console.error(`El numero ${resultado} no es igual a lo esperado, prueba fallida`)
            } else{
                console.log('La prueba pasó correctamente')
            }
        }
    }
}