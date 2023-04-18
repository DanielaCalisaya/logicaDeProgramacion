/* console.log("hola"); */

/* Typescript reconoce que tipo de dato esta almacenando la variable. 
Al posicionarme sobre la variable age me indica que tipo es. */
/* let age = 20;  */

/* Tipos */
let age: number = 20; /* le indico que quiero que sea de tipo number */
/* let age: number = '20';  ->  Dará error porque le decimos number pero tenemos un tipo string*/
let letras: string = 'hola';
let verdadero: boolean = true;
let persona: Object = {};
/* Esta sintaxis para array es la que menos se usa  -> 
let frutas: Array<string> = ['ananá, pera, naranja']; */
let frutas: string[] = ["manzana", "pera"];
let fruits: Object[] = [{}, {name: "ananá"}];

/* any se refiere a que podría ser de cualquier tipo 
Algunos tipos de datos son muy complejos de tipar, por eso se ofrece esta solucion, es preferible evitarlo */
let response: any = "Hola";
response = 20;
response = true;
response = ["Hola", 23];