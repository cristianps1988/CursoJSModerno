// prevenir el event bubling
// bubling: cuando el evento se propaga por muchos lugares, con resultados inesperados

// ejemplo de bubling
// const card = document.querySelector('.card');
// card.addEventListener('click', () => {
//     console.log('Click en card');
// });

// const info = document.querySelector('.info');
// info.addEventListener('click', () => {
//     console.log('Click en info');
// });

// const titulo = document.querySelector('.titulo');
// titulo.addEventListener('click', () => {
//     console.log('Click en titulo');
// }); // cuando le doy click en este, se me disparan los 3 eventos



// solo agregamos un parametro y un stopPropagation
const card = document.querySelector('.card');
card.addEventListener('click', e => {
    e.stopPropagation();
    console.log('Click en card');
});

const info = document.querySelector('.info');
info.addEventListener('click', e => {
    e.stopPropagation();
    console.log('Click en info');
});

const titulo = document.querySelector('.titulo');
titulo.addEventListener('click', e => {
    e.stopPropagation();
    console.log('Click en titulo');
}); // solucionado