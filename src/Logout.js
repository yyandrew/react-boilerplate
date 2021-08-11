import useSecurity from './useSecurity'

function Logout() {
  const { logout } = useSecurity()
  return <button onClick={logout}>Logout</button>
}

export default Logout
