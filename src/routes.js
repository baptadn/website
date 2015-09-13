import React from 'react';
import Router from 'react-router';

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

var { Route, DefaultRoute, NotFoundRoute } = Router;

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Blog} />
    <Route name="blog" handler={Blog} />
    <Route name="post" path="/post/:slug" handler={Post} />
    <Route name="projects" handler={Projects} />
    <Route name="talks" handler={Talks} />
    <Route name="logs" handler={Logs}>
      <DefaultRoute handler={Movies} name="movies" />
      <Route name="run" handler={Run} />
      <Route name="books" handler={Books} />
    </Route>
    <Route name="about" handler={About} />
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

export default routes;
