import React from 'react'
import './cardProject.css'
import { Button } from '../button/button.js'
import type { CardProjectProps } from '../../types/types.js'

export const CardProject: React.FC<CardProjectProps> = ({name, image, link})=>{

    return(
        <div className="tarjeta-portafolio">
            <img className='tarjeta-portafolio-imagen' src={image.src} alt={image.alt} />
            <div className='tarjeta-portafolio-informacion'>
                <h3 className='tarjeta-portafolio-titulo'>{name}</h3>
                <a href={link} target='_blank'>
                    <Button>Abrir</Button>
                </a>
            </div>
        </div>
    )
}