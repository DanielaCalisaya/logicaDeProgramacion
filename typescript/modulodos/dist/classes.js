var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* Las clases se basan en prototipos por detrás */
/* Classes: es un molde armado que nos servirá para otras cosas */
var Animal = /** @class */ (function () {
    function Animal() {
        this.age = 4; //En este caso es privado, no se sabrá, solo accesibles a las classes
        this.identity = "333";
        //Es la función en si que representa el animal, que construye nuestro objeto
    }
    Animal.prototype.saludo = function () {
        console.log("miaaaau", this.age); //Agregando esto aquí puedo acceder a su edad
    };
    return Animal;
}());
var myAnimal = new Animal();
myAnimal.saludo(); /* tenemos acceso a las propiedades y los métodos, menos a age */
/* herencia */
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super.call(this) || this;
    }
    Dog.prototype.saludo = function () {
        this.identity; //puedo acceder a protected
    };
    return Dog;
}(Animal));
var myDog = new Dog();
myDog.name; //Tengo acceso a las propiedades de Animal, estoy extendiendo (también al type)

/* class User{} las clases existen dentro de javascript, en cambio interface no lo entiende */