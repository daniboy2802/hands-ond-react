import heroes from '../data/heroes.json'
import setHeroes from '../tools/helpers'
import PrincipalPage from '../pages/principalPage';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    if(!window.localStorage.getItem('13')) {
      heroes.forEach(heroe => {
        window.localStorage.setItem(heroe.id, heroe.name)
      })
    }
  }, [])

  return (
    <PrincipalPage />
  );
}
