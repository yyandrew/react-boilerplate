import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux'

let store = createStore(
  (state = 0, action) => {
    switch(action.type) {
      case 'INCREASE':
        return state + 1
      default:
        return state
    }
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// 注册一个listener
store.subscribe(() => console.log(store.getState()))

// 派发action
store.dispatch({type: 'INCREASE'})
store.dispatch({type: 'INCREASE'})
store.dispatch({type: 'INCREASE'})

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
