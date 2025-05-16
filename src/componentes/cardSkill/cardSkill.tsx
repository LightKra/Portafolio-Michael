import React from 'react'
import './cardSkill.css'
import type { CardSkillProps } from '../../types/types' 

export const CardSkill: React.FC<CardSkillProps> = ({name, image})=>{
    return(
        <div className='tarjeta-skills'>
            <img className='tarjeta-skills-imagen' src={image.src} alt={image.alt}/>
            <h3 className='tarjeta-skills-nombre'>{name}</h3>
        </div>
    )
}