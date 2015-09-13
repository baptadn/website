import React from 'react';
import Router from 'react-router';
import routes from './routes';
import Parse from 'parse';
import NProgress from 'nprogress';

var EventEmitter = require('events').EventEmitter;

Parse.initialize("YzeZuX08nPJXmygeKw3x2ENYiLfYZxiqMmgn3vXZ", "CbcCyivzIMw5syWlvE9MLQSZGSrCdI1p8YLj3ZjT");

function fetchData(routes, params) {
  var data = {};
  return Promise.all(routes
      .filter(route => route.handler.fetchData)
      .map(route => {
        NProgress.start();
        return route.handler.fetchData(params).then(d => {data = d;});
      })
  ).then(() => data);
}

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  fetchData(state.routes, state.params).then((data) => {
    React.render(<Handler data={data}/>, document.getElementById('app'));
  });
});
