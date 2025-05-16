import React from 'react';
import './sectionSkills.css';
import { CardSkill } from '../cardSkill/cardSkill.js';
import type { SectionSkillsProps } from '../../types/types.js';

export const SectionSkills: React.FC<SectionSkillsProps> = ({skills})=>{
    return(
        <section id='Skills' className="seccion-skills">
            <h2 className="seccion-skills-titulo">Skills</h2>
            <div className="seccion-skills-lista">
                {
                    skills.map(item=>(
                        <CardSkill key={item.id} name={item.name} image={item.image}/>
                    ))
                }
            </div>
        </section>
    )
}