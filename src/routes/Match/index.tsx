import { useEffect } from 'react'
import { getUsers, getMatches, getRejects, setUsers } from 'states/match'
import { useAppDispatch, useAppSelector } from 'hooks'
import store from 'store'

import styles from './match.module.scss'
import ProfileCard from './ProfileCard'
import { getUsersApi } from 'services/match'

const Match = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(getUsers)
  const matches = useAppSelector(getMatches)
  const rejects = useAppSelector(getRejects)

  useEffect(() => {
    if (store.get('match-pet-users')) return
    getUsersApi().then((res) => {
      dispatch(setUsers(res))
    })
  }, [dispatch])

  if (users.length === 0) return null

  return (
    <div className={styles.match}>
      <ul>
        {users.map((user) => (
          <li key={`user-list-${user.id}`}>
            <ProfileCard user={user} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Match
