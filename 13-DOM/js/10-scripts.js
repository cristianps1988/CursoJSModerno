// crear html desde JS

// primero creamos el tipo de elemento a agregar
const nuevoEnlace = document.createElement('a'); // creamos un elemento de tipo a / enlace

// luego le agregamos el texto
nuevoEnlace.textContent = 'Nuevo Enlace';

// agregando atributos
nuevoEnlace.href = "#";
nuevoEnlace.classList.add('nueva-clase');

// puedo agregarle una funcion para que al hacerle click haga algo
nuevoEnlace.onclick = miFuncion;

function miFuncion(){
    alert('Holis');
}

// ahora lo agregamos al DOM, para eso tenemos que seleccionar al padre
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace); // este me lo agrega al final

// si lo queremos agregar en otro lado que no sea al final
navegacion.insertBefore(nuevoEnlace, navegacion.children[1]); // el primer argumento es lo que quiero agregar, el segundo en donde




// crear un card de forma dinamica
// crear los 3 parrafos
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Metal';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '1 palo por cabeza';
parrafo3.classList.add('precio');

// hacer la clase info y agregarle los parrafos
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// ahora la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer1.jpg';

// hacer el card y agregarle lo que hemos hecho
const card = document.createElement('div');
card.classList.add('card');
card.appendChild(imagen);
card.appendChild(info);

// insertar el card en el DOM
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card); // agregarlo de ultimo
contenedor.insertBefore(card, contenedor.firstChild); // agregarlo de primero
contenedor.insertBefore(card, contenedor.children[3]); // lo agrega antes del tercer hijo