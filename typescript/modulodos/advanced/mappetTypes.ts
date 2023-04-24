//crear tipos de manera dinamicas basandonos en otros tipos o interfaces
interface Person {
    name: string;
    age: number;
}

/* interface GetPerson { 
    no es mantenible porq constantemente vamos a tener que copiar
    getName: () => string;
    getAge: () => number;
} */

interface User {

}

type Getter<T> = {
    [Property in keyof T as `get${Capitalize<string & Property>}`]: () => [Property]; //con los corchetes le indicamos a ts q tendrá un valor calculado q tendrá q resolver y ejecutar
    //hago un recorrido por cada propiedad del tipo q le estoy mandando
}
type GetPerson = Getter<Person>;


interface Animal{
    id: string;
    name: string;
    type: number;
    isAdopted: boolean;
}
type GetAnimal = Getter<Animal> //asi tengo la interfaz y es escalable