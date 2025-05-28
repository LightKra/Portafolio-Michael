import React, { useEffect } from 'react'
import { useState} from 'react'
import iconoMenu from '../../assets/Iconos/menu.svg'
import './navbar.css'
import type { NavbarType } from '../../types/types'
import { Link, useLocation } from 'react-router'

export const Navbar: React.FC<NavbarType> = ({name, menu})=>{
    const [menuMovil, setMenuMovil] = useState(false);
    const [enlaceActivo, setEnlaceActivo] = useState<string>(menu[0]);
    const [isRouteLink, setIsRouteLink] = useState(false);
    const location = useLocation();

    const handlerClickMovil = ()=>{
        setMenuMovil(!menuMovil);
    }
    const handlerClickEnlace = (itemMenu: string) => ()=>{
        setEnlaceActivo(itemMenu);
    }
    useEffect(()=>{
        if(location.pathname === '/'){
            setIsRouteLink(false);
        }else{
            setIsRouteLink(true);
        }
    }, [location])


    return (
        <header className='header'>
            <nav className='navbar container'>
                {
                    isRouteLink 
                    ?<Link to={`/`} className='navbar-lista1-nombre'>{name}</Link>
                    :<a href="#inicio" className='navbar-lista1-nombre'>{name}</a>
                }
                <div className="navbar-lista2">
                    {
                        menu.map((item, index)=>{
                            
                            if(isRouteLink){
                                return (
                                <Link 
                                key={index} 
                                className={`${item === enlaceActivo ? "navbar-lista2-item activo" : "navbar-lista2-item"}`} 
                                to={`/`}
                                onClick={handlerClickEnlace(item)}
                                >
                                    {item}
                                </Link>
                                )
                            }
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