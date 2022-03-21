'use strict'

// Pruebas con let y var
var numero = 40;
console.log(numero); // valor 40

if (true) {
    var numero = 50;
    console.log(numero); //valor 50
}

console.log(numero); //valor 50

var texto = "Curso JS";
console.log(texto); //valor curso

if (true) {
    let texto = "Hola variable let";
    console.log(texto); // valor hola
}

console.log(texto); // valor curso