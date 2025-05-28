import React from "react";
import { useParams } from "react-router";
import { getProjectById } from "../../services/project";
import { Footer } from "../../componentes/footer/footer";
import { SectionBanner } from "../../componentes/sectionBanner/sectionBanner";
import './project.css'

export const Project: React.FC = ()=>{
    const { id } = useParams<{ id: string }>();
    const project = getProjectById(id);

    if(!project){
        return <h1>Project not found</h1>;
    }
    return (
        <>
            <main className="container project-item">
                <SectionBanner title={project.name} link={project.link}/>
               <section>
                {
                    project.image.map(img => (
                        <img className="project-item-image" key={img.id} src={img.src} alt={img.alt} />
                    ))
                 }
               </section>
            </main>
            <Footer/>
        </>
    )
}