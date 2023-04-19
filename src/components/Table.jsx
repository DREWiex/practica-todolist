
export const Table = ({ id, newTask, description, done, handleDeleteTask, handleToggleTask}) => {

    return (

        <>

            <td>
                <strong>{newTask}</strong>
                -
                {description}
                <button onClick={handleToggleTask}>
                    {!done && 'Pendiente' || done && 'Finalizada'}
                </button>
                <button onClick={()=>{handleDeleteTask(id)}}>Eliminar</button>
            </td>

        </>

    );

};