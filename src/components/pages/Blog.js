import React, { Component } from 'react';
import Router from 'react-router';
import Parse from 'parse';
import NProgress from 'nprogress';
import moment from 'moment';

var { Link } = Router;

export default class Blog extends Component {

  static fetchData() {
    return new Parse.Query(Parse.Object.extend('Post')).equalTo('type', 'blog').descending('displayDate').find();
  }

  componentDidMount() {
    NProgress.done();
  }

  render() {
    return (
      <div>
        <h1>Blog</h1>

        <h2>2015</h2>
         {this.props.data.map((post) =>
             <p><b>{moment(post.attributes.displayDate).format("DD/MM")}</b> > <Link to="post" params={{slug: post.attributes.slug}}>{post.attributes.title}</Link></p>
         )}
      </div>
    );
  }
}
