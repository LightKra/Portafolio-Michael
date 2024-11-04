import './seccionContacto.css'
import { Formulario } from "../formulario/formulario.jsx"

export const SeccionContacto = ()=>{
    return(
        <section id='Contacto' className="seccion-contacto container">
            <h2 className="seccion-contacto-titulo">Contacto</h2>
            <Formulario/>
        </section>
    )
}