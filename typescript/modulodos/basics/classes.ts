/* Las clases se basan en prototipos por detrás */
/* Classes: es un molde armado que nos servirá para otras cosas */
class Animal {
    name: "chingu";
    private age = 4; //En este caso es privado, no se sabrá, solo accesibles a las classes
    protected identity = "333";
    constructor() { //todas las classes pueden acceder al método constructor
        //Es la función en si que representa el animal, que construye nuestro objeto
    }
    saludo() {
        console.log("miaaaau", this.age); //Agregando esto aquí puedo acceder a su edad
    }
}

const myAnimal: Animal = new Animal();
myAnimal.saludo(); /* tenemos acceso a las propiedades y los métodos, menos a age */

/* herencia */
class Dog extends Animal{
    type: "Pastor alemán";

    constructor() {
        super()
    }

    saludo(): void {
        this.identity //puedo acceder a protected
    }
}

const myDog: Dog = new Dog();
myDog.name //Tengo acceso a las propiedades de Animal, estoy extendiendo (también al type)