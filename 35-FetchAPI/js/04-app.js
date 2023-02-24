const cargarApiBtn = document.querySelector('#cargarAPI');
cargarApiBtn.addEventListener('click', cargarDatos);

function cargarDatos(){
    const url = 'https://picsum.photos/list';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => imprimirHtml(resultado))
}

function imprimirHtml(datos){
    const contenido = document.querySelector('.contenido');
    let html = '';
    datos.forEach(dato => {
        const {author, post_url} = dato;
        html += `
            <p>Autor: ${author} </p>
            <a href="${post_url}" target="_blank">Ver imagen</a>
        `
    });
    contenido.innerHTML = html;
};

