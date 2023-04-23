interface Person { 
    name: string;
    age: number;
} 

/*  <- interface, type seria asi:
type Person = {
    name: string;
    age: number;
} 
*/

/* nos permiten extender cierta funcionalidad Ej: */
/* aqui digo que este employe extiende de person */
interface Employee extends Person { /* -> si lo cambio a type, aqui no puedo extender el type de esta manera */
    charge: string;
} 
/* el charge fue incluido en el ambito de person */

const newEmployee: Employee = {
    name: "",
    age: 40,
    charge: "",
}
/* si arriba cambio la interface por el type también me permitiria extender  */

//union types
type User = {
    id: string;
};

type Admin = User & {token: string}; /* o escribir & Person. Entonces puedo extender un type de otro type */

/* const myAdmin: Admin = {
    
} */
/* aqui me pide el id pero tambien el token porque fue extendido el type */

type ServiceResponseToken = string | null | undefined | number; /* este type acepta estos valores */
type UserTypes = "admin" | "superUser" | 0;
const myUser: UserTypes = 0; /* si ponemos otro valor dará error */

interface Developer {
    name: string;
    stack: string [];
}

interface Developer {
    phone: string;
}

/* const me: Developer = {
    me hace referencia a los dos Developer, mergea las propiedades de cada una
};  */
/* quizas si agrego rompo el codigo, se puede hacer de otra manera */
/* se recomienda usar mas interface que type */