// fechas
const diaHoy = new Date();

let valor;
// los get, obtener
valor = diaHoy; // fecha completa de hoy
valor = diaHoy.getFullYear(); // el year
valor = diaHoy.getMonth(); // mes... enero es 0, febrero 1...
valor = diaHoy.getMinutes(); // minutos
valor = diaHoy.getHours(); // horas
valor = diaHoy.getTime(); // milisegundos desde el 1 de enero de 1970

// set
valor = diaHoy.setFullYear(2010);

console.log(valor);