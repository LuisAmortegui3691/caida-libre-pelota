let pelota = document.querySelector('#pelota');

let posicionY = 0;
let velocida = 0;
let gravedad = 0.2;
let rebote = -0.8;

function caidaLibre() {
    velocida += gravedad;
    posicionY += velocida;

    if(posicionY + pelota.offsetHeight > window.innerHeight) {
        velocida *= rebote;
        posicionY = window.innerHeight - pelota.offsetHeight;
    }

    pelota.style.top = posicionY + "px";

    requestAnimationFrame(caidaLibre);
}

caidaLibre();