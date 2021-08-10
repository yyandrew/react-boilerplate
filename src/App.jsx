import React, { useState } from 'react'
import Important from './Important'
import Alert from './Alert'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import './App.css'

function App() {
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [confirmMessage, setConfirmMessage] = useState()
  const [confirmCallback, setConfirmCallback] = useState()

  return (
    <div className="App">
      <BrowserRouter
        getUserConfirmation={(message, callback) => {
          setConfirmMessage(message)
          setConfirmCallback(() => callback)
          setConfirmOpen(true)
        }}
      >
        <Alert
          open={confirmOpen}
          title="Leave page?"
          message={confirmMessage}
          onOk={() => {
            confirmCallback(true)
            setConfirmOpen(false)
          }}
          onCancel={() => {
            confirmCallback(false)
            setConfirmOpen(false)
          }}
        ></Alert>
        <Switch>
          <Route path="/important">
            <Important />
          </Route>
          <div>
            <h1>Home page</h1>
            <Link to="/important">Go to important page</Link>
          </div>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
