import { Table } from "./Table";

export const Tareas = ({ tasks, handleToggleTask }) => {


  return (

    <>

      <h2>Tareas</h2>

      <table>
        <tbody>

          {

            tasks.map(task => (
              <Table
                {...task}
                handleToggleTask={handleToggleTask}
                key={task.id}
              />
            ))

          }

        </tbody>
      </table>

    </>

  );

};