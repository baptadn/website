import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import NProgress from 'nprogress';
import Parse from 'parse';

export default class Projects extends Component {

  constructor() {
    super();
    this.state = {posts: []};
  }

  fetchData() {
    var self = this;
    new Parse.Query(Parse.Object.extend('Post')).containedIn('type', ['iot', 'dev']).descending('displayDate').find().then((data) => {
      self.setState({posts: data});
      NProgress.done();
    });
  }

  componentDidMount() {
    this.fetchData();
    NProgress.start();
  }

  render() {
    return (
      <div>
        <h1>Projects</h1>

        <h2>IoT</h2>
        {this.state.posts.filter((post) => post.attributes.type === 'iot').map((post) =>
            <p><Link to={`/post/${post.attributes.slug}`}>{post.attributes.title}</Link></p>
        )}

        <h2>Dev.</h2>
        {this.state.posts.filter((post) => post.attributes.type === 'dev').map((post) =>
            <p><Link to={`/post/${post.attributes.slug}`}>{post.attributes.title}</Link></p>
        )}
      </div>
    );
  }
}
