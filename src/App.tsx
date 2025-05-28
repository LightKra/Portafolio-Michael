import React, {useEffect} from 'react';
import { Navbar } from './componentes/navbar/navbar'
import { appData } from './services/appData';
import { AppRoutes } from './routes/appRoutes';
import { Spinner } from './componentes/spinner/spinner';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
    
    useEffect(()=>{
        setTimeout(()=>{
          setIsLoading(false);
        }, 1500)
    }, [])
    
  if(isLoading){
        return (
          <div className='app-spinner'>
            <Spinner size={30} color='#CE4834'/>
          </div>
        )
        
  }
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
