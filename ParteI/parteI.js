/*
******FUNDAMENTOS INTERMEDIOS******
*Sigma - Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros positivos (incluyendo el número dado). 
*Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).
*/
function sigma(num) {
    var sum = 0;
    for (var i = 0; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
}
/*
*********************************************************************************************************************************************
*Factorial - Escribe una función factorial(num) que, dado un número, devuelva el producto (multiplicación) de todos los enteros positivos 
*(incluyendo el número dado). Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5).
*/
function factorial(num) {
    var mult = 1;
    for (var i = 1; i <= num; i++) {
        mult = mult * i;
    }
    return mult;
}
/*
*********************************************************************************************************************************************
*Fibonacci - Crea una función para generar números de Fibonacci. En esta famosa secuencia matemática, cada número es la suma de las dos 
*anteriores, partiendo con los valores 0 y 1. Tu función debería aceptar un argumento, un índice en la secuencia (donde 0 corresponde al 
*valor inicial, 4 corresponden al valor cuatro más tarde, etc). Ejemplos: 
*fibonacci(0) = 0 (dado)
*fibonacci(1) = 1 (dado)
*fibonacci(2) = 1 (fib(0)+fib(1), o 0+1)
*fibonacci(3) = 2 (fib(1) + fib(2)3, o 1+1)
*fibonacci(4) = 3 (1+2)
*fibonacci(5) = 5 (2+3)
*fibonacci(6) = 8 (3+5)
*fibonacci(7) = 13 (5+8)
*Haz esto primero sin usar recursión. Si no sabes qué es una recursión, no te preocupes puesto que vamos a introducir 
*este concepto en la Parte 2 de esta actividad. 
*/
function fibonacci(num) {
   x = [0,1];
   for (var i = 0; i <= num; i++) {
       x.push (x[i] + x[i+1]);
   }
   return x[num];
}
/*
*********************************************************************************************************************************************
*Array Penúltimo: Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] devuelve “Liam”. Si el array 
*es muy pequeño, devuelve null.
*/
function arrayPenultimo(x) {
    if (x.length > 1) { //Supongo que el array es pequeño sólo cuando tiene longitud 1
        return x[x.length-2];
    } else {
        return null;
    }
}
/*
*********************************************************************************************************************************************
*Array: “N” último: Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3), devuelve 4. Si el array es muy pequeño, devuelve null. 
*/
function nUltimo(arr,num) {
    if (arr.length>num-1) {
        return arr [arr.length-num];
    }
    return 'El largo del array es inferior al número dado'
}
/*
*********************************************************************************************************************************************
*Array: Segundo más grande: Devuelve el segundo elemento más grande de un array. Dado [42,1,4,3.14,7], devuelve 7.  Si el array es muy
*pequeño, devuelve null.
*/
function segundoMayor(x) {
    var primero = 0;
    var segundo = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i]>primero) {
            segundo = primero;
            primero = x[i];
        } else if (x[i]>segundo){
            segundo = x[i];
        }
    }
    return segundo;
}
/*
*********************************************************************************************************************************************
*Doble Problema Par: Crea una función que cambie un array dado duplicando cada uno de sus elementos en una posición par, y manteniendo el 
*orden original. Convierte [4, "Ulysses", 42, false]   a    [4,4, "Ulysses", 42, 42, false].
*/
function dobleProblema(x) {
    y = [];
    for (var i = 0; i < x.length; i++) {
        y.push (x[i]);
        y.push (x[i]);
    }
    return y;
}