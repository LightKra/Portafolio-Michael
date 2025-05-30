import './form.css'
import { Button } from '../button/button';
import { Notification } from '../notification/notification';
import { useState } from 'react';
import React from 'react';

export const Form: React.FC = ()=>{
    const [form, setForm] = useState(false);

    const fetchForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formElement = event.target as HTMLFormElement;
        const newForm = new FormData(formElement);
        fetch("https://formspree.io/f/xnnqpovo", {
            method: "POST",
            body: newForm
        })
        formElement.reset();
        setForm(true);
    };
    
    
    return(
        <>
            <form className="formulario" onSubmit={fetchForm}>
                <input type="text" name="nombre" placeholder='Nombre' className='formulario-input' required/>
                <input type="email" name="email" placeholder='Email' className='formulario-input' required/>
                <input type="text" name="asunto" placeholder='Asunto' className='formulario-input' required/>
                <textarea name="mensaje" placeholder='Mensaje' className='formulario-text-area' required/>
                {!form && <Button>Enviar</Button>}
            </form>
            {form && <div className='formulario-mensaje'>
                    <Notification>Se enviaron los datos</Notification>
                </div>}
        </>
    )
}