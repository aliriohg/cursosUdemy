'use strict'

/**
 * Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
 */

var numero1 = parseInt(prompt('Introduce el primer numero', 0));
var numero2 = parseInt(prompt('Introduce el segundo numero', 0));

document.write("<h1>Numero impares de " + numero1 + " a " + numero2 + "</h1>")

for (var i = numero1; i <= numero2; i++) {
    if (i % 2 != 0) {
        document.write(i + "<br/>");
    }
}