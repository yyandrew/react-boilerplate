import { useState } from 'react'
import Ticker from './Ticker'
import SimpleTicker from './SimpleTicker'
import IntervalTicker from './IntervalTicker'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

function App() {
  const [hidden, setHidden] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/simple">
            <SimpleTicker />
          </Route>
          <Route path="/interval">
            <IntervalTicker />
          </Route>
          <Route path="/clocks">
            <h1>Clocks</h1>
            <button onClick={() => setHidden((h) => !h)}>
              {hidden ? 'Show' : 'Hide'}
            </button>
            {hidden || <Ticker />}
          </Route>
          <ul>
            <li>
              <Link to="/simple">Simple Ticker</Link>
            </li>
            <li>
              <Link to="/interval">Interval Ticker</Link>
            </li>
            <li>
              <Link to="/clocks">Clocks</Link>
            </li>
          </ul>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
