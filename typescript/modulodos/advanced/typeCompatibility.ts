//case 1
/* interface Pet { 
    ejemplo tomado de la documentación
    name: string;
}
class Dog {
    name: string;
}
let pet: Pet;
pet = new Dog();
pet.name */

//case 2
/* interface Pet {
    name: string;
}
let pet:Pet;
let dog = { name: "Dani", owner: "rudd" };
pet = dog;
console.log(pet); */

//case 3
/* interface Pet {
    name: string;
}
let dog = {name: "Lassie", owner: "Rudd"};
function great(pet: Pet) {
    console.log("hello, " + pet.name);
}
great(dog) */

//case 4
/* enum Status { 
    ayuda a representar una enumeración pero con palabras
    Ready,
    Waiting,
}
enum Color {
    Red,
    Blue,
    Green,
}
let stat = Status.Ready;
stat = Color.Green; 
no se pueden comparar */

//case 5
/* class Animal {
    feat: number;
    constructor(name: string, newFeet: number) {}
}
class Size {
    feet:number;
    constructor(numFeet: number) {}
}
let a: Animal;
let s: Size;
a = s;
s = a; */

//case 6
/* interface Empty<T>{}
let x: Empty<number>;
let y: Empty<string>;
x = y; */

//case 7 
/* interface NotEmpty<T> {
    data: T, tipo genérico
}
let x: NotEmpty<number>; será un objeto que tenga de tipo number, no lo puedo refaccionar
let y: NotEmpty<string>;
x = y; */