import { useState } from "react"

export const useForm = (estadoInicial) => {

    const [form, setForm] = useState(estadoInicial)
    const [sent, setSent] = useState(false)

    const serialiceForm=(form)=>{

        const formData=new FormData(form)

        const data={}
       
        for(let [key,value] of formData){
            console.log(key,value)
            data[key]=value

        }

        return data

    }

    const handleChange=({target})=>{
        const{name,value}=target

 
         if(form=='') return
 
         setForm({
             ...form,
             [name]:value
         })
     }

     return {
        form,
        handleChange,
        sent
      }
}


