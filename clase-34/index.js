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

let segundoSaludo = saludo.slice
//segundoSaludo()
segundoSaludo[4]; 

let string = "Hola que tal!"
let nuevoString = string.split(' ')
console.log(nuevoString);

let otroSaludo = "Hola Mundo"
let repetir = otroSaludo.repeat(3)
console.log(repetir);

console.log("---------------------------------------");

/* Resolución */
//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
/* function contarCaracteres(cadena = "") {          --> función declarada
    if(!cadena) {
        console.warn("No ingresaste ninguna cadena");
    } else {
        console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
    }
}
contarCaracteres("Hola Mundo"); */

const contarCaracteres = (cadena = "") =>           //--> función expresada
    (!cadena) 
        ? console.warn("No ingresaste ninguna cadena")
        : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`)

contarCaracteres("Hola Mundo");


//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
const recortarTexto = (cadena = "", longitud = undefined) => 
    (!cadena)
        ? console.warn("No ingresaste una cadena de texto")
        : (longitud === undefined)
        ? console.warn("No ingresaste la longitud del texto")
        : console.info(cadena.slice(0, longitud));

recortarTexto("Hola Mundo", 4);
recortarTexto("Hola")


//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
const cadenaArreglo = (cadena = "", separador = undefined) => 
    (!cadena)
        ? console.warn("No ingresaste una cadena de texto")
        : (separador === undefined)
        ? console.warn("No ingresaste el caracter separador")
        : console.info(cadena.split(separador));

cadenaArreglo("Ejercicios de Lógica de Programación", " ")
cadenaArreglo()


//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
const repetirTexto = (texto = "", veces = undefined) => {
    if(!texto) return console.warn("No ingresaste un texto");
   
    if(veces === undefined) return console.warn("No ingresaste el número de veces a repetir");

    if(veces === 0) return console.error("El número de veces no puede ser 0");

    if(Math.sign(veces) === -1) return console.error("El número de veces no puede ser negativo")

    for(let i = 1; i <= veces; i++) console.info(`${texto}, ${i}`);
}

repetirTexto("Hola Mundo", 3);
repetirTexto("Hola Mundo", -7);
repetirTexto("Hola Mundo", 0);
repetirTexto("Hola Mundo");
repetirTexto("", 4);