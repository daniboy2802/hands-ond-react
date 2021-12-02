import styles from '../styles/button.module.css'

export default function Button({ name, onClick }) {
  return(
    <button 
      onClick={onClick}
      className={styles['button']}
    >
      {name}
    </button>
  )
}