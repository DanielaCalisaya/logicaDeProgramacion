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
var pet;
var dog = { name: "Dani", owner: "rudd" };
pet = dog;
console.log(pet);
