import styles from './item.module.scss'

interface IProps {
  message: string
}

const Item = ({ message }: IProps) => {
  return (
    <div className={styles.messageModalItem}>
      <p>{message}</p>
    </div>
  )
}

export default Item
