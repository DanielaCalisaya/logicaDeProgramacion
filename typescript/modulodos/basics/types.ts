/* console.log("hola"); */

/* Typescript reconoce que tipo de dato esta almacenando la variable. 
Al posicionarme sobre la variable age me indica que tipo es. */
/* let age = 20;  */

/* Tipos de datos */
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

/* Función... void significa que no retorna nada, ejecuta cosas pero no va a retornar nada */
/* function saludar(): void {
    console.log("Hola");
} */

let response2 : unknown; /* no sabe de que tipo es */
response2 = true;
if (response) {

}

let response3 = null; /* no estan disponibles o están vacias */
let response4 = undefined; /* no han sido definidas, nunca tuvo un valor */

/* TODO LO ESCRITO EN TYPESCRIPT ES PARA UN JAVASCRIPT PLANO SIN ERRORES */
/* Combinación de tipos */
/* typescript permite crear mis propios tipos de datos, nos ayuda a centralizar la lógica y no repetir tanto código */
type ResponseTypeService = string | undefined;
let response5: ResponseTypeService; /* number | null = 5; */ /* puede tener cualquiera de esos valores, puede tener cualquiera de esos valores */
/* response5?.toString(); */ /* pregunta si es string */

/* typescript permite crear mis propios tipos de datos */

let responseProducts: ResponseTypeService;
let responsePartners: ResponseTypeService;
responsePartners?.toString().concat("");

/* type assertion - castear los tipos de datos */
let message: any = "";
(message as string).slice(1); /* puede que tenga variables de un tipo y yo quisiera pasarlas a otro tipo */
let messageUppercase = <string>message;
messageUppercase.toUpperCase();

const canvas = document.getElementById("canvas") as HTMLCanvasElement;