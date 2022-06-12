import { useAppDispatch } from 'hooks'
import { revertReject } from 'states/match'
import { IUser } from 'types/match'
import { IoRefreshOutline } from 'react-icons/io5'

import styles from './item.module.scss'

interface IProps {
  user: IUser
}

const Item = ({ user }: IProps) => {
  const dispatch = useAppDispatch()
  const { name, previewSrc } = user

  const handleRevertClick = () => {
    dispatch(revertReject(user.id))
  }

  return (
    <li className={styles.item}>
      <div className={styles.leftContainer}>
        <div className={styles.imgContainer}>
          <img src={previewSrc} alt={name} />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.userName}>{name}</p>
        </div>
      </div>
      <button type='button' onClick={handleRevertClick}>
        <IoRefreshOutline className={styles.revertIcon} size='40px' />
      </button>
    </li>
  )
}

export default Item
