import styles from './messageModal.module.scss'
import ModalContainer from '..'
import { IMessage } from 'types/modal'
import Item from './Item'

interface Props {
  isOpen: boolean
  messages: IMessage[]
  onCancel: () => void
}

const MessageModal = ({ isOpen, messages, onCancel }: Props) => {
  if (!isOpen) return null

  return (
    <ModalContainer onCancel={onCancel}>
      <div className={styles.messageModal}>
        {messages.map((m) => (
          <Item key={`messages-${m.id}`} message={m.message} />
        ))}
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
