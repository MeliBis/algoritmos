/* ¿cuanto es el x por ciento de x numero?
ejemplo:
tantoPorCiento (20,100) -->devuelve: 20

como hacerlo:
-funcion con parametros 'porcentaje' y 'numero'
-crear una variable para la operacion del porcentaje
-devolver string que responda a la pregunta del enunciado
*/

function tantoPorCiento(porcentaje, numero){
    let operacion= (numero * (porcentaje/100))
    let resultado = `el ${porcentaje}% de ${numero} es ${operacion}`
    
    return resultado
}
console.log(tantoPorCiento(55,100));
