import './aviso.css'

export const Aviso = ({textoAviso})=>{
    return(
        <div className="aviso-fondo">
            <div className="aviso">
                <h3 className="aviso-titulo">{textoAviso}</h3>
            </div>
        </div>
    )
}