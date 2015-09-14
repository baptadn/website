import React, { Component } from 'react';
import Router from 'react-router';
import Menu from './menu';

import Styles from '../styles/main.scss';

export default class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div id="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
