import React, { Component } from 'react';
import Router from 'react-router';
import MediaQuery from 'react-responsive';

var { Link, RouteHandler } = Router;

export default class Menu extends Component {

  render() {
    return (
      <aside>
        <MediaQuery query='(max-width: 900px)'>
          <h1>Shnk</h1>
        </MediaQuery>
        <MediaQuery query='(min-width: 900px)'>
          <h1>Shinework</h1>
        </MediaQuery>
        <ul>
          <li><span><Link to="blog">blog</Link></span></li>
          <li><span><Link to="projects">projects</Link></span></li>
          <li><span><Link to="talks">talks</Link></span></li>
          <li><span><Link to="logs">logs</Link></span></li>
          <li><span><Link to="about">about</Link></span></li>
        </ul>
      </aside>
    );
  }
}
