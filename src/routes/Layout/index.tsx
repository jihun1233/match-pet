import { useAppDispatch, useAppSelector } from 'hooks'
import { Outlet } from 'react-router-dom'
import MessageModal from 'routes/Modal/MessageModal'
import { closeMessageModal, getMessageModalIsOpen, getMessageModalMessages } from 'states/modal'
import GNB from './GNB'
import Header from './Header'
import styles from './layout.module.scss'

const Layout = () => {
  const dispatch = useAppDispatch()
  const isMessageModalOpen = useAppSelector(getMessageModalIsOpen)
  const messages = useAppSelector(getMessageModalMessages)
  const onCancel = () => {
    dispatch(closeMessageModal())
  }

  return (
    <div className={styles.layout}>
      <MessageModal isOpen={isMessageModalOpen} messages={messages} onCancel={onCancel} />
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
