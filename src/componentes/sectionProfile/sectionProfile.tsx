import React from 'react';
import './sectionProfile.css';
import type { SectionProfileType } from '../../types/types';
import { Button } from '../button/button';

export const SectionProfile: React.FC<SectionProfileType> = ({image, name, role, description, link})=>{

    return(
        <section id='Inicio' className="seccion-perfil container">
            <img className="seccion-perfil-imagen" src={image.src} alt={image.alt}/>
            <div className="seccion-perfil-informacion">
                <h2 className="seccion-perfil-informacion-titulo1">
                    Mi nombre es <span className='seccion-perfil-informacion-titulo1-resaltado'>{name}</span>
                </h2>
                <h1 className="seccion-perfil-informacion-titulo2">
                    Soy un <span className='seccion-perfil-informacion-titulo1-resaltado2'>{role}</span> 
                </h1>
                <div className="seccion-perfil-informacion-descripcion">
                    {description}
                </div>
                <div className='secion-perfil-informacion-link'>
                    <a href={link} target='_blank'>
                        <Button>
                            GITHUB
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    )
}