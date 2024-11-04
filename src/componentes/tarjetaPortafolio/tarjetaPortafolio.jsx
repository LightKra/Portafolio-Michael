import './tarjetaPortafolio.css'
import {Boton} from '../boton/boton.jsx'

/**
 * 
 * @param {Object} props - Objeto de propiedades
 * @param {String} props.imagen - Imagen de portada de proyecto
 * @param {String} props.imagenAlt - Descripcion de la imagen
 * @param {String} props.titulo - Titulo del proyecto
 * @param {String} props.textoBoton - Texto del boton
 * @param {String} props.url - Enlace del proyecto
 * @returns {JSX.Element} JSX - Renderiza el jsx
 */
export const TarjetaPortafolio = ({imagen, imagenAlt, titulo, textoBoton, url})=>{

    return(
        <div className="tarjeta-portafolio">
            <img className='tarjeta-portafolio-imagen' src={imagen} alt={imagenAlt} />
            <div className='tarjeta-portafolio-informacion'>
                <h3 className='tarjeta-portafolio-titulo'>{titulo}</h3>
                <a href={url} target='_blank'>
                    <Boton textoBoton={textoBoton} />
                </a>
            </div>
        </div>
    )
}