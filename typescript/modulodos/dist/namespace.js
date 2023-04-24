//código ordenado para eso quizás quiero tener un archivo aparte
//en donde ponga todo segmentado y ordenado alli podemos usar los namespaces
var DatabaseEntity;
(function (DatabaseEntity) {
    //podemos guardar funciones, clases, variables, lo q necesitemos
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    DatabaseEntity.User = User;
    var myUser = new User("Daniela");
    console.log(myUser);
})(DatabaseEntity || (DatabaseEntity = {}));
var myOtherUser = new DatabaseEntity.User("Nañe");
console.log(myOtherUser);
