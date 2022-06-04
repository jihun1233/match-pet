import { getUsersApi } from 'services/match'
import Match from './Match'
import styles from './routes.module.scss'

const App = () => {
  return (
    <div className={styles.app}>
      <Match />
    </div>
  )
}

export default App
