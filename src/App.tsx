import { Navbar } from './componentes/navbar/navbar'
import { appData } from './appData';
import { AppRoutes } from './routes/appRoutes';

function App() {
  return (
    <>
      <Navbar 
        name={appData.navbar.name} 
        menu={appData.navbar.menu}
      />
      <AppRoutes/>
    </>
  )
}

export default App
