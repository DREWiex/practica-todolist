import { Table } from "./Table";

export const Tareas = ({ tasks }) => {

  return (

    <>

      <h2>Tareas</h2>

      <table>
        <tbody>
          <tr>

            {

              tasks.map(task => (
                <Table {...task} key={task.id} />
              ))

            }

          </tr>
        </tbody>
      </table>

    </>

  );

};