import { IMatch } from 'types/match'
import { MdOutlineCancel } from 'react-icons/md'
import { useAppDispatch } from 'hooks'
import { setConfirmModalDataId, openConfirmModal } from 'states/modal'
import styles from './item.module.scss'
import PreviewCard from 'components/PreviewCard'

interface IProps {
  match: IMatch
}

const Item = ({ match }: IProps) => {
  const dispatch = useAppDispatch()
  const {
    user: { name, previewSrc },
    date,
  } = match

  const handleCancelClick = () => {
    dispatch(setConfirmModalDataId(match.user.id))
    dispatch(openConfirmModal())
  }

  return (
    <li className={styles.item}>
      <div className={styles.leftContainer}>
        <PreviewCard src={previewSrc} alt={`${name}'s preview`} />
        <div className={styles.textContainer}>
          <p className={styles.userName}>{name}</p>
          <p>{date}</p>
        </div>
      </div>
      <button type='button' onClick={handleCancelClick}>
        <MdOutlineCancel className={styles.cancelIcon} size='40px' />
      </button>
    </li>
  )
}

export default Item
