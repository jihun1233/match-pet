import { useAppSelector } from 'hooks'
import { getMatches } from 'states/match'
import Item from './Item'
import styles from './matchList.module.scss'

const MatchList = () => {
  const matches = useAppSelector(getMatches)

  return (
    <div>
      <ul className={styles.matchList}>
        {matches.map((match) => (
          <Item match={match} key={`match-item-${match.user.id}`} />
        ))}
      </ul>
    </div>
  )
}

export default MatchList
