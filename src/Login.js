import React, { useState } from "react";
import useSecurity from "./useSecurity";

function Login() {
  const { login } = useSecurity();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <h1>Login Page</h1>
      <p>You need to log in.</p>
      <label htmlFor="">Username:</label>
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
  );
}

export default Login;
