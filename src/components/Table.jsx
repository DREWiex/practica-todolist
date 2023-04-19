
export const Table = ({ id, newTask, description, done, handleToggleTask }) => {


    return (

        <>

            <tr>
                <td>
                    <div>
                        <strong>{newTask}</strong> - {description}
                    </div>
                    <div>
                        <button
                            id={id}
                            onClick={() => { handleToggleTask(id) }}
                        >
                            {!done && 'Pendiente' || done && 'Finalizada'}
                        </button>
                        <button id={id}>Eliminar</button>
                    </div>
                </td>
            </tr>

        </>

    );

};