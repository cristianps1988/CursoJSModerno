// traversing the DOM / recorriendo el DOM
// navegando hacia abajo

const navegacion = document.querySelector('.navegacion');
console.log(navegacion);
console.log(navegacion.childNodes); // toma los espacios escritos en el html como elementos
console.log(navegacion.children); // me trae solo elementos hijos
console.log(navegacion.firstElementChild); // trae el primer elemento hijo
console.log(navegacion.lastElementChild); // selecciona el ultimo elemento hijo


const card = document.querySelector('.card');
console.log(card.children[1].children[1].textContent);

card.children[1].children[1].textContent = 'Navegando el Dom desde JS con traversing';


// cambiando imagen con traversing
card.children[0].src = 'img/hacer2.jpg';


// navegando hacia arriba
console.log(card.parentNode); // toma los espacios como elementos
console.log(card.parentElement);
console.log(card.parentElement.parentElement); // dos ramas arriba


// navegando al siguiente elemento hermano
console.log(card.nextElementSibling); // siguiente hermano
console.log(card.nextElementSibling.nextElementSibling); // dos hermanos hacia adelante

const ultimoCard = document.querySelector('.card:last-of-type')
console.log(ultimoCard.previousElementSibling); // un hermanos hacia atras