import { useAuth0 } from '@auth0/auth0-react'

export default function Profile() {
  const { user, isAuthenticated } = useAuth0()

  if (!isAuthenticated) {
    return <div>No has iniciado sesión.</div>
  }

  return (
    <div>
      <h1>Profile</h1>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  )
}
