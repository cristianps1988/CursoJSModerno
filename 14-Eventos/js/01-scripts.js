// eventos en Js

console.log(1);

document.addEventListener('DOMContentLoaded', () =>{
    console.log(2);
}); // este se carga de ultimo, luego que todo el html haya cargado

console.log(3);

// aparece en consola: 1, 3, 2