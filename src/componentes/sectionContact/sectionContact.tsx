import React from 'react'
import './sectionContact.css'
import { Form } from '../form/form'

export const SectionContact: React.FC = ()=>{
    return(
        <section id='Contacto' className="seccion-contacto container">
            <h2 className="seccion-contacto-titulo">Contacto</h2>
            <Form/>
        </section>
    )
}