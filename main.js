
// Typewriter
const h2 = document.getElementById('typewriter');

const typewriter = new Typewriter(h2, {
    loop: true,
    delay: 75
})

typewriter
    // VER TODOS LOS METODOS DISPONIBLES EN GITHUB
    // Lo que quiero que se escriba
    .typeString('Frutas, Verduras, Dietéticos...')
    // Pequeña pausa con su intervalo de tiempo
    .pauseFor(200)
    // Marco nuevamente el inicio
    .start()