import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Matching from './Matching'
import MatchList from './MatchList'
import RejectList from './RejectList'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Matching />} />
        <Route path='match-list' element={<MatchList />} />
        <Route path='reject-list' element={<RejectList />} />
        <Route path='*' element={<div>not found!</div>} />
      </Route>
    </Routes>
  )
}

export default App
