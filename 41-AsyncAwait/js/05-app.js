// diferencia entre promise y async await

const key = '23278091-88565a34117caf8eb3f6677f3';
const url = `https://pixabay.com/api/?key=${key}&q=cats`

document.addEventListener('DOMContentLoaded', obtenerDatos2)

// con promise 
function obtenerDatos(){
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => console.log(resultado))
        .catch(error => console.log(error))
}

// con async await

async function obtenerDatos2(){
    try {
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        console.log(resultado)
    } catch (error) {
        console.log(error)
    }
}