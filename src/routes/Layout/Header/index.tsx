import styles from './header.module.scss'
import { FaPaw } from 'react-icons/fa'

const Header = () => {
  return (
    <header>
      <FaPaw className={styles.logo} size='40px' />
    </header>
  )
}

export default Header
