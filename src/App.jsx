import { useState } from 'react'
import { Navbar } from './componentes/navbar/navbar.jsx'
import { SeccionPerfil } from './componentes/seccionPerfil/seccionPerfil.jsx';
import { SeccionServicios } from './componentes/seccionServicios/seccionServicios.jsx';
import { SeccionSkills } from './componentes/seccionSkills/seccionSkills.jsx';
import { SeccionPortafolio } from './componentes/seccionPortafolio/seccionPortafolio.jsx';
import { SeccionContacto } from './componentes/seccionContacto/seccionContacto.jsx';
import { Footer } from './componentes/footer/footer.jsx';
import { appData } from './appData.js';
import './App.css'

function App() {
  return (
    <>
      <Navbar 
        nombrePerfil={appData.navbar.nombrePerfil} 
        menu={appData.navbar.menu}
      />
      <main>
        <SeccionPerfil 
          imagen={appData.seccionPerfil.imagen}
          imagenAlt={appData.seccionPerfil.imagenAlt}
          nombrePerfil={appData.seccionPerfil.nombrePerfil}
          rol={appData.seccionPerfil.rol}
          descripcionPerfil={appData.seccionPerfil.descripcionPerfil}
          boton={appData.seccionPerfil.boton}
        />
        <SeccionServicios
          listaServicios={appData.seccionServicios.listaServicios}
        />
        <SeccionSkills
          listaSkills={appData.seccionSkills.listaSkills}
        />
        <SeccionPortafolio
          listaPortafolio={appData.seccionPortafolio.listaPortafolio}
        />
        <SeccionContacto/>
      </main>
      <Footer/>
    </>
  )
}

export default App
