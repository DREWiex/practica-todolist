
export const Table = ({ newTask = 'Título', description = 'Descripción', done = false, id = 1 }) => {



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