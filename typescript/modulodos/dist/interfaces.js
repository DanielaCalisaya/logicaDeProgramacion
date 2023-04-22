var _a;
var person = {
    name: 'Kevin',
    code: '01',
    charge: 1,
    description: 'Hola',
    sayHello: function () {
        return 'Hola';
    },
};
/* qué pasa si quiero cambiar valores y crear otra nueva persona */
/* person.code = 50  me daria error*/
var secondPerson = {
    name: "",
    code: "",
    charge: 0,
    /* description: "" puede que este sea opcional entonces iria signo de admiración */
    sayHello: function () { return 'Hola 2'; }
};
(_a = secondPerson.description) === null || _a === void 0 ? void 0 : _a.toUpperCase();
