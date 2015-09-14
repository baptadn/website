import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import Parse from 'parse';
import NProgress from 'nprogress';
import moment from 'moment';

export default class Blog extends Component {

  constructor() {
    super();
    this.state = {posts: []};
  }

  fetchData() {
    var self = this;
    new Parse.Query(Parse.Object.extend('Post')).equalTo('type', 'blog').descending('displayDate').find().then((data) => {
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
        <h1>Blog</h1>
        <h2>2015</h2>
         {this.state.posts.map((post) =>
             <p><b>{moment(post.attributes.displayDate).format("DD/MM")}</b> > <Link to={`/post/${post.attributes.slug}`}>{post.attributes.title}</Link></p>
         )}
      </div>
    );
  }
}
