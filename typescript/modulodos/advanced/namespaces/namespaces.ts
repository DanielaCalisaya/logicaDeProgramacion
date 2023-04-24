//código ordenado para eso quizás quiero tener un archivo aparte
//en donde ponga todo segmentado y ordenado alli podemos usar los namespaces

namespace DatabaseEntity {
    //podemos guardar funciones, clases, variables, lo q necesitemos y después exportarlos
    export class User {
        constructor(public name: string){
        }
    }

    const myUser = new User("Daniela");
    console.log(myUser);
    
}

/* me lo llevo al otro archivo... index.ts ->
const myOtherUser = new DatabaseEntity.User("Nañe");
console.log(myOtherUser); */