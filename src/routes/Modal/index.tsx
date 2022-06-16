import { ReactNode, useRef } from 'react'

import Portal from './Portal'
import styles from './modalContainer.module.scss'
import { useClickAway } from 'react-use'

interface IProps {
  children: ReactNode
  onCancel: () => void
}

const ModalContainer = ({ children, onCancel }: IProps) => {
  const clickAwayRef = useRef(null)
  useClickAway(clickAwayRef, onCancel)

  return (
    <Portal>
      <div className={styles.modalBackground}>
        <div className={styles.modalContents} ref={clickAwayRef}>
          {children}
        </div>
      </div>
    </Portal>
  )
}

export default ModalContainer
