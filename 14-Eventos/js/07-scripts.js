// solucionando el event bubbling con delegation

const card = document.querySelector('.card');
card.addEventListener('click', e => {
    if(e.target.classList.contains('categoria') ){
        console.log('Diste click en el categoria');
    }
    if(e.target.classList.contains('titulo') ){
        console.log('Diste click en el titulo');
    }
    if(e.target.classList.contains('precio') ){
        console.log('Diste click en el precio');
    }
})