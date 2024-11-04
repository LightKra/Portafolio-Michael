import './tarjetaSkills.css'
/**
 * 
 * @param {Object} props - Objeto de propiedades
 * @param {String} props.nombre - Nombre de la tecnologia
 * @param {String} props.imagen - Imagen de la tecnologia en que se tiene conocimiento
 * @param {String} props.imagenAlt - Descripcion de la imagen 
 * @returns {JSX.Element} JSX - Renderiza el jsx
 */
export const TarjetaSkills = ({nombre, imagen, imagenAlt})=>{
    return(
        <div className='tarjeta-skills'>
            <img className='tarjeta-skills-imagen' src={imagen} alt={imagenAlt}/>
            <h3 className='tarjeta-skills-nombre'>{nombre}</h3>
        </div>
    )
}