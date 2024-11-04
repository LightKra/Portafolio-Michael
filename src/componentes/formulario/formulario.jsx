import './formulario.css'
import { Boton } from "../boton/boton.jsx"
import { Aviso } from '../aviso/aviso.jsx';
import { useEffect, useForm, useState } from 'react';


export const Formulario = ()=>{
    const [form, setForm] = useState(false);

    const fetchFormulario = (event)=>{
        event.preventDefault();
        const newForm = new FormData(event.target);
        fetch("https://formspree.io/f/xnnqpovo",{
            method: "POST",
            body: newForm
        }).then(response=>response.json())
        .then(data=>console.log(data));
        event.target.reset();
        setForm(true)
    }
    
    return(
        <>
            <form className="formulario" onSubmit={fetchFormulario}>
                <input type="text" name="nombre" placeholder='Nombre' className='formulario-input' required/>
                <input type="email" name="email" placeholder='Email' className='formulario-input' required/>
                <input type="text" name="asunto" placeholder='Asunto' className='formulario-input' required/>
                <textarea name="mensaje" placeholder='Mensaje' className='formulario-text-area' required/>
                {!form && <Boton textoBoton="Enviar"/>}
            </form>
            {form && <div className='formulario-mensaje'>
                    <Aviso textoAviso="Se enviaron los datos"/>
                </div>}
        </>
    )
}