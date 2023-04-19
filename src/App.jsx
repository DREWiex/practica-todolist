import { ToDoList } from "./components/ToDoList";


function App() {


  return (

    <>

      <header className="flex bg-green">

        <p>Práctica TodoList</p>

      </header>

      <main className="flex">

        <h1>Lista de tareas</h1>

        <ToDoList />

      </main>

      <footer className="flex bg-green">

        <p>Práctica TodoList</p>

      </footer>

    </>

  );

};

export default App;