/* Dada una vadena de TextDecoder, comprobar si es un palindromo o no 
Los palindromos son palabras que se leen igual aun estando invertido.
Por ejemplo: ana, bob, otto, allivessevilla
*/
/* 
- funcion con parametro texto
- separar el texto en un array de letras
-darle la vuelta
-unir el array de letras en un string y comparar con el parametro */

function palindromo(texto){
    let letras = texto.split('').reverse().join()
    //console.log(letras);
    return (letras === texto);
}

//split pasa cadena de texto a array, reverse invierte , join une elementos de un array en un solo texto

console.log('Es un palindromo?' + palindromo('melissa'));