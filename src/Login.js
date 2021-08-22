import { useState } from 'react'
import useSecurity from './useSecurity'

export default () => {
  const { login } = useSecurity()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  return (
    <div>
      <h1>Login page</h1>
      <p>You need to log in.(hint: try andrew/password)</p>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        name="username"
        value={username}
        onChange={(evt) => setUsername(evt.target.value)}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        name="password"
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
      />
      <br />
      <button onClick={() => login(username, password)}>Login</button>
    </div>
  )
}
