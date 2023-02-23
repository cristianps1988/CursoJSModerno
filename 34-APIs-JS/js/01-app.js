const notificarBtn = document.querySelector('#notificar');
notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`))
});

const verNotificacionBtn = document.querySelector('#verNotificacion');
verNotificacionBtn.addEventListener('click', () => {
    if(Notification.permission === 'granted'){
        const noti = new Notification('Holis',{
            icon: 'img/ccj.png',
            body: 'Esta es la notificacion'
        })
        noti.onclick = function() {
            window.open('https://google.com')
        }
    }
});