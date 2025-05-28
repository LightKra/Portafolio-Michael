import React from 'react'
import './cardProject.css'
import { Button } from '../button/button.js'
import type { CardProjectProps } from '../../types/types.js'
import { Link } from 'react-router'

export const CardProject: React.FC<CardProjectProps> = ({id, name, image})=>{

    return(
        <div className="tarjeta-portafolio">
            <img className='tarjeta-portafolio-imagen' src={image.src} alt={image.alt} />
            <div className='tarjeta-portafolio-informacion'>
                <h3 className='tarjeta-portafolio-titulo'>{name}</h3>
                <Link to={`/project/${id}`}>
                    <Button>Abrir</Button>
                </Link>
            </div>
        </div>
    )
}