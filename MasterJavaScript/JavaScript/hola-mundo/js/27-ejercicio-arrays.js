'use strict'
/**
 * Pida 6 numeros por pantalla y los meta en un array
 * Mostrar el array entero en el cuerpo de la pagina y en la consola
 * ordenarlo y mostrarlo
 * Invertir su orden y mostrarlo
 * Mostrar cuantos elementos tiene el array 
 * Busqueda de un valor introducido por el usuario, que diga si lo encuentra y su indice
 */

function mostrarArray(elementos, textoCustom = "") {
    document.write('<h1>Contenido del array ' + textoCustom + '</h1>')
    document.write('<ul>');
    elementos.forEach(e => {
        document.write('<li>' + e + '</li>')
    })
    document.write('</ul>');
}

// Pedir 6 numeros
var numeros = [];

for (var i = 0; i < 6; i++) {
    numeros.push(parseInt(prompt('Digite el numero', 0)));
}

// Mostrar en el cuerpo de la pagina
document.write('<h1>Contenido del Array</h1>');
numeros.forEach(e => {
    document.write('<strong>' + e + '</strong><br/>');
})

// Mostrar Array en consola 
console.log(numeros);

var numerosOrdenados = numeros;
//Ordenar Arrat
for (var i = 0; i < numerosOrdenados.length; i++) {
    for (var j = 0; j < numerosOrdenados.length - i; j++) {
        if (numerosOrdenados[j - 1] > numerosOrdenados[j]) {
            let aux = numerosOrdenados[j - 1];
            numerosOrdenados[j - 1] = numerosOrdenados[j];
            numerosOrdenados[j] = aux;
        }
    }
}
console.log('numeros Ordenados: ', numerosOrdenados);
mostrarArray(numerosOrdenados, 'Numeros Ordenados');

//numeros Invertidos
var numerosInvertidos = numeros;

for (var i = 0; i < numerosInvertidos.length; i++) {
    for (var j = 0; j < numerosInvertidos.length - i; j++) {
        if (numerosInvertidos[j - 1] < numerosInvertidos[j]) {
            let aux = numerosInvertidos[j - 1];
            numerosInvertidos[j - 1] = numerosInvertidos[j];
            numerosInvertidos[j] = aux;
        }
    }
}
console.log('numeros Invertidos: ', numerosInvertidos);
mostrarArray(numerosInvertidos, 'Numeros Invertidos')

// cantidad de elementos
document.write('<h1>La cantidad de numeros es: ' + numeros.length + '</h1>');

// Busqueda
var busqueda = parseInt(prompt('Busca un numero: ', 0));
var posicion = numeros.findIndex(n => n == busqueda);

if (posicion && posicion != -1) {
    document.write('<h1>Encontrado</h1>');
    document.write('<h1>Posicion de la busqueda: ' + posicion + '</h1>');

} else {
    document.write('<h1>No Encontrado</h1>');

}