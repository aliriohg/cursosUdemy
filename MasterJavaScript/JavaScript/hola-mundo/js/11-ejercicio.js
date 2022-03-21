'use strict'

/**
 * Programa que pida dos numeros y que nos diga cual es el mayor, cual es el menor y si son iguales
 * Plus: Si los numeros son iguales a cero o no son un numero que los veulva a pedir
 */

var numero1 = parseInt(prompt('Introduce el primer numero', 0));
var numero2 = parseInt(prompt('Introduce el segundo numero', 0));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt('Introduce el primer numero', 0));
    numero2 = parseInt(prompt('Introduce el segundo numero', 0));
}

if (numero1 == numero2) {
    alert('los numeros son iguales')
} else if (numero1 > numero2) {
    alert('El numeor mayor es:' + numero1);
    alert('El numeor menor es:' + numero2);

} else if (numero1 < numero2) {
    alert('El numeor mayor es:' + numero2);
    alert('El numeor menor es:' + numero1);
} else {
    alert('Introduce numeros correctos')
}