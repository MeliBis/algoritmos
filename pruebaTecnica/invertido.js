//dado un número entero, inviertelo y devuelve de nuevo el entero

/* ejemplo:
invertirNumero(67) --> devuelve 76

como hacerlo:
- funcion que reciba un numero
- convertir numero en string
-crear un array por cada letra
-darle la vuelta
-unir el array en un string
-convertir el string en un entero
*/

function invertir(numero){
    let invertido = parseInt(numero
                    .toString()
                    .split('')
                    .reverse()
                    .join('')
                    )*Math.sign(numero)
   return invertido;
}
console.log('el numero invertido es ', invertir(85));