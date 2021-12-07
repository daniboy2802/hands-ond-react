import { useState, useEffect } from 'react';

export default function useGetHeroes() {
  const [heroes, setHeroes] = useState([])
  
  useEffect(() => {
    let heroesTest = []
    const ids = Object.keys(window.localStorage)
    ids.forEach(id => {
      let name = window.localStorage.getItem(id)
      let heroe = {
        id: id,
        name: name
      }
      heroesTest.push(heroe)
    })
    setHeroes([...heroesTest])
  }, []);
  return heroes
}