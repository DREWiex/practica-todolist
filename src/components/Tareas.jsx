import { Table } from "./Table";
import { getLocal } from "../helpers/localStorage";

export const Tareas = ({ tasks }) => {

  console.log(getLocal());

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