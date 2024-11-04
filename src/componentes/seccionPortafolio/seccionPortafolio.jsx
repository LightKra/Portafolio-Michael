import './seccionPortafolio.css'
import { TarjetaPortafolio } from '../tarjetaPortafolio/tarjetaPortafolio.jsx'
/**
 * 
 * @param {Object} props - Objeto de propiedades
 * @param {Array} props.listaPortafolio - Lista de elementos para el portafolio 
 * @returns {JSX.Element} JSX - Renderiza el jsx
 */
export const SeccionPortafolio = ({listaPortafolio})=>{

    return(
        <div id='Portafolio' className="seccion-portafolio-fondo">
            <section className="seccion-portafolio container">
                <h2 className="seccion-portafolio-titulo">Portafolio</h2>
                <div className="seccion-portafolio-lista">
                    {
                        listaPortafolio.map((item, index)=>(
                            <TarjetaPortafolio key={index} imagen={item.imagen} imagenAlt={item.imagenAlt} titulo={item.titulo} textoBoton={item.textoBoton} url={item.url}/>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}