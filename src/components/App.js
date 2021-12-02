import { useEffect } from 'react';
import heroes from '../data/heroes.json'
import setHeroes from '../helpers'
import PrincipalPage from '../pages/principalPage';

function App() {
  useEffect(() => {
    if(!window.localStorage.getItem('13')) {
      heroes.forEach(heroe => {
        window.localStorage.setItem(heroe.id, heroe.name)
      });
    }
  }, [])

  return (
    <PrincipalPage />
  );
}

export default App;
