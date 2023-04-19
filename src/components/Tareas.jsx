import { Table } from "./Table";

export const Tareas = ({tasks, handleDeleteTask }) => {

  return (

    <>

      <h2>Tareas</h2>

      <table>
        <tbody>
          <tr>

            {

              tasks.map(task => (
                <Table {...task} key={task.id} handleDeleteTask={handleDeleteTask}/>
              ))

            }

          </tr>
        </tbody>
      </table>

    </>

  );

};