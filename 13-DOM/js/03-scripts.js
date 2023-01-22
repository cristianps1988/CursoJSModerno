// seleccionar elemento por ID

const formulario = document.getElementById('formulario');
console.log(formulario);

// seleccionar elemento que no existe
const noExiste  = document.getElementById('no-existe');
console.log(noExiste); // retorna un null

// los id se deben utilizar solo una vez en el html
// en caso que hayan 2, solo me retornara el primero que encuentre