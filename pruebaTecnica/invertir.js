/* 
dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres, sin usar métodos propios del lenguaje solo estructuras de control (no utilizar métodos)

Ejemplos: 
invertir('hola')     --> devuelve 'aloh
invertir('melissa'). --> devuelve 'assilem'

como hacerlo:
-funcion con parametro 'texto'
-crear una variable para guardar la cadena invertida
-bucle que recorra el string y guarde los caracteres en la variable
*/


function invertida(texto){
    let invertido = '';

    for(let letra of texto){
       invertido = letra + invertido
    }
    return invertido
}
console.log('texto invertido: ', invertida('melissa'));

//utilizando metodos:
function invertir(texto){
    return texto.split('').reverse().join('')
}
console.log('el texto invertido es: ', invertir('micaela'));