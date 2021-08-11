import React, { useState } from 'react'
import useSecurity from './useSecurity'

function Login() {
  const { login } = useSecurity()
  const [username, setUsername] = useState()
  const [password, setPasswordd] = useState()

  return (
    <div>
      <h1>Login Page</h1>
      <p>You need to log in.(hint: try fred/password)</p>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(evt) => setUsername(evt.target.value)}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="pasword"
        value={password}
        onChange={(evt) => setPasswordd(evt.target.value)}
      />
      <br />
      <button onClick={() => login(username, password)}>Login</button>
    </div>
  )
}

export default Login
