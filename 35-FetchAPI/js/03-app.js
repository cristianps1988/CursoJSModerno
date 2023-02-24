const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', cargarDatos);

function cargarDatos(){
    const url = 'data/empleados.json';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then( resultado => imprimirHtml(resultado))
        .catch(error => console.log(error))
}

function imprimirHtml(empleados){
    const contenido = document.querySelector('.contenido');
    let html = '';
    empleados.forEach(element => {
        const {id, nombre, trabajo, empresa} = element;
        html += `
        <p>ID: ${id}</p>
        <p>Nombre: ${nombre} </p>
        <p>Trabajo: ${trabajo} </p>
        <p>Empresa: ${empresa} </p>
        `
    });
    contenido.innerHTML = html;
}