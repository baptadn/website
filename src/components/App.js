import React, { Component } from 'react';
import Menu from './menu';
import Styles from '../styles/main.scss';

export default class App extends Component {
  componentWillMount() {
    this.props.loadPosts()
  }

  render() {
    return (
      <div>
        <Menu />
        <div id="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
