//¿Cómo declaramos funciones en typescript?
//podemos declarar arrow functions
var sayHi = function (name) {
    console.log("Hola ".concat(name));
};
sayHi("Daniela");
//y también podemos crearla con la palabra reservada functions
function sayGoodbye(name) {
    console.log("Adios ".concat(name));
}
sayGoodbye("Dani");
var response = {
    id: 1,
    name: "Dani",
    charge: "Developer",
    number: 3
};
//podemos tipar nuestras variables pero también nuestras funciones
function show(_a) {
    var name = _a.name;
    //response tendrá esa extructura
    console.log("Ella se llama ", name);
    //(name: string[]): number {
    /* void puede que pasen cosas pero no retornamos nada */
    //console.log("Hola");
    //name. -> me trae todo para trabajarlo
    return 1;
}
//const response = show();
//puedo tipar los parámetros
show(response);
