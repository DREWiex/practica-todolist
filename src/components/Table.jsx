
export const Table = ({ id, newTask, description, done }) => {



    return (

        <>

            <td>
                <strong>{newTask}</strong>
                -
                {description}
                <button> 
                    {!done && 'Pendiente' || done && 'Finalizada'}
                </button>
                <button id={id}>Eliminar</button>
            </td>

        </>

    );

};

//! falta evento onClick en button