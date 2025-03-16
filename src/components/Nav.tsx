import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton'

export default function Nav() {
  const { isAuthenticated } = useAuth0()

  return (
    <>
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <Link to='/' className='logo'>ICS</Link>
          </li>
          <li className='nav-item'>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </li>
        </ul>
      </nav>
    </>
  )
}
