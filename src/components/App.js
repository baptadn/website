import React, { Component } from 'react';
import Router from 'react-router';
import Menu from './Menu';

import Styles from '../styles/main.scss';

var { RouteHandler } = Router;

export default class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div id="container">
          <RouteHandler data={this.props.data}/>
        </div>
      </div>
    );
  }
}
