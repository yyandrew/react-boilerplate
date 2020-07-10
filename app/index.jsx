import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/App';
import Albums from './reducers/Albums';

import mySaga from './saga';
let sagaMiddleware = createSagaMiddleware();

let store = createStore(
  Albums,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
