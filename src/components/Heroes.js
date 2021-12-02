import styles from '../styles/heroes.module.css'
import Button from './Button'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import { useState } from 'react'
import useGetHeroes from '../useGetHeroes'

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
      {heroes.map(heroe => (
        <div onClick={() => changeHero(heroe.id, heroe.name)} className={styles['buttonGroup']} >
          <button className={styles['buttonId']}>{heroe.id}</button>
          <button 
            className={styles['buttonName']}
            style={{ color: actualHero && actualHero.id === heroe.id ? 'red' : '' }}
          >
            {heroe.name}
          </button>
        </div>
      ))}
      <div>
        {actualHero && (
          <Fragment>
            <h1 style={{margin: '20px 0 10px 0'}}>{actualHero.name} is my hero</h1>
            <Link to={`/edit/${actualHero.id}`}>
              <Button isActive={true} name="View Details" />
            </Link>
          </Fragment>
        )}
      </div>
    </div>
  )
}
