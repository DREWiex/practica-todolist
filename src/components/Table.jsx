import { useTodoList } from "../hooks/useToDoList";

export const Table = ({ id, newTask, description, done }) => {

    const { handleToggleTask } = useTodoList();

    return (

        <>

            <td>
                <strong>{newTask}</strong>
                -
                {description}
                <button onClick={handleToggleTask}> 
                    {!done && 'Pendiente' || done && 'Finalizada'}
                </button>
                <button id={id}>Eliminar</button>
            </td>

        </>

    );

};