import { useReducer } from "react";
import { reducerTask } from '../reducers/taskReducer';

export const useTodoList = () => {

  const [tasks, dispatch] = useReducer(reducerTask, []);


  const handleNewTask = (newTask) => {

    const action = {

      type: '[TASK] add task',
      payload: newTask

    };

    dispatch(action);
     
  };

  const handleDeleteTask = (id) => {
    
  }

  const handleToggleTask = (id) => {

    console.log('Hola');
     
  }


  return {
    handleToggleTask
  };

};