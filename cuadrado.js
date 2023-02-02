/* 
Dibujar un cuadrado hueco con asteriscos
Ejemplo:
cuadrado(4)
****
*  *
*  *
****

-funcion para crear el lado de arriba y abajo del cuadrado
-funcion que haga los lados y el huevo del cuadrado
-bucle de 0 al tamaño del lado menos 2 para equilibrar con el lado de arriba y abajo
-bucle para pintar los espacios, menos 2 pñara equilibrar con el asterisco de izq. y der.
-Ir concatenando en una variable cada linea del cuadrado
-Mostrar el cuadrado en la funcion principal

 */

function lado(numero){
    let lado ='';

    for(let i = 0; i < numero; i++){
            lado += '*';
        }
    return lado;
}
function cuadrado(numero){
    let dibujo= lado(numero) + "\n";

    let contenido = "";
   
    for (let i = 0; i < (numero-2); i++) {
        contenido="*";
        for(let x=0; x< (numero-2);x++){
            contenido += ""
        }
    contenido += "*"
    dibujo += contenido + "\n"
    
   } 
    contenido += '*'

    dibujo +=lado(numero);
    return dibujo
}
console.log(cuadrado(4));