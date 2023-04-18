/* console.log("hola"); */
/* Typescript reconoce que tipo de dato esta almacenando la variable.
Al posicionarme sobre la variable age me indica que tipo es. */
/* let age = 20;  */
/* Tipos de datos */
var age = 20; /* le indico que quiero que sea de tipo number */
/* let age: number = '20';  ->  Dará error porque le decimos number pero tenemos un tipo string*/
var letras = 'hola';
var verdadero = true;
var persona = {};
/* Esta sintaxis para array es la que menos se usa  ->
let frutas: Array<string> = ['ananá, pera, naranja']; */
var frutas = ["manzana", "pera"];
var fruits = [{}, { name: "ananá" }];
/* any se refiere a que podría ser de cualquier tipo
Algunos tipos de datos son muy complejos de tipar, por eso se ofrece esta solucion, es preferible evitarlo */
var response = "Hola";
response = 20;
response = true;
response = ["Hola", 23];
/* Función... void significa que no retorna nada, ejecuta cosas pero no va a retornar nada */
/* function saludar(): void {
    console.log("Hola");
} */
var response2; /* no sabe de que tipo es */
response2 = true;
if (response) {
}
var response3 = null; /* no estan disponibles o están vacias */
var response4 = undefined; /* no han sido definidas, nunca tuvo un valor */
var response5; /* number | null = 5; */ /* puede tener cualquiera de esos valores, puede tener cualquiera de esos valores */
/* response5?.toString(); */ /* pregunta si es string */
/* typescript permite crear mis propios tipos de datos */
var responseProducts;
var responsePartners;
responsePartners === null || responsePartners === void 0 ? void 0 : responsePartners.toString().concat("");
