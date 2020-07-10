import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Help from './Help';
import Albums from './Albums';
import AlbumDetails from './AlbumDetails';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
          <li>
            <Link to="/albums">Albums</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/albums">
            <Albums />
          </Route>
          <Route
            path="/album/:albumId"
            render={props => <AlbumDetails {...props} />}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
