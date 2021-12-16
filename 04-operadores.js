/**
 * Operadores atirmeticos nos sirven para hacer operaciones 
 
 + Suma sirve para sumar o concatenar 
 - Sirve para Restar numeros
 * Sirvepara multiplicar numeros
 % Modulo nos sirve para obtener el residuo para dividir dos numero
 / division nos sirve para dividir dos numeros

*/
//parseint para convertir los datos entrantes en valores numericos
const numero1 = parseInt( prompt("Ingresa el numero 1"));
const numero2 = parseInt( prompt("Ingresa el numero 1"));
const suma = (numero1) + (numero2);
const resta = numero1 - numero2;
const divicion = numero1 / numero2;
const multiplicacion = numero1 * numero2;
const modulo = numero1 % numero2;

console.log(suma);
console.log(resta);
console.log(divicion);
console.log(multiplicacion);
console.log(modulo);

/*
    OPERADORES LÓGICOS
    And &&
    Or ||
    Not !
*/

/*
Ejercicio de operadores lógicos:

    Imagen en carpeta: "ejercicio para analizar.png"
    1. verdadero
    2. falso
    3. falso
    4. falso
    5. verdadero
    6. verdadero
    7. verdadero
    8. falso
    9. falso
    10. verdadero
    11. verdadero
    12. falso
    13. verdadero
    
    Básicamente: 
    Para todo AND, si existe un falso, el resultado será falso. De lo contrario, es verdadero.
    Para todo OR, si existe un verdadero, el resultado será verdadero. De lo contrario, es falso. 
    Para todo NOT, se invierte de verdadero a falso y viceversa. Hay que notar si afecta a toda la expresión o solo a un operador lógico (falso/verdadero).
    
*/