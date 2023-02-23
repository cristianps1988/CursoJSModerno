window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado(){
    console.log(navigator.onLine ? 'Conectado a internet' : 'No esta conectado...');
}