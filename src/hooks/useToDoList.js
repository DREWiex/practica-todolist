import { useReducer, useState } from "react";

export const useTodoList = () => {

  const [todos, dispatch] = useReducer(taskReducer, [], init);
  const [tasks, setTasks] = useState('')

  const getLocal = () => {
    console.log('Getting from lLocal Storage')
    return JSON.parse(localStorage.getItem('Tasks Storage')) || [];
  }
  
  const setLocal = () => {
    console.log('Setting Local Storage')
    localStorage.setItem('Tasks Storage', JSON.stringify(arrayTasks));
  }


  const handleNewTodo = (newTodo) => {
     
  }

  const handleDeleteTodo = (id) => {
    
  }

  const handleToggleTodo = (id) => {
     
  }


  return {
      todos,
      handleDeleteTodo,
      handleNewTodo,
      handleToggleTodo,
      setLocal,
      getLocal
  }
}
