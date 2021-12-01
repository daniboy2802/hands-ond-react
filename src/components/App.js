import { useEffect } from 'react';
import heroes from '../data/heroes.json'
import setHeroes from '../helpers'
import PrincipalPage from '../pages/principalPage';

function App() {
  useEffect(() => {
    if(!window.localStorage.getItem('13')) {
      setHeroes(heroes)
    }
  }, [])

  return (
    <PrincipalPage />
  );
}

export default App;
