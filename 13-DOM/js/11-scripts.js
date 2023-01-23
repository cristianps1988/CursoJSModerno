// ejemplo avanzado

// seleccionamos el boton y el footer
const boton = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

// disparamos el evento al dar click ... opcion 1
// boton.addEventListener('click', () =>{
    // aqui va el codigo...
// }); // puede ser con una funcion anonima

// opcion 2
boton.addEventListener('click', mostrarOcultarFooter); // no es necesario parentesis

function mostrarOcultarFooter(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        boton.classList.remove('activo');
        boton.textContent = 'Idioma y Moneda';
    }else{
        footer.classList.add('activo');
        boton.classList.add('activo');
        boton.textContent = 'X Cerrar';
    }
}