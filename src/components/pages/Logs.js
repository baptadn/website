import React, { Component } from 'react';
import Router from 'react-router';

var { Link, RouteHandler } = Router;

export default class Logs extends Component {

  render() {
    return (
      <div id="logs">
        <h1>Logs</h1>
        <h2><Link to="movies">Movies seen</Link></h2>
        <h2><Link to="books">Books read</Link></h2>
        <h2><Link to="run">Last run</Link></h2>
        <RouteHandler data={this.props.data}/>
      </div>
    );
  }
}
