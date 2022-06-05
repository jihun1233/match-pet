import { Outlet } from 'react-router-dom'
import GNB from './GNB'
import Header from './Header'
import styles from './layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.headerWrapper}>
        <Header />
      </div>
      <div className={styles.pageWrapper}>
        <Outlet />
      </div>
      <GNB />
    </div>
  )
}

export default Layout
