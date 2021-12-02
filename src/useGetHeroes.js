import { useState, useEffect } from 'react';

export default function useGetHeroes() {
  const [heroes, setHeroes] = useState([])
  useEffect(() => {
    let heroesTest = []
    const ids = Object.keys(window.localStorage)
    // Fixed the production problem repeats the element after every reload
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