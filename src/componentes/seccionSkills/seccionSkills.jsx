import './seccionSkills.css'
import { TarjetaSkills } from '../tarjetaSkills/tarjetaSkills.jsx'
/**
 * 
 * @param {object} props - Objeto de propiedades
 * @param {Array} props.listaSkills - Lista de Skills
 * @returns {JSX.Element} JSX - Renderiza el jsx
 */
export const SeccionSkills = ({listaSkills})=>{
    return(
        <section id='Skills' className="seccion-skills">
            <h2 className="seccion-skills-titulo">Skills</h2>
            <div className="seccion-skills-lista">
                {
                    listaSkills.map(item=>(
                        <TarjetaSkills key={item.nombre} nombre={item.nombre} imagen={item.imagen} imagenAlt={item.imagenAlt}/>
                    ))
                }
            </div>
        </section>
    )
}