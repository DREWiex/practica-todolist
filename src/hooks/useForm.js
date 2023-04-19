import { useState } from "react"

export const useForm = (estadoInicial) => {

    const [form, setForm] = useState(estadoInicial);
   
    //const [sent, setSent] = useState(false);
    

    const handleChange = ({ target }) => {

        const { name, value } = target;

        if (form == '') return;

        setForm({
            ...form,
            [name]: value
        });

    };


    return {
        handleChange
    };

};