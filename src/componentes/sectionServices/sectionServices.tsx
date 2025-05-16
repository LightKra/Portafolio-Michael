import React from 'react'
import type { SectionServicesProps } from '../../types/types.js'
import { CardService } from '../cardService/cardService.js'
import './sectionServices.css'

export const SectionServices: React.FC<SectionServicesProps> = ({services})=>{
    return (
        <div id='Servicios' className="seccion-servicios-fondo">
            <section className="seccion-servicios container">
                <h2 className="seccion-servicios-titulo">Servicios</h2>
                <div className="seccion-servicios-lista">
                    {
                        services.map(item=>(
                            <CardService
                                key={item.id} 
                                name={item.name} 
                                description={item.description} 
                            />
                        ))
                    }
                </div>
            </section>
        </div>
        
    )
}