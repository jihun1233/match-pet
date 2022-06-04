import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Match from './Match'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Match />} />
        <Route path='match-list' />
        <Route path='reject-list' />
        <Route path='*' element={<div>not found!</div>} />
      </Route>
    </Routes>
  )
}

export default App
