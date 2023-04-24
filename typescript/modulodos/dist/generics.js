var age = 15; //pero necesitamos que todo sea dinámico
var myValue = {
    field: 3
    //aquí dentro si o si debe ser number, sino cambio el parámetro para poner string
};
var MyClass = /** @class */ (function () {
    function MyClass(field) {
        this.field = field;
    }
    return MyClass;
}());
var myObject = new MyClass("holaa"); //si o si pedirá un string, pero si cambio puede ser un number o un objeto, varias cosas
function getData(id) { }
var HttpResponse = /** @class */ (function () {
    function HttpResponse(data, status, code) {
        this.data = data;
        this.status = status;
        this.code = code;
    }
    return HttpResponse;
}());
var fetchUser = function () {
    return {
        id: 1,
        name: "Ñañe",
    };
};
var myUser = fetchUser();
var res = new HttpResponse(myUser, 200, 3);
console.log(res);
var CRUD = /** @class */ (function () {
    function CRUD(items) {
        this.items = items;
    }
    CRUD.prototype.addItems = function (item) {
        this.items.push(item);
    };
    CRUD.prototype.removeLastItem = function () {
        this.items.pop();
    };
    CRUD.prototype.printItems = function () {
        return this.items;
    };
    return CRUD;
}());
var users = [
    { id: 1, name: "Daniela" },
    { id: 2, name: "Código" },
    { id: 3, name: "Facilito" },
];
var userCRUD = new CRUD(users);
userCRUD.addItems({ id: 4, name: "Typescript" });
console.log(userCRUD.printItems());
