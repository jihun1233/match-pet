import styles from './header.module.scss'
import { FaPaw } from 'react-icons/fa'
import { AiOutlineBell } from 'react-icons/ai'
import { cx } from 'styles'
import { MouseEventHandler } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks'
import { getHasUnreadMessage, openMessageModal } from 'states/modal'

const Header = () => {
  const dispatch = useAppDispatch()
  const hasUnreadMessage = useAppSelector(getHasUnreadMessage)
  const onAlarmIconClick: MouseEventHandler<SVGElement> = () => {
    dispatch(openMessageModal())
  }

  return (
    <header>
      <div className={styles.left} />
      <FaPaw className={styles.logo} size='40px' />
      <div className={styles.right}>
        <div className={cx(styles.iconWrapper, { [styles.hasUnreadMessage]: hasUnreadMessage })}>
          <AiOutlineBell className={styles.alarmIcon} size={25} onClick={onAlarmIconClick} />
        </div>
      </div>
    </header>
  )
}

export default Header
