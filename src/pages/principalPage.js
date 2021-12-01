import styles from '../styles/principalPage.module.css'
import Button from '../components/Button'
import Heroes from '../components/Heroes'
import ShowElement from '../components/ShowElement'
import Dashboard from '../components/Dashboard'
import { Fragment } from 'react'
import {
  Routes,
  Route,
  Link,
} from 'react-router-dom'

export default function PrincipalPage() {
  return (
    <div>
      <nav className={styles['nav']}>
          <h1>Tour of heroes</h1>
          <div>
            <Link to='/dashboard'><Button name={'Dashboard'}></Button></Link>
            <Link to='/heroes'><Button name={'Heroes'}></Button></Link>
          </div>
          <main>
            <Routes>
              <Route path='/dashboard' element={<Dashboard />} />
              <Route exact path='/edit/:id' element={<ShowElement />} />
              <Route path='/heroes' element={<Heroes />} />
              <Route exact path='/' element={<Home />} />
            </Routes>
          </main>
        </nav>
    </div>
  )
}

function Home() {
  return (
    <Fragment></Fragment>
  )
}