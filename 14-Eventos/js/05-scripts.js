// // eventos del scroll

// // window.addEventListener('scroll', () =>{
// //     console.log('scrolling');
// // }); // me va a detectar cuando estoy dando scroll

// window.addEventListener('scroll', () => {
//     const scrollPX = window.scrollY; // capturo los pixeles que doy scroll
//     console.log(scrollPX);
// }); // cuando voy hacia abajo, va sumando... para arriba va restando

// forma para animar al hacer scroll
window.addEventListener('scroll', () => {

    const premium = document.querySelector('.premium'); // selecciono el elemento
    const ubicacion = premium.getBoundingClientRect();
    console.log(ubicacion); // ejemplo para calcular la distnacia
    console.log( ubicacion.top < 750 ? 'Ahora se ve' : 'Aun no se ve');
    // aqui le meteria algo de CSS para que se anime
})