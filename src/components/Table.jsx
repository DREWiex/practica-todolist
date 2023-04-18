import { useTodoList } from "../hooks/useToDoList";
import {setLocal} from "../helpers/localStorage"

export const Table = ({ id, newTask, description, done }) => {

    const { handleToggleTask, handleDeleteTask } = useTodoList();

    

    const deletingTask = () => {

        console.log(id)
        handleDeleteTask(id);
        // setLocal();
      }

    return (

        <>

            <td>
                <strong>{newTask}</strong>
                -
                {description}
                <button onClick={handleToggleTask}> 
                    {!done && 'Pendiente' || done && 'Finalizada'}
                </button>
                <button onClick={deletingTask}>Eliminar</button>
            </td>

        </>

    );

};