import styles from '../styles/heroeElement.module.css'

export default function HeroeElement({ heroe, onClick, actualHero }) {
  return (
    <div onClick={() => onClick(heroe.id, heroe.name)} className={styles['buttonGroup']} >
      <button className={styles['buttonId']}>{heroe.id}</button>
      <button 
        className={styles['buttonName']}
        style={{ color: actualHero && actualHero.id === heroe.id ? 'red' : '' }}
      >
        {heroe.name}
      </button>
    </div>
  )
}