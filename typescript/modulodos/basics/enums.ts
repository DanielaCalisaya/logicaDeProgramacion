/* Enums: tipo de dato q permite almacenar listas de valores estáticos */
/* enum - enumerador */
enum Users {
    NormalUser, /* = 5, si es que este valor no es 0, o letras -> "normal" todos se pueden cambiar */
    PayedUser,
    AdminUser,
    MegaUser,
}

const myUser = Users.AdminUser;
console.log(myUser);
/* imprimirá la posición de AdminUser osea 2 */