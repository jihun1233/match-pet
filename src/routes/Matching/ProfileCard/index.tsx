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
      <div className={styles.imgContainer}>
        <img src={imgSrc} alt={name} />
      </div>

      <p className={styles.userName}>{name}</p>

      <div className={styles.infoContainer}>
        <ul>
          {info.map((text) => (
            <li key={`info-text-${text}`}>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.buttonContainer}>
        <Button filled={false} onClick={onClickReject}>
          <AiOutlinePlus size='30px' className={styles.rotate} />
        </Button>
        <Button onClick={onClickMatch}>
          <AiFillHeart size='30px' />
        </Button>
      </div>
    </div>
  )
}

export default ProfileCard
