// parametros por default

function saludar(nombre = 'Desconocido', apellido = ''){
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Cristian', 'Camilo'); // si le paso ambos, los muestra
saludar('Maidelin') // si no le paso el segundo, muestra un string vacio por default
saludar(); // si no le paso argumentos, muestra los parametros que estableci por default
