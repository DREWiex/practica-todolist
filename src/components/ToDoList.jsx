import { Form } from "./Form";
import { Tareas } from "./Tareas";
import { useTodoList } from "../hooks/useToDoList";

export const ToDoList = () => {

  const { tasks, handleNewTask, handleDeleteTask } = useTodoList();

  return (

    <>

      <Form handleNewTask={handleNewTask}/>

      <Tareas tasks={tasks} handleDeleteTask={handleDeleteTask} />

    </>

  );

};