import { useEffect } from 'react'
import { getUsers, getMatches, getRejects, setUsers, getPage, increasePage } from 'states/match'
import { useAppDispatch, useAppSelector } from 'hooks'
import store from 'store'

import styles from './match.module.scss'
import ProfileCard from './ProfileCard'
import { getUsersApi } from 'services/match'
import { useQuery } from 'react-query'

const Match = () => {
  const dispatch = useAppDispatch()
  const users = useAppSelector(getUsers)
  const matches = useAppSelector(getMatches)
  const rejects = useAppSelector(getRejects)
  const page = useAppSelector(getPage)

  const { data, isLoading } = useQuery('getUsers', () => getUsersApi(page), {
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

export default Match
