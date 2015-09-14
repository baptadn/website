import React from 'react';
import ReactDOM  from 'react-dom';
import { Router, Route, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import NProgress from 'nprogress';
import Parse from 'parse';
import routes from './routes';
const { object } = React.PropTypes

Parse.initialize("YzeZuX08nPJXmygeKw3x2ENYiLfYZxiqMmgn3vXZ", "CbcCyivzIMw5syWlvE9MLQSZGSrCdI1p8YLj3ZjT");

let history = createBrowserHistory();

ReactDOM.render(
  <Router history={history} routes={routes} data={{test: 1}}/>,
  document.getElementById('app')
);
