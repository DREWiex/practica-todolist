import { useForm } from "../hooks/useForm";

export const Form = ({ handleNewTask }) => {

    const { handleChange } = useForm('');

    const handleSubmit = (ev) => {

        ev.preventDefault();

        const newTask = {
            id: Date.now(),
            newTask: ev.target.newTask.value,
            description: ev.target.description.value,
            done: false,
            date: new Date()
        };

        handleNewTask(newTask);

        ev.target.newTask.value = '';
        ev.target.description.value = '';

    };


    return (
        <>

            <h2>Añadir tarea</h2>

            <form action="" onSubmit={handleSubmit} className="flex">

                <input
                    type="text"
                    id="newTask"
                    name="newTask"
                    placeholder="Tarea"
                    onChange={handleChange}
                />

                <textarea
                    name="description"
                    id="description"
                    cols="50"
                    rows="10"
                    placeholder="Descripción"
                    onChange={handleChange}>
                </textarea>

                <input
                    type="submit"
                    value="Añadir tarea"
                />

                {
                    //sent && <p>Formulario enviado </p>
                }

            </form>

        </>
    )
}
