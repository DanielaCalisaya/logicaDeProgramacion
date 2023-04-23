interface PersonInterface { 
    //Es un modelo, son descriptivas, no ejecutan nada, podemos ordenar como serán los objetos
    name: string;
    code: string | number;
    charge: number;
    description?: string;
    token: string;
    sayHello: () => string;
}

class PersonClass {
    sayHello() {
        console.log("holis");      
    }
}

//const personOne: PersonInterface = {}; Es algo más plano
const personTwo: PersonClass = new PersonClass();
personTwo.sayHello();    

interface PetInterface {
    sayHello: () => string;
}

class PetClass {
    sayHello(){
        return "Hola"
    }
}

class Dog implements PetInterface { //debe incluir el sayHello
    sayHello () {
        return "Hola desde dog"
    };
}

class Cat extends PetClass {} //solo estoy extendiendo no implementando, extends me trae todo
