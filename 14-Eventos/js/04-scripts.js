// evento submit en un formulario

const formulario = document.querySelector('#formulario');

// con una funcion anonima
formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // evito que haga lo que por defecto hace, ir a .../buscar
    console.log('Buscando...'); // le puedo pasar algo que hacer
    console.log(e.target.method); // saber que metodo esta utilizando
    console.log(e.target.action); // la accion que esta ejecutando
});

// con una funcion declarativa

formulario.addEventListener('submit', validarFormulario);
function validarFormulario(e){
    e.preventDefault(); // tambien tengo que prevenir la accion por defecto
    console.log('Buscando desde funcion declarativa...');
    console.log(e.target.method); // igual que arriba
    console.log(e.target.action); // igual que arriba
}