import { useAppDispatch } from 'hooks'
import { readMessage } from 'states/modal'
import { IMessage } from 'types/modal'
import styles from './item.module.scss'

interface IProps {
  message: IMessage
}

const Item = ({ message }: IProps) => {
  const dispatch = useAppDispatch()

  const onReadButtonClick = () => {
    dispatch(readMessage(message.id))
  }

  return (
    <div className={styles.message}>
      <p className={styles.text}>{message.message}</p>
      {message.hasRead ? (
        <span className={styles.hasRead}>읽음</span>
      ) : (
        <button type='button' className={styles.readButton} onClick={onReadButtonClick}>
          확인
        </button>
      )}
    </div>
  )
}

export default Item
