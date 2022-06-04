import { useAppDispatch } from 'hooks'
import { AiFillHeart, AiOutlinePlus } from 'react-icons/ai'
import { IUser } from 'types/match'
import { addMatch, addReject } from 'states/match'

import Button from './Button'
import styles from './profileCard.module.scss'

interface IProps {
  user: IUser
}

const ProfileCard = ({ user }: IProps) => {
  const dispatch = useAppDispatch()
  const { imgSrc, info, name } = user

  const onClickMatch = () => {
    dispatch(addMatch(user))
  }
  const onClickReject = () => {
    dispatch(addReject(user))
  }

  return (
    <div className={styles.profileCard}>
      <img src={imgSrc} alt={name} />
      {info.map((text) => (
        <p key={`info-text-${text}`}>{text}</p>
      ))}
      <div className={styles.buttonContainer}>
        <Button filled={false} onClick={onClickReject}>
          <AiOutlinePlus className={styles.rotate} />
        </Button>
        <Button onClick={onClickMatch}>
          <AiFillHeart />
        </Button>
      </div>
    </div>
  )
}

export default ProfileCard
