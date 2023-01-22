// queryselector

const card = document.querySelector('.card');
console.log(card); // me retorna solo el primero que encuentra

// se puede especificar como en CSS
const info = document.querySelector('.premium .info');
console.log(info);

// seleccionar segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// para seleccionar IDs
const formulario = document.querySelector('#formulario');
console.log(formulario);

// seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);