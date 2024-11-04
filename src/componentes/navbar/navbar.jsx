import { useEffect, useState} from 'react'
import iconoMenu from '../../assets/Iconos/menu.svg'
import './navbar.css'
/**
 * 
 * @param {Object} props - Objeto de propiedades
 * @param {String} props.nombrePerfil - Nombre de la persona
 * @param {Array} props.menu - Array de los items del menu izquierdo
 * @returns {JSX.Element} JSX - renderiza el jsx
 */
export const Navbar = ({nombrePerfil, menu})=>{
    const [menuMovil, setMenuMovil] = useState(false);
    const [enlaceActivo, setEnlaceActivo] = useState(menu[0]);

    const handlerClickMovil = ()=>{
        setMenuMovil(!menuMovil);
    }
    const handlerClickEnlace = (itemMenu) => ()=>{
        setEnlaceActivo(itemMenu);
    }
    
    return (
        <header className='header'>
            <nav className='navbar container'>
                <a href="#" className='navbar-lista1-nombre'>{nombrePerfil}</a>
                <div className="navbar-lista2">
                    {
                        menu.map((item, index)=>{

                            return(
                                <a
                                key={index} 
                                className={`${item === enlaceActivo ? "navbar-lista2-item activo" : "navbar-lista2-item"}`} 
                                href={`#${item}`}
                                onClick={handlerClickEnlace(item)}
                                >
                                    {item}
                                </a>
                            )
                        })
                    }
                </div>
                <div className='navbar-icon' onClick={handlerClickMovil}>
                    <img className='navbar-icon-menu' src={iconoMenu} />
                </div>
                <div className={`${menuMovil ? "navbar-lista3 navbar-lista3-activo" : "navbar-lista3"}`}>
                    {
                        menu.map((item, index)=>{

                            return(
                                <a
                                key={index} 
                                className={`${item === enlaceActivo ? "navbar-lista2-item activo" : "navbar-lista2-item"}`} 
                                href={`#${item}`}
                                onClick={handlerClickEnlace(item)}
                                >
                                    {item}
                                </a>
                            )
                        })
                    }
                </div>
            </nav>
        </header>
    )
}