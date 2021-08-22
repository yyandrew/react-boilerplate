import './App.css'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Search from './Search'
import CancelableSearch from './CancelableSearch'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/cancelableSearch">
            <CancelableSearch />
          </Route>
          <Route>
            <ul>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/cancelableSearch">
                  <CancelableSearch />
                </Link>
              </li>
            </ul>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
