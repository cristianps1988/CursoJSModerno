const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    const url = 'data/empleado.json';
    fetch(url)
        .then( respuesta => respuesta.json(respuesta))
        .then( resultado => mostrarHtml(resultado))
}

function mostrarHtml(empleado){
    const contenido = document.querySelector('.contenido');
    const {nombre, trabajo, empresa, id} = empleado;
    contenido.innerHTML = `
        <p>ID: ${id}</p>
        <p>Nombre: ${nombre} </p>
        <p>Trabajo: ${trabajo} </p>
        <p>Empresa: ${empresa} </p>
    `;
}