import { Form } from "./Form";
import { Tareas } from "./Tareas";
import { useTodoList } from "../hooks/useToDoList";

export const ToDoList = () => {

  const {
    tasks,
    handleNewTask,
    handleDeleteTask,
    handleToggleTask
  } = useTodoList();


  return (

    <>
    
      <section className="flex">

        <Form handleNewTask={handleNewTask} />

      </section>

      <section className="flex">

        <Tareas
          tasks={tasks}
          handleToggleTask={handleToggleTask}
        />

      </section>

    </>

  );

};