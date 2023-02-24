const txtButton = document.querySelector('#cargarTxt');
txtButton.addEventListener('click', cargarDatos);

function cargarDatos(){
    const url = 'data/datos.txt';
    fetch(url)
        .then(respuesta => {
            console.log(respuesta);
            console.log(respuesta.status);
            console.log(respuesta.statusText);
            console.log(respuesta.type);
            console.log(respuesta.url);
            return respuesta.text();
        })
        .then( resultado => console.log(resultado))
        .catch(error => console.log(error))
}