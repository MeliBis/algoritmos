//dado un número, devolver su tabla de multiplicar completa
/* 
-función con parametro 'numero'
- variable con texto encabezado
- bucle del 1 al 10
-concatenar a la variable string con multipolicacion y su resultado */

function tablaMultiplicar (number){
    var title=`la tabla del ${number} es : \n`;

    for(let i=1; i<=10; i++){
        let multiplicacion = (i*number)
        console.log(multiplicacion);
        title += `${i} x ${number} = ${multiplicacion} \n`;
    }
  return title;
}
console.log(tablaMultiplicar(6));