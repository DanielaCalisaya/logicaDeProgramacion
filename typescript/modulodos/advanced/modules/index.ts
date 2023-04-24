import { PI, generateId } from "./utils.module"; //Trae por destructuración la variable PI
//Si quiero cambiar el nombre... as para reemplazar o sobreescribir
import { User as Person } from "./utils.module";
//También podria exportar de esta manera... traeria todo lo que hay
//import * as Utils from "./utils.module";

const myNumber = 10 * PI;

const myUser: Person = { id: generateId().toString(), name: "Daniela" }

console.log("...");
