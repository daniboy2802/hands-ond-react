import styles from '../styles/button.module.css'

export default function Button({ name, onClick, isActive }) {
  return(
    <button 
      onClick={onClick}
      className={styles['button']}
      style={{ color: isActive ? "red" : "" }}
    >
      {name}
    </button>
  )
}