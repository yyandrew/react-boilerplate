import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Private1 from './Private1'
import Private2 from './Private2'
import SecurityProvider from './SecurityProvider'
import SecurityRoute from './SecurityRoute'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SecurityProvider>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <SecurityRoute path="/private1">
              <Private1 />
            </SecurityRoute>
            <SecurityRoute path="/private2">
              <Private2 />
            </SecurityRoute>
          </Switch>
        </SecurityProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
