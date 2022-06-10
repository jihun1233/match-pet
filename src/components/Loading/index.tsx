import styles from './loading.module.scss'
import { SpinnerCircular, SpinnerCircularProps } from 'spinners-react'

interface IProps extends SpinnerCircularProps {}

const Loading = (props: IProps) => {
  return <SpinnerCircular className={styles.loading} secondaryColor='transparent' {...props} />
}

export default Loading
