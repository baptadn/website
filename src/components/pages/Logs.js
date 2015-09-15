import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';

export default class Logs extends Component {

  render() {
    return (
      <div id="logs">
        <h1>Logs</h1>
        <h2><Link activeClassName="active" to={'/logs/run'}>Last run</Link></h2>
        <h2><Link activeClassName="active" to={'/logs/movies'}>Movies seen</Link></h2>
        <h2><Link activeClassName="active" to={'/logs/books'}>Books read</Link></h2>
        { this.props.children }
      </div>
    );
  }
}
