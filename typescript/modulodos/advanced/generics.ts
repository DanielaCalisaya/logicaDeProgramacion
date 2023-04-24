const age: number = 15; //pero necesitamos que todo sea dinámico

interface MyInterface<T> { //aqui tengo una interfaz q es dinámico y genérico
    field: T;
}
interface Example {
    id: string;
    name: string;
}
const myValue: MyInterface<number> = { //puedo cambiar el valor en number y poner example
    field: 3
    //aquí dentro si o si debe ser number, sino cambio el parámetro para poner string
};

class MyClass<T> {
    field: T;
    constructor(field: T){
        this.field = field;
    }
}
const myObject: MyClass<string> = new MyClass("holaa") //si o si pedirá un string, pero si cambio puede ser un number o un objeto, varias cosas

function getData<T>(id: string): Promise<T> | void {}

//Example with classes 
interface UserResponse {
    id: number;
    name: string;
} 
class HttpResponse<T> {
    data: T;
    status: number;
    code: number;

    constructor(data: T, status: number, code: number) {
        this.data = data;
        this.status = status;
        this.code = code;
    }
}

const fetchUser = (): UserResponse => {
    return {
        id: 1, 
        name: "Ñañe",
    }
}
const myUser = fetchUser();
const res = new HttpResponse(myUser, 200, 3);
console.log(res);

class CRUD<T> {
    private items: T[];
    constructor(items: T[]){
        this.items = items;
    }
    addItems(item:T){ //centralizamos la lógica
        this.items.push(item);
    }
    removeLastItem(){ //el código es genérico
        this.items.pop();
    }
    printItems(): T[]{
        return this.items;
    }
}
const users: UserResponse[] = [
    { id: 1, name: "Daniela" },
    { id: 2, name: "Código" },
    { id: 3, name: "Facilito" },
]
const userCRUD: CRUD<UserResponse> = new CRUD(users);
userCRUD.addItems({id:4, name: "Typescript"})
console.log(userCRUD.printItems());