import { useAuth0 } from '@auth0/auth0-react'

export default function Profile() {
  const { user, isAuthenticated } = useAuth0()

  if (!isAuthenticated) {
    return <div>You are not logged in</div>
  }

  return isAuthenticated && user ? (
    <div>
      <h1>My Profile</h1>
      <img src={user.picture} alt='' />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  ) : (
    <div>Authentication failed</div>
  )
}
