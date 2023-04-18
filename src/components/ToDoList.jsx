import { Tareas } from "./Tareas";

export const ToDoList = () => {

  const newTodo = [
    {
      id: Date.now(),
      newTask: 'Título de la tarea',
      description: 'Descripción de la tarea',
      done: false,
      date: new Date()
    }
  ];

  return (

    <>



      <Tareas tareas={newTodo}/>

    </>

  );

};
