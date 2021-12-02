import Styles from '../styles/dashboard.module.css'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className={Styles['container']}>
      <Link  to='/'>
        <div className={Styles['element']}>hola pai</div>
      </Link>
      <Link to='/'>
        <div className={Styles['element']}>hola pai</div>
      </Link>
      <Link to='/'>
        <div className={Styles['element']}>hola pai</div>
      </Link>
      <Link to='/'>
        <div className={Styles['element']}>hola pai</div>
      </Link>
    </div>
  )
}