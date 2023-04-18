import { Table } from "./Table";

export const Tareas = ({ tareas }) => {

  return (

    <>

      <h2>Tareas</h2>

      <table>
        <tbody>
          <tr>

            {

              tareas.map(tarea => (
                <Table {...tarea} key={tarea.id}/>
              ))

            }

          </tr>
        </tbody>
      </table>

    </>

  );

};