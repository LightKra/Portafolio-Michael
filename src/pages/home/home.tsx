import React from "react";
import { Navbar } from "../../componentes/navbar/navbar";
import { SectionProfile } from "../../componentes/sectionProfile/sectionProfile";
import { appData } from "../../appData";
import { SectionServices } from "../../componentes/sectionServices/sectionServices";
import { SectionSkills } from "../../componentes/sectionSkills/sectionSkills";
import { SectionProject } from "../../componentes/sectionProject/sectionProject";
import { SectionContact } from "../../componentes/sectionContact/sectionContact";
import { Footer } from "../../componentes/footer/footer";

export const Home: React.FC = ()=>{
    return (
            <>
              <Navbar 
                name={appData.navbar.name} 
                menu={appData.navbar.menu}
              />
              <main>
                <SectionProfile 
                  image={appData.sectionProfile.image}
                  name={appData.sectionProfile.name}
                  role={appData.sectionProfile.role}
                  description={appData.sectionProfile.description}
                  link={appData.sectionProfile.link}
                />
                <SectionServices
                  services={appData.sectionServices}
                />
                <SectionSkills
                  skills={appData.sectionSkills}
                />
                <SectionProject
                  projects={appData.sectionProject}
                />
                <SectionContact/>
              </main>
              <Footer/>
            </>
    )
}