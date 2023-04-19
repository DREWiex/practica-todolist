
export const Table = ({ id, newTask, description, done, handleToggleTask }) => {


    return (

        <>

            <tr>
                <td>
                    <strong>{newTask}</strong>
                    -
                    {description}
                    <button
                        id={id}
                        onClick={() => { handleToggleTask(id) }}
                    >
                        {!done && 'Pendiente' || done && 'Finalizada'}
                    </button>
                    <button id={id}>Eliminar</button>
                </td>
            </tr>

        </>

    );

};