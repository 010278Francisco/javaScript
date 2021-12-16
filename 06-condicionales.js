
/**Condicionales se utilizan para tomar dessiones en nuestr programa
 * 
 * 
 * 
   if (){
       codigo
       codigo
       codigp


   }
 */






let edad = parseInt(prompt("Ingrese su edad"));

if(edad >= 18 && edad <30){
    document.write("Eres un JOVEN");
}else if (edad >= 30 && edad< 60){
    document.write("Eres un ADULTO");

}else if (edad>=60){
    document.write("Eres un adulto MAYOR");
}else{
    document.write("Eres un niñe");
}