import { TarjetaServicios } from '../tarjetaServicios/tarjetaServicios.jsx'
import './seccionServicios.css'
/**
 * 
 * @param {Object} props - Objeto de propiedades
 * @param {Array} props.listaServicios - Array de los servicios que ofrece
 * @returns {JSX.Element} JSX - Renderiza el Jsx
 */
export const SeccionServicios = ({listaServicios})=>{
    return (
        <div id='Servicios' className="seccion-servicios-fondo">
            <section className="seccion-servicios container">
                <h2 className="seccion-servicios-titulo">Servicios</h2>
                <div className="seccion-servicios-lista">
                    {
                        listaServicios.map(item=>(
                            <TarjetaServicios
                                key={item.nombre} 
                                nombreServicio={item.nombre} 
                                descripcionServicio={item.descripcion} 
                            />
                        ))
                    }
                </div>
            </section>
        </div>
        
    )
}