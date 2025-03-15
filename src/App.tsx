import { useAuth0 } from '@auth0/auth0-react'
import './App.css'
import Login from './components/Login'
import Logout from './components/Logout'
import Profile from './components/Profile'

function App() {
  const { isAuthenticated } = useAuth0()

  return (
    <>
      <h1>
        {isAuthenticated ? 'Interactive Comments Section' : 'Welcome to ICS!'}
      </h1>

      <main>
        {isAuthenticated ? (
          <>
            <Profile />
            <Logout />
          </>
        ) : (
          <Login />
        )}
      </main>
    </>
  )
}

export default App
