import { ToDoList } from "./components/ToDoList";
import {Routes, Route, Navigate} from 'react-router-dom'
import { LoginForm } from "./Pages/LoginPage";
import { NavBar } from "./components/NavBar";

function App() {

  


  return (

    <>

  

      <header className="flex pendiente">

        <p>Práctica TodoList</p>

      </header>

      <nav>
          <NavBar />
      </nav>

      <main className="flex">

      <Routes>
          <Route path='/' element={<ToDoList />} />

          <Route path='login' element={<LoginForm />} />

          <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>

      </main>

      <footer className="flex bg-green">

        <p>Práctica TodoList</p>

      </footer>

    </>

  );

};

export default App;