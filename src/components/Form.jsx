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

    };


    return (
        <>

            <h2>Create Task</h2>

            <form action="" onSubmit={handleSubmit}>

                <input
                    type="text"
                    id="newTask"
                    name="newTask"
                    placeholder="Task"
                    onChange={handleChange}
                />

                <textarea
                    name="description"
                    id="description"
                    cols="50"
                    rows="10"
                    onChange={handleChange}>
                </textarea>

                <button
                    type="submit">
                    Add Task
                </button>

                {
                    //sent && <p>Formulario enviado </p>
                }

            </form>

        </>
    )
}
