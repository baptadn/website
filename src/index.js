import React from 'react';
import ReactDOM  from 'react-dom';
import {Router} from 'react-router';
import { browserHistory } from 'react-router'
import routes from './routes';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/index';
import thunkMiddleware from 'redux-thunk';

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(
      thunkMiddleware,
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
