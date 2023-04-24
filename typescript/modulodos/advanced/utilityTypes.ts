//centralizar la mayoria de las utilities
//Partial <T>
interface Task {
    id: number;
    name: string;
    description: string; 
    //pondria opcional estas opciones, lo permitirá pero no es la mejor manera
   /*  id?: number;
    name?: string;
    description?: string; */
}

function updateTask(id: string, task: Partial<Task>) {

}
const newTask = { name: "Daniela" };
updateTask("1", newTask);

//Required<T>
interface ToDo{
    id?: number;
    name?: string;
}
//const myTodo: Required<ToDo> = {};

//Records<Keys, Types> Para la creación de objetos
//{ key: value }
interface CatInfo {
    age: number;
    name: string;
}
type CatName = "chingu" | "minki";

const cats: Record<CatName, CatInfo> = {
    chingu: {age: 4, name: ""},
    minki: {age: 4, name: ""}
};

//Pick <T, Properties>
//toma propiedades de una interfaz, toma las propiedades
interface Tarea { //el pick me dice de todos seleccioná este 
    title: string;
    description: string;
    completed: boolean;
}
type TareaPreview = Pick<Tarea, "title" | "completed">;
const otherTarea: TareaPreview = { title: "clean", completed: false }

//Omit es lo opuesto a pick, de todos no selecciones este
//<T, Properties>
type TareaOmitted = Omit<Tarea, "description">;
const tareaOmitted: TareaOmitted = {title:"clean", completed:false} //tendrá todo menos el description