import { IMatch } from 'types/match'
import { MdOutlineCancel } from 'react-icons/md'

import styles from './item.module.scss'

interface IProps {
  match: IMatch
}

const Item = ({ match }: IProps) => {
  const {
    user: { name, previewSrc },
    date,
  } = match

  return (
    <li className={styles.item}>
      <div className={styles.leftContainer}>
        <div className={styles.imgContainer}>
          <img src={previewSrc} alt={name} />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.userName}>{name}</p>
          <p>{date}</p>
        </div>
      </div>
      <button type='button'>
        <MdOutlineCancel className={styles.cancelIcon} size='40px' />
      </button>
    </li>
  )
}

export default Item
