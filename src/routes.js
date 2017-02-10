import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppContainer from './containers/AppContainer';
import About from './components/pages/About';
import Logs from './components/pages/Logs';
import Talks from './components/pages/Talks';
import ProjectsContainer from './containers/ProjectsContainer';
import BlogContainer from './containers/BlogContainer';
import PostContainer from './containers/PostContainer';
import Run from './components/pages/Run';
import NotFound from './components/pages/NotFound';

var routes = (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={ProjectsContainer} />
    <Route path="blog" component={BlogContainer} />
    <Route path="projects" component={ProjectsContainer} />
    <Route path="/post/:slug" component={PostContainer} />
    <Route path="talks" component={Talks} />
    <Route path="logs" component={Logs}>
      <IndexRoute component={Run} />
      <Route path="run" component={Run} />
      {/*<Route path="movies" component={Movies} />*/}
      {/*<Route path="books" component={Books} />*/}
    </Route>
    <Route path="about" component={About} />
    <Route path="*" component={NotFound}/>
  </Route>
)

export default routes
