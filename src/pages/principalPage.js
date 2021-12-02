import styles from '../styles/principalPage.module.css'
import Button from '../components/Button'
import Heroes from '../components/Heroes'
import ShowElement from '../components/ShowElement'
import Dashboard from '../components/Dashboard'
import CustomLink from '../components/CustomLink'
import { Fragment } from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'

export default function PrincipalPage() {
  return (
    <div>
      <nav className={styles['nav']}>
          <h1>Tour of heroes</h1>
          <div>
            <CustomLink to='/dashboard' name={'Dashboard'} />
            <CustomLink to='/heroes' name={'Heroes'} />
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