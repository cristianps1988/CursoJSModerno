// eventos del mouse

// primero seleccionamos el elemento
const nav = document.querySelector('.navegacion');

// registramos el evento
nav.addEventListener('click', () => {
    console.log('Click en el nav');
}); // con una funcion anonima puede ser

nav.addEventListener('mouseenter', () => {
    console.log('Entrando en el nav');
    nav.style.backgroundColor = 'white';
}); 

nav.addEventListener('mouseout', () => {
    console.log('Saliendo del nav');
    nav.style.backgroundColor = 'transparent';
}); 

nav.addEventListener('dblclick', () => {
    console.log('Dando doble click en el nav');
});  // doble click

// tambien estan:
// mousedown = cuando doy click
// mouseup = cuando suelto el click