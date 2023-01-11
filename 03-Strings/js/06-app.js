// .repeat para repetir
const producto = 'monitor de 20 pulgadas';
const precio = ' en promocion';

console.log(`${producto} ${precio.repeat(3)}!!!`); // repite 3 veces

// .split para dividir una string
const actividad = 'estoy aprendiendo javscript moderno';
console.log(actividad.split(' ')); // la divide donde hay espacios y la convierte en un array

const hobbies = 'leer, caminar, jugar, correr, bailar';
console.log(hobbies.split(', ')); //la divide donde hay coma y espacio, la convierte en un array

const tweet = 'aprendiendo vavascript #jsmoderno'
console.log(tweet.split('#')); // la divide donde esta el hastag