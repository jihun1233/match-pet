import styles from './loading.module.scss'
import { SpinnerCircular } from 'spinners-react'

const Loading = () => {
  return <SpinnerCircular className={styles.loading} secondaryColor='transparent' />
}

export default Loading
