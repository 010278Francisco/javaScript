/**09 Diciembre 2021 */
//By Carlos Eduardo(Bootcam)
/**Variable var se utilizaba anteriormente
 *  son variables globales */

/*Variable let es una variable de contexto, 
  solo vive en un bloque de codigo
*/


var numero = 40;
console.log(numero);//40

if(true){
    var numero =50;
    console.log(numero)//50
}

console.log(numero);//50



var  texto = "Bootcam Java";
console.log(texto);// Bootcam Java

if(true){//Empieza bloque
    let texto = "Cohorte 8";
    console.log(texto);// Cohorte 8
    let numeroFavorito=76;

}//Termina Bloque
console.log(numeroFavorito);
console.log(texto);// Cohorte 8