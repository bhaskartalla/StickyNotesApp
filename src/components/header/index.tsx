import { NotesContext } from '@/src/context/NotesContext'
import { lazy, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './styles.module.css'

const Saving = lazy(() => import('./Saving'))
const UserInfo = lazy(() => import('./UserInfo'))

const HeaderLayout = () => {
  const { user, status } = useContext(NotesContext)

  return (
    <>
      <header
        id='header'
        className={styles.header_main}
      >
        <div className={styles.header_title}>
          <span className={styles.logo_emoji}>📝</span>
          <h1>Sticky Notes</h1>
        </div>
        <div className={styles.header_content}>
          {status && <Saving status={status} />}
          {user && <UserInfo user={user} />}
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default HeaderLayout
