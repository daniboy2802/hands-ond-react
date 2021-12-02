import Styles from '../styles/dashboard.module.css'
import useGetHeroes from '../useGetHeroes'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const heroes = useGetHeroes()
  const superHeroes = heroes.filter(heroe => heroe.id > 15)
  
  return (
    <div className={Styles['container']}>
      {superHeroes.map(heroe => (
        <Link to={`/edit/${heroe.id}`} className={Styles['link']}>
          <div className={Styles['element']}><p>{heroe.name}</p></div>
        </Link>
      ))}
    </div>
  )
}