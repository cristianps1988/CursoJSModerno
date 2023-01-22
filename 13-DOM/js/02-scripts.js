// seleccionar elementos por clase

const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

// varios elementos con la misma clase
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

// elementos que no existen
const noExiste = document.getElementsByClassName('No-existe');
console.log(noExiste); // aroja un HTML collection vacio