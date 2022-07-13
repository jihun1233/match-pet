import { useAppDispatch, useRef, useState, useUnmount } from 'hooks'
import { AiFillHeart, AiOutlinePlus } from 'react-icons/ai'
import { IUser } from 'types/match'
import { addMatch, addReject } from 'states/match'
import dog from 'assets/pngs/dog.png'

import Button from './Button'
import styles from './profileCard.module.scss'
import { cx } from 'styles'

interface IProps {
  user: IUser
}

const ProfileCard = ({ user }: IProps) => {
  const { imgSrc, info, name } = user

  const dispatch = useAppDispatch()

  const animationRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const [imgError, setImgError] = useState(false)

  const onClickMatch = () => {
    const target = animationRef.current
    target?.classList.add(styles.swipeRight)
    timeoutRef.current = setTimeout(() => {
      dispatch(addMatch(user.id))
    }, 200)
  }
  const onClickReject = () => {
    const target = animationRef.current
    target?.classList.add(styles.swipeLeft)
    timeoutRef.current = setTimeout(() => {
      dispatch(addReject(user.id))
    }, 200)
  }

  useUnmount(() => {
    if (!timeoutRef.current) return
    clearTimeout(timeoutRef.current)
  })

  const onImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const { currentTarget } = e
    currentTarget.src = dog
    setImgError(true)
  }

  return (
    <div className={styles.profileCard} ref={animationRef}>
      <div className={styles.imgContainer}>
        <img className={cx({ [styles.imgError]: imgError })} src={imgSrc} alt={name} onError={onImgError} />
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
