import Button from './Button'
import styles from '../styles/showElement.module.css'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'


export default function ShowElement() {
  const [name, setName] = useState('')
  const params = useParams()
  
  useEffect(() => {
    setName(window.localStorage.getItem(params.id))
  }, [])

  const updateName = (newName) => {
    window.localStorage.setItem(params.id, newName)
    setName(window.localStorage.getItem(params.id))
  }

  return (
    <div>
      <h1>{name} Details!</h1>
      <div className={styles['container']}>
        <p className={styles['identifier']}>ID: </p>
        <p>
          <span>{params.id}</span>
        </p>
        <label className={styles['identifier']}>
          Name: 
        </label>
        <input 
          value={name}
          className={styles['input']}
          onChange={(e) => updateName(e.target.value)}
        />
      </div>
      <div style={{margin: '10px 0'}}>
        <Button onClick={() => window.history.back()} name='Back'></Button>
      </div>
    </div>
  )
}
