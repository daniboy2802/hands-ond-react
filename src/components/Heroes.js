import styles from '../styles/heroes.module.css'
import Button from './Button'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import { useEffect, useState } from 'react'

export default function Heroes() {
  const [heroes, setHeroes] = useState([]); 
  const [actualHero, setActualHero] = useState(null)

  useEffect(() => {
    const ids = Object.keys(window.localStorage)
    // Fixed the production problem
    ids.forEach(id => {
      let name = window.localStorage.getItem(id)
      let heroe = {
        id: id,
        name: name
      }
      setHeroes((prevState) => ([
        ...prevState,
        heroe
      ]))
    })
  }, []);

  const changeHero = (id, name) => {
    setActualHero({
      id: id,
      name: name
    })
  }

  return(
    <div className={styles['heroContainer']}>
      {heroes.map(heroe => (
        <div onClick={() => changeHero(heroe.id, heroe.name)} className={styles['buttonGroup']} >
          <button className={styles['buttonId']}>{heroe.id}</button>
          <button className={styles['buttonName']}>{heroe.name}</button>
        </div>
      ))}
      <div>
        {actualHero && (
          <Fragment>
            <h1 style={{margin: '20px 0 10px 0'}}>{actualHero.name} is my hero</h1>
            <Link to={`/edit/${actualHero.id}`}>
              <Button name="View Details" />
            </Link>
          </Fragment>
        )}
      </div>
    </div>
  )
}