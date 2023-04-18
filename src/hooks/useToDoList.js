import { useReducer } from "react";

export const useTodoList = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);


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
      handleToggleTodo
  }
}
