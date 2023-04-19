import { Table } from "./Table";

export const Tareas = ({ tasks, handleDeleteTask, handleToggleTask}) => {


  return (

    <>

      <h2>Tareas</h2>

      <table>
        <tbody>

          {
            tasks.map(task => (
              <Table
                {...task}
                handleDeleteTask={handleDeleteTask}
                handleToggleTask={handleToggleTask}
                key={task.id} />
            ))
          }

        </tbody>
      </table>

    </>

  );

};