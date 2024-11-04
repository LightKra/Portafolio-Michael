import './seccionPerfil.css'
import {Boton} from '../boton/boton.jsx';
/**
 * 
 * @param {Object} props - Objeto de propiedades
 * @param {String} props.imagen - Foto de la persona
 * @param {String} props.imagenAlt - Descripcion de la foto
 * @param {String} props.nombrePerfil - Nombre de la persona
 * @param {Array} props.rol - Nombres con los rol que realiza
 * @param {String} props.descripcionPerfil - Descripcion del perfil profesional
 * @param {String} props.textoBoton - Nombre del boton
 * @returns {JSX.Element} JSX - Renderiza el jsx
 */
export const SeccionPerfil = ({imagen, imagenAlt, nombrePerfil, rol, descripcionPerfil, boton})=>{

    return(
        <section id='Inicio' className="seccion-perfil container">
            <img className="seccion-perfil-imagen" src={imagen} alt={imagenAlt}/>
            <div className="seccion-perfil-informacion">
                <h2 className="seccion-perfil-informacion-titulo1">
                    Mi nombre es <span className='seccion-perfil-informacion-titulo1-resaltado'>{nombrePerfil}</span>
                </h2>
                <h1 className="seccion-perfil-informacion-titulo2">
                    Soy un <span className='seccion-perfil-informacion-titulo1-resaltado2'>{rol}</span> 
                </h1>
                <div className="seccion-perfil-informacion-descripcion">
                    {descripcionPerfil}
                </div>
                <div className='secion-perfil-informacion-boton'>
                    <a href={boton.url} target='_blank'>
                        <Boton textoBoton={boton.textoBoton} />
                    </a>
                </div>
            </div>
        </section>
    )
}