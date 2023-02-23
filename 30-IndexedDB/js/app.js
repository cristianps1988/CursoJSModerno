let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 5000);
})

function crmDB(){
    // crear BD 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    // si hay un error
    crmDB.onerror = function(){
        console.log('Error al crear la base de datos');
    }

    // si se creo bien 
    crmDB.onsuccess = function(){
        console.log('Base de datos creada correctamente');
        DB = crmDB.result;
    }

    // configuracion de la base de datos
    crmDB.onupgradeneeded = function(e){
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        // definir columnas
        objectStore.createIndex('nombre', 'nombre', {unique: false});
        objectStore.createIndex('email', 'email', {unique: true});
        objectStore.createIndex('telefono', 'telefono', {unique: false});
    }
}

function crearCliente(){
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function(){
        console.log('Transaccion completada');
    }

    transaction.onerror = function(){
        console.log('Hubo un error en la transaccion');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        nombre: 'Cristian',
        email: 'correo@correo.com',
        telefono: 12424589
    }

    const peticion = objectStore.add(nuevoCliente)
    console.log(peticion);
}