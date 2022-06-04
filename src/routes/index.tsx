import { useEffect, useState } from 'react'
import { getImage } from 'services'
import { IData } from 'types/image'
import styles from './routes.module.scss'

const App = () => {
  const [hits, setHits] = useState<IData[]>([])
  useEffect(() => {
    getImage().then((res) => setHits(res.data.hits))
  }, [])
  return (
    <div className={styles.app}>
      {hits.map((hit) => (
        <img src={hit.webformatURL} alt='test' key={`img-key-${hit.id}`} />
      ))}
    </div>
  )
}

export default App
