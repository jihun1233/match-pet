import { useAppSelector } from 'hooks'
import { getRejects } from 'states/match'
import Item from './Item'
import styles from './rejectList.module.scss'

const RejectList = () => {
  const rejects = useAppSelector(getRejects)

  return (
    <div>
      <ul className={styles.rejectList}>
        {rejects.map((user) => (
          <Item user={user} key={`reject-item-${user.id}`} />
        ))}
      </ul>
    </div>
  )
}

export default RejectList
