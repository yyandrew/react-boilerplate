import './App.css'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Search from './Search'
import CancelableSearch from './CancelableSearch'

import reducer from './reducer'
import axiosMiddleware from './axiosMiddleware'

const store = createStore(reducer, applyMiddleware(axiosMiddleware))

function App() {
  return (
    <div className="App">
      <Provider store={store}>
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
      </Provider>
    </div>
  )
}

export default App
