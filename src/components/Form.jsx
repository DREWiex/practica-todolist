import { useForm } from "../hooks/useForm";

export const Form = () => {

    const {form, setForm, handleChange, sent, setSent} = useForm('');

    const handleSubmit=(ev)=>{
        ev.preventDefault()

        const newTodo = {
            id: Date.now(),
            todo: 'Titulo de la tarea',
            description: '',
            done: false,
            date: new Date()
        }

        // const data=serialiceForm(ev.target)

        setForm(data)

        setSent(true)

    }

  return (
    <>

        <h2>Create Task</h2>

        <form action="">

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
            sent && <p>Formulario enviado </p> 
            }

        </form>
    
    </>
  )
}
