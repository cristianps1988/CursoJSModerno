// cambiar CSS con JS

const cambio = document.querySelector('h1');
cambio.style.fontFamily = 'Arial';
cambio.style.fontSize = '20';
cambio.style.backgroundColor = 'blue';
cambio.style.textTransform = 'uppercase';

// no es buena practica cambiar los estyles desde JS, para eso esta CSS
// lo mejor es agregar o quitar clases con JS

const nuevoStyle = document.querySelector('.card');
nuevoStyle.classList.add('primeraClase'); // agregar clase
console.log(nuevoStyle.classList); 
nuevoStyle.classList.add('segundaClase', 'terceraClase'); // podemos agregar mas de una clase al mismo tiempo

// borrar clase
nuevoStyle.classList.remove('card'); // removemos la clase card