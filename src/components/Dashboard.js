import styles from '../styles/dashboard.module.css'
import useGetHeroes from '../tools/useGetHeroes'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const heroes = useGetHeroes()
  const superHeroes = heroes.filter(heroe => heroe.id > 15)

  return (
    <div className={styles['mainContainer']}>
      <header>
        <h1>Top Heroes</h1>
      </header>
      <div className={styles['elementContainer']}>
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
    </div>
  )
}