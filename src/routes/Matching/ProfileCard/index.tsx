import { useAppDispatch, useRef, useUnmount } from 'hooks'
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
  const animationRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const onClickMatch = () => {
    const target = animationRef.current
    target?.classList.add(styles.swipeRight)
    timeoutRef.current = setTimeout(() => {
      dispatch(addMatch(user))
    }, 200)
  }
  const onClickReject = () => {
    const target = animationRef.current
    target?.classList.add(styles.swipeLeft)
    timeoutRef.current = setTimeout(() => {
      dispatch(addReject(user))
    }, 200)
  }

  useUnmount(() => {
    if (!timeoutRef.current) return
    clearTimeout(timeoutRef.current)
  })

  return (
    <div className={styles.profileCard} ref={animationRef}>
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
