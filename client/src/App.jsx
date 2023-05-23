import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Auth from './pages/auth'
import Login from './pages/login'
import Post from './pages/post'


import CreatePost from './pages/CreatePost'


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createpost' element={<CreatePost />} />
        <Route path='/post' element={<Post />} />


      </Routes>
    </Router>
    </>
  )
}

export default App
