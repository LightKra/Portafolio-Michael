import './boton.css'

/**
 * 
 * @param {Object} props - Objeto de propiedades 
 * @param {String} props.textoBoton - Nombre del Boton
 * @returns {JSX.Element} JSX - Renderiza el jsx
 */
export const Boton = ({textoBoton})=>{
    return(
        <button className='boton'>{textoBoton}</button>
    )
}