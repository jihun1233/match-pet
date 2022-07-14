import styles from './confirmModal.module.scss'
import ModalContainer from '..'

interface IProps {
  isOpen: boolean
  message: string
  onConfirm: () => void
  onCancel: () => void
}
const ConfirmModal = ({ isOpen, message, onConfirm, onCancel }: IProps) => {
  if (!isOpen) return null
  return (
    <ModalContainer onCancel={onCancel}>
      <div className={styles.confirmModal}>
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
    </ModalContainer>
  )
}

export default ConfirmModal
