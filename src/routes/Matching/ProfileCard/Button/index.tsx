import { ReactElement } from 'react'
import { cx } from 'styles'
import styles from './button.module.scss'

interface IProps {
  children: ReactElement
  onClick?: () => void
  filled?: boolean
}

const Button = ({ children, onClick, filled = true }: IProps) => {
  return (
    <button className={cx(styles.button, { [styles.filled]: filled })} type='button' onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
