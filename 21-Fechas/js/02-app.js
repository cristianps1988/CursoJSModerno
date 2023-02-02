// libreria moments
const diaHoy = new Date();
console.log(diaHoy);

moment.locale('es'); // idioma
console.log(moment().format('DD MMMM YYYY h:mm:ss a')); //crear formato personalizado
console.log(moment().format('LLLL', diaHoy)); // pasar a formato la fecha creada
console.log(moment().add(3, 'days').calendar()); // agregar dias a la fecha actual