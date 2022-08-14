import { useAppDispatch } from 'hooks'
import { setConfirmModalDataId, openConfirmModal } from 'states/modal'
import { IUser } from 'types/match'
import { IoRefreshOutline } from 'react-icons/io5'

import styles from './item.module.scss'
import PreviewCard from 'components/PreviewCard'

interface IProps {
  user: IUser
}

const Item = ({ user }: IProps) => {
  const dispatch = useAppDispatch()
  const { name, previewSrc } = user

  const handleRevertClick = () => {
    dispatch(setConfirmModalDataId(user.id))
    dispatch(openConfirmModal())
  }

  return (
    <li className={styles.item}>
      <div className={styles.leftContainer}>
        <PreviewCard src={previewSrc} alt={`${name}'s preview`} />
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
