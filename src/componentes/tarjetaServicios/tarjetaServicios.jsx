import './tarjetaServicios.css'
/**
 * 
 * @param {Object} props - Objeto de propiedades
 * @param {String} props.nombreServicio - Nombre del servicio
 * @param {String} props.descripcion - Descripcion del servicio
 * @returns {JSX.Element} JSX - Renderiza el jsx
 */
export const TarjetaServicios = ({nombreServicio, descripcionServicio})=>{
    return(
        <div className="tarjeta">
            <h3 className="tarjeta-titulo">
                {nombreServicio}
            </h3>
            <p className="tarjeta-descripcion">
                {descripcionServicio}
            </p>
        </div>
    )
}