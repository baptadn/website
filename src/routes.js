import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';

import App from './components/App';
import About from './components/pages/About';
import Logs from './components/pages/Logs';
import Talks from './components/pages/Talks';
import Projects from './components/pages/Projects';
import Blog from './components/pages/Blog';
import Post from './components/pages/Post';
import Movies from './components/pages/Movies';
import Books from './components/pages/Books';
import Run from './components/pages/Run';
import NotFound from './components/pages/NotFound';
import Parse from 'parse';

function redirectToChild(location, replaceWith) {
  replaceWith(null, '/logs/run');
}

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Projects} />
    <Route path="blog" component={Blog} />
    <Route path="projects" component={Projects} />
    <Route path="/post/:slug" component={Post} />
    <Route path="talks" component={Talks} />
    <Route path="logs" component={Logs}>
      <IndexRoute onEnter={redirectToChild} />
      <Route path="movies" component={Movies} />
      <Route path="run" component={Run} />
      <Route path="books" component={Books} />
    </Route>
    <Route path="about" component={About} />
  </Route>
);

export default routes;
