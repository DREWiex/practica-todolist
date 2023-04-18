import { useReducer } from "react";
import { reducerTask } from '../reducers/taskReducer';
import { getLocal } from '../helpers/localStorage';

export const useTodoList = () => {

  const [tasks, dispatch] = useReducer(reducerTask, [], getLocal);


  const handleNewTask = (newTask) => {

    const action = {

      type: '[TASK] add task',
      payload: newTask

    };

    dispatch(action);
     
  };


  const handleDeleteTask = (id) => {
    


  };


  const handleToggleTask = (id) => {


     
  };


  return {
    tasks,
    handleNewTask,
    handleDeleteTask,
    handleToggleTask
  };

};