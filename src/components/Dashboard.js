import styles from '../styles/dashboard.module.css'
import useGetHeroes from '../tools/useGetHeroes'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const heroes = useGetHeroes()
  const superHeroes = heroes.filter(heroe => heroe.id > 15)

  return (
    <div className={styles['container']}>
      {superHeroes.map((heroe, i) => (
        <Link
          key={i}
          to={`/edit/${heroe.id}`}
          className={styles['link']}
        >
          <div className={styles['element']}>
            <p>
              {heroe.name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}