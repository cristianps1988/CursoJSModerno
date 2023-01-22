// modificar textos o imagenes del del DOM

const cambio = document.querySelector('.contenido-hero h1');

cambio.innerText = 'Holis'; // si tiene la propiedad visibility:hidden, no lo encuentra
cambio.textContent = 'Holiss'; //aqui si lo encuentra
cambio.innerHTML = 'Holisss'; // trae todo el html

// cambiar imagen
const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';