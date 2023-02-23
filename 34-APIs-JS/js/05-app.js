document.addEventListener('visibilitychange', () => {
    console.log(document.visibilityState === 'visible' ? 'Reproducir video' : 'Parar video');
})