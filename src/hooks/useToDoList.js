import { useReducer } from "react";

export const useTodoList = () => {

  const [tasks, dispatch] = useReducer(taskReducer, [], init);


  const handleNewTask = (newTask) => {

    const action = {

      type: '[TASK] add task',
      payload: newTask

    };

    dispatch(action);
     
  };

  const handleDeleteTodo = (id) => {
    
  }

  const handleToggleTodo = (id) => {
     
  }


  return {
    handleNewTask
  };

};