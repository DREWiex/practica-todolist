import { useEffect } from "react";
import { Form } from "./Form";
import { Tareas } from "./Tareas";
import { setLocal } from '../helpers/localStorage';
import { useTodoList } from "../hooks/useToDoList";

export const ToDoList = () => {

  const {
    tasks,
    handleNewTask,
    handleDeleteTask,
    handleToggleTask
  } = useTodoList();


  useEffect(() => {

    setLocal(tasks);

  }, [tasks]);


  return (

    <>

      <Form handleNewTask={handleNewTask} />

      <Tareas
        tasks={tasks}
        handleToggleTask={handleToggleTask}
      />

    </>

  );

};