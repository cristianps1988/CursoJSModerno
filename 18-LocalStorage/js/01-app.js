// solo almacena strings

localStorage.setItem('nombre', 'cristian'); // almacenamiento local, permanece aun cerrando la ventana

sessionStorage.setItem('nombre', 1); // almacenamiento de sesion, solo dura mientras esta la ventana abierta

// guardar objetos en localstorage
const producto = {
    nombre: 'nevera',
    precio: 900
} 

const productoString = JSON.stringify(producto); // convertirlo a string
localStorage.setItem('producto', productoString);

// guardar arrays en localstorage
const meses = ['enero', 'febrero', 'marzo'];

const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', mesesString);