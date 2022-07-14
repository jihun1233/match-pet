import styles from './messageModal.module.scss'
import ModalContainer from '..'

interface Props {
  isOpen: boolean
  message: string
  onCancel: () => void
}

const MessageModal = ({ isOpen, message, onCancel }: Props) => {
  if (!isOpen) return null
  return (
    <ModalContainer onCancel={onCancel}>
      <div className={styles.messageModal}>
        <p>{message}</p>
        <div className={styles.buttonContainer}>
          <button type='button' onClick={onCancel}>
            닫기
          </button>
        </div>
      </div>
    </ModalContainer>
  )
}

export default MessageModal
