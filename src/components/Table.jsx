
export const Table = ({ id, newTask, description, done, handleToggleTask }) => {


    return (

        <>

            <tr>
                <td>
                    <div className={done ? 'opacity line-through' : ''}>
                        <strong>{newTask}</strong> - {description}
                    </div>
                    <div>
                        <button
                            id={id}
                            className={!done && 'pendiente' || done && 'finalizada'}
                            onClick={() => { handleToggleTask(id) }}
                        >
                            {!done && 'Pendiente' || done && 'Finalizada'}
                        </button>
                        <button
                            id={id}
                            className="eliminar"
                        >
                            Eliminar
                        </button>
                    </div>
                </td>
            </tr>

        </>

    );

};