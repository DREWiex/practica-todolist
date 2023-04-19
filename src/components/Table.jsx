
export const Table = (task) => {

    const { id, newTask, description, done, handleDeleteTask, handleToggleTask } = task;

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
                        >{!done && 'Pendiente' || done && 'Finalizada'}</button>
                        
                        <button
                          className="eliminar"
                          onClick={()=>{handleDeleteTask(id)}}
                          >Eliminar</button>
                    </div>

                </td>
            </tr>

        </>

    );

};