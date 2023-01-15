// ventajas de las arrow functions

// pasar parametros a la antigua

const estudiando = function(tecnologia){
    console.log(`Estoy aprendiendo ${tecnologia}`);
}
estudiando('javascript')

// pasar parametros en un arrow function de una sola linea
// los parametros son opcionales
const estudiando2 = tecnologia => `Estoy aprendiendo ${tecnologia}`;
console.log(estudiando2('Arrow functions'));

// cuando paso dos parametros, los parentesis son obligados
const estudiando3 = (tecnologia1, tecnologia2) => `Estoy aprendiendo ${tecnologia1} y ${tecnologia2}`;
console.log(estudiando3('node', 'react'));