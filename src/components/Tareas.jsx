import { Table } from "./Table";

export const Tareas = ({ tasks, handleToggleTask, handleDeleteTask}) => {

  return (

    <>

      <h2>Tareas</h2>

      {!tasks[0] ? <span className="margin2topbot">Actualmente no hay tareas que mostrar.</span>:
      <table>
      <tbody>

        {
          tasks.map(task => (
            <Table
              {...task}
              handleToggleTask={handleToggleTask}
              key={task.id}
              handleDeleteTask={handleDeleteTask}
            />
          ))
        }

      </tbody>
    </table>
      }

    </>

  );

};