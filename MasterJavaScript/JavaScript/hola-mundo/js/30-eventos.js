'use strict'

// Eventos del raton

var boton = document.getElementById('boton');

function cambiarColor() {
    if (boton.style.background == 'green') {
        boton.style.background = 'red';
    } else {
        boton.style.background = 'green';
    }
}

//click
var boton = document.querySelector('#boton');
boton.addEventListener('click', function() {
    cambiarColor();
})

// Mouse ober
boton.addEventListener('mouseover', function() {
    boton.style.background = '#ccc';
})