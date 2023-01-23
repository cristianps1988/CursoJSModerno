// eventos del teclado

const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown', () => {
    console.log('Escribiendo...');
}); // al presionar la tecla


// tambien tenemos:
// keyup: al soltar la tecla
// blur: al dar click por fuera del elemento luego de haber entrado
// copy: al copiar un texto
// paste: al pegar un texto
// cut: al cortar un texto
// input: registra todos los eventos (copy, paste, keyup, etc), menos el blur

busqueda.addEventListener('input', (e) =>{
    console.log(e);
}); // capturar informacion sobre todos los eventos en el input

busqueda.addEventListener('input', (e) => {
    console.log(e.target.value);
}) // capturamos lo que el usuario escriba

busqueda.addEventListener('input', (e) => {
    if(e.target.value === ''){
        console.log('Fallo la validacion');
    }
}); // asi puedo validar formularios con campos vacios