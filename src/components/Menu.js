import React, { Component } from 'react';
import { Router, Route, Link  } from 'react-router';

var { IndexLink } = Router;

export default class Menu extends Component {

  render() {
    return (
      <aside>
        <h1>Shinework</h1>
        <ul>
          <li><span><Link onlyActiveOnIndex={true} to={`/`} activeClassName="active">projects</Link></span></li>
          <li><span><Link to={`/blog`} activeClassName="active">blog</Link></span></li>
          <li><span><Link to={`/talks`} activeClassName="active">talks</Link></span></li>
          <li><span><Link to={`/logs`} activeClassName="active">logs</Link></span></li>
          <li><span><Link to={`/about`} activeClassName="active">about</Link></span></li>
        </ul>
      </aside>
    );
  }
}
