/* 
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. 
*/

/* function sumar(a, b) {        -->
    return a + b
}
console.log(sumar(2, 4)); */

/* let sumando = (c, d) => c + d;   -->
console.log(sumando(4, 1)); */

let saludo = "Hola Mundo"
let miFuncion = saludo.length
console.log(miFuncion);

/* let segundoSaludo = saludo.slice
segundoSaludo(4)
console.log(segundoSaludo); */

let string = "Hola que tal!"
let nuevoString = string.split(' ')
console.log(nuevoString);

let otroSaludo = "Hola Mundo"
let repetir = otroSaludo.repeat(3)
console.log(repetir);