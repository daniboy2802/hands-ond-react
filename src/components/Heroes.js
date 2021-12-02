import styles from '../styles/heroes.module.css'
import Button from './Button'
import useGetHeroes from '../tools/useGetHeroes'
import HeroeElement from './HeroeElement'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import { useState } from 'react'

export default function Heroes() {
  const [actualHero, setActualHero] = useState(null)
  const heroes = useGetHeroes()
  
  const changeHero = (id, name) => {
    setActualHero({
      id: id,
      name: name
    })
  }

  return(
    <div className={styles['heroContainer']}>
      {heroes.map((heroe, i) => (
        <HeroeElement
          key={i}
          onClick={changeHero}
          heroe={heroe}
          actualHero={actualHero}
        />
      ))}
      <div>
        {actualHero && (
          <Fragment>
            <h1 style={{margin: '20px 0 10px 0'}}>{actualHero.name} is my hero</h1>
            <Link to={`/edit/${actualHero.id}`}>
              <Button name='View Details' />
            </Link>
          </Fragment>
        )}
      </div>
    </div>
  )
}
