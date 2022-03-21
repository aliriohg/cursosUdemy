/**
 * Calculadora:
 * Pida dos numeros por pantalla
 * Si metemos uno mal que nos los vuelva a pedir
 * en el cuerpo de la pagina, en un alerta y por la consola el resultado de suma restar multiplacar y dividir esas dos cifras
 */

var numero1 = parseInt(prompt('Ingrese el primer numero', 0));
var numero2 = parseInt(prompt('Ingrese el segundo numero', 0));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt('Ingrese el primer numero', 0));
    numero2 = parseInt(prompt('Ingrese el segundo numero', 0));
}

var resultado = "la suma es: " + (numero1 + numero2) + "<br/>" +
    "la resta es: " + (numero1 - numero2) + "<br/>" +
    "la multiplicacion es: " + (numero1 * numero2) + "<br/>" +
    "la divicion es: " + (numero1 / numero2) + "<br/>";

var resultadoLog = "la suma es: " + (numero1 + numero2) + "\n" +
    "la resta es: " + (numero1 - numero2) + "\n" +
    "la multiplicacion es: " + (numero1 * numero2) + "\n" +
    "la divicion es: " + (numero1 / numero2) + "\n";

document.write(resultado);
alert(resultadoLog);
console.log(resultadoLog);