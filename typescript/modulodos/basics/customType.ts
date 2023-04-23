type Person = { /* asi estamos haciendo algo similar a interfaces, aunque se usan mas interfaces que tipos */
    name: string;
    code: string | number;
    description?: string;
};

const newPerson: Person = {
    code: "H",
    name: "kevin"
};

type ServiceResponse = string | null | number | undefined; /* nuestro tipo abarca las siguientes caracteristicas */ 
let response: ServiceResponse;

type UserCharges = "admin" | "normal" | "superUser" /* estoy creando un tipo con cosas super especificas */
const myUserType: UserCharges = "normal" /* tengo solo estas opciones, me da error si agrego otra cosa */