import { useRef } from 'react'
import { useClickAway } from 'react-use'

import Portal from '../Portal'
import styles from './confirmModal.module.scss'

interface IProps {
  isOpen: boolean
  message: string
  onConfirm: () => void
  onCancel: () => void
}
const ConfirmModal = ({ isOpen, message, onConfirm, onCancel }: IProps) => {
  const clickAwayRef = useRef(null)
  useClickAway(clickAwayRef, onCancel)

  if (!isOpen) return null
  return (
    <Portal>
      <div className={styles.modalBackground}>
        <div className={styles.modalContents} ref={clickAwayRef}>
          <p>{message}</p>
          <div className={styles.buttonContainer}>
            <button type='button' className={styles.confirmButton} onClick={onConfirm}>
              확인
            </button>
            <button type='button' className={styles.cancelButton} onClick={onCancel}>
              취소
            </button>
          </div>
        </div>
      </div>
    </Portal>
  )
}

export default ConfirmModal
