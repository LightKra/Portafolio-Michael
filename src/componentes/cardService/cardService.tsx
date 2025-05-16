import React from 'react'
import './cardService.css'
import type { CardServiceProps } from '../../types/types'

export const CardService: React.FC<CardServiceProps> = ({name, description})=>{
    return(
        <div className="tarjeta">
            <h3 className="tarjeta-titulo">
                {name}
            </h3>
            <p className="tarjeta-descripcion">
                {description}
            </p>
        </div>
    )
}