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
Factorial - Escribe una función factorial(num) que, dado un número, devuelva el producto (multiplicación) de todos los enteros positivos 
(incluyendo el número dado). Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5).
*/
function factorial(num) {
    var mult = 1;
    for (var i = 1; i <= num; i++) {
        mult = mult * i;
    }
    return mult;
}

