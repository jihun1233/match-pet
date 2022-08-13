import { Link } from 'react-router-dom'
import styles from './home.module.scss'
// TODO: PreviewCard -> 글로벌 컴포넌트 만들기
// TODO: PreviewCardContainer만들기 -> 홈페이지의 각 리스트 미리보기
// TODO: Preview들 상단에 바로가기 버튼으로 클릭 시 해당페이지 라우팅

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.summary}>
        <h2>매칭 가능한 유저</h2>
        <Link to='matching'>바로가기</Link>
        <hr />
        <p>매칭 가능한 유저가 없습니다</p>
      </div>
      <div className={styles.summary}>
        <h2>새로운 매치!</h2>
        <Link to='match-list'>바로가기</Link>
        <hr />
        <p>새로운 매치가 없습니다</p>
      </div>
      <div className={styles.summary}>
        <h2>거절목록</h2>
        <Link to='reject-list'>바로가기</Link>
        <hr />
        <p>거절 내용이 없습니다</p>
      </div>
    </div>
  )
}

export default Home
