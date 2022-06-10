import { getUsers, setUsers, getPage, increasePage } from 'states/match'
import { useAppDispatch, useAppSelector } from 'hooks'

import styles from './matching.module.scss'
import ProfileCard from './ProfileCard'
import { getUsersApi } from 'services/match'
import { useQuery } from 'react-query'
import Loading from 'components/Loading'

const Matching = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(getUsers)
  const page = useAppSelector(getPage)

  const { isLoading } = useQuery('getUsers', () => getUsersApi(page), {
    enabled: users.length === 0,
    onSuccess: (res) => {
      dispatch(setUsers(res))
      dispatch(increasePage())
    },
  })

  if (users.length === 0) return null

  if (isLoading) return <Loading />

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
