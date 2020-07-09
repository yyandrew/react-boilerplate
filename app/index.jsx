import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'

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


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
