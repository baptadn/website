import React, { Component } from 'react';
import Router from 'react-router';
import NProgress from 'nprogress';
import Parse from 'parse';

var { Link } = Router;

export default class Projects extends Component {

  static fetchData() {
    return new Parse.Query(Parse.Object.extend('Post')).containedIn('type', ['iot', 'dev']).descending('displayDate').find();
  }

  componentDidMount() {
    NProgress.done();
  }

  render() {
    return (
      <div>
        <h1>Projects</h1>

        <h2>IoT</h2>
        {this.props.data.filter((post) => post.attributes.type === 'iot').map((post) =>
            <p><Link to="post" params={{slug: post.attributes.slug}}>{post.attributes.title}</Link></p>
        )}

        <h2>Dev.</h2>
        {this.props.data.filter((post) => post.attributes.type === 'dev').map((post) =>
            <p><Link to="post" params={{slug: post.attributes.slug}}>{post.attributes.title}</Link></p>
        )}
      </div>
    );
  }
}
