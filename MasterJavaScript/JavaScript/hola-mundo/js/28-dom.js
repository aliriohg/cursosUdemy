'use strict'

//DOM Document Object Model
var caja = document.querySelector('#micaja');
caja.innerHTML = '¡TEXTO EN LA CAJA DESDE JS!';
caja.style.background = 'red';
caja.style.padding = '20px';
caja.style.color = 'white';

function cambiarColor(color) {
    caja.style.background = color;
}

// Conseguir elementos por su etiqueta

var todosLosDiv = document.getElementsByTagName('div');

for (var valor in todosLosDiv) {

    if (typeof todosLosDiv[valor].textContent == 'string') {
        var parrafo = document.createElement('p');
        var texto = document.createTextNode(todosLosDiv[valor].textContent);
        parrafo.appendChild(texto);
        document.querySelector('#miseccion').appendChild(parrafo);
    }
}

// conseguir elementos por su clase css
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = 'yellow';

for (var indice in divsRojos) {
    if (divsRojos[indice].className == 'rojo') {
        divsRojos[indice].style.background = 'red';
    }
}


// query selector 
var claseRojo = document.querySelector('.rojo')
console.log(claseRojo);

//querySelectorAll
var arrayClaseRojo = document.querySelectorAll('.rojo');
console.log(arrayClaseRojo)