import { NavLink } from 'react-router-dom'
import styles from './gnb.module.scss'
import { AiFillMessage, AiFillHeart, AiFillHome } from 'react-icons/ai'
import { MdContentPasteOff } from 'react-icons/md'

const GNB = () => {
  return (
    <nav className={styles.gnb}>
      <ul>
        <li>
          <NavLink className={({ isActive }) => (isActive ? styles.active : undefined)} to=''>
            <AiFillHome size='40px' />
            <p>메인으로</p>
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? styles.active : undefined)} to='matching'>
            <AiFillHeart size='40px' />
            <p>매칭 하기</p>
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? styles.active : undefined)} to='match-list'>
            <AiFillMessage size='40px' />
            <p>매치 목록</p>
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? styles.active : undefined)} to='reject-list'>
            <MdContentPasteOff size='40px' />
            <p>거절 목록</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default GNB
