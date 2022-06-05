import { getUsers, setUsers, getPage, increasePage } from 'states/match'
import { useAppDispatch, useAppSelector } from 'hooks'

import styles from './match.module.scss'
import ProfileCard from './ProfileCard'
import { getUsersApi } from 'services/match'
import { useQuery } from 'react-query'

const Matching = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(getUsers)
  const page = useAppSelector(getPage)

  useQuery('getUsers', () => getUsersApi(page), {
    enabled: users.length === 0,
    onSuccess: (res) => {
      dispatch(setUsers(res))
      dispatch(increasePage())
    },
  })

  if (users.length === 0) return null

  return (
    <div className={styles.match}>
      <ul>
        {users.map((user) => (
          <li className={styles.listItem} key={`user-list-${user.id}`}>
            <ProfileCard user={user} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Matching
