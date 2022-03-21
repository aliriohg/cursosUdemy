'use strict'

//function
// Una funcion es una agrupacion reutilizable de un conjunto de instrucciones


// Definicion dela funcion
function calculadora() {
    return 'Llamado funcion calculadora';
}

//llamado de la funcion
calculadora();


//parametros opcional
function calculadora2(numero1, numero2, mostrar = false) {
    if (mostrar) {
        console.log(numero1 + numero2)
    }
}

calculadora2(10, 15);