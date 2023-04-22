interface Person { /* interface es como un boceto */
    name: string;
    code: string | number;
    charge: number;
    description?: string;
    sayHello: () => string;
}

let person: Person = { /* object: objeto primitivo, podemos sacar el Object */
    name: 'Kevin',
    code: '01',
    charge: 1,
    description: 'Hola',
    sayHello: () => {
        return 'Hola'
    },
};

/* qué pasa si quiero cambiar valores y crear otra nueva persona */
/* person.code = 50  me daria error*/

let secondPerson: Person = {
    name: "",
    code: "",
    charge: 0,
    /* description: "" puede que este sea opcional entonces iria signo de admiración */
    sayHello: () => 'Hola 2'
}

secondPerson.description?.toUpperCase();