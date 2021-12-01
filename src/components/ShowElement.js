import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Button from './Button'
import Styles from '../styles/showElement.module.css'


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
      <div className={Styles['container']}>
        <p className={Styles['identifier']}>ID: </p>
        <p><span>{params.id}</span></p>
        <label className={Styles['identifier']}>Name: </label>
        <input 
          value={name}
          className={Styles['input']}
          onChange={(e) => updateName(e.target.value)}
        />
      </div>
      <div style={{margin: '10px 0'}}>
        <Button onClick={(e) => window.history.back()} name='Back'></Button>
      </div>
    </div>
  )
}
