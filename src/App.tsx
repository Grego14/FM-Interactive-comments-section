import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Nav from './components/Nav'
import Profile from './components/Profile'

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
