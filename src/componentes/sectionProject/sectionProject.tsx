import React from 'react'
import './sectionProject.css'
import { CardProject } from '../cardProject/cardProject'
import type { SectionProjectProps } from '../../types/types.js'

export const SectionProject: React.FC<SectionProjectProps> = ({ projects })=>{

    return(
        <div id='Portafolio' className="seccion-portafolio-fondo">
            <section className="seccion-portafolio container">
                <h2 className="seccion-portafolio-titulo">Portafolio</h2>
                <div className="seccion-portafolio-lista">
                    {
                        projects.map(item =>(
                            <CardProject key={item.id} id={item.id} image={item.image[0]} name={item.name}/>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}