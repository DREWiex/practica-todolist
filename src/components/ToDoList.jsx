import { useEffect, useReducer } from "react";
import { Form } from "./Form";
import { Tareas } from "./Tareas";
import { reducerTask } from '../reducers/taskReducer';
import { setLocal, getLocal } from '../helpers/localStorage';

export const ToDoList = () => {

  const [tasks, dispatch] = useReducer(reducerTask, [], getLocal);

  const onNewTask = (newTask) => {

    const action = {

      type: '[TASK] add task',
      payload: newTask

    };

    dispatch(action);

  };

  useEffect(() => {

    setLocal(tasks);

  }, [tasks]);


  return (

    <>

      <Form onNewTask={onNewTask} />

      <Tareas tasks={tasks} />

    </>

  );

};
