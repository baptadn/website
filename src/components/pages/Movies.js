import React, { Component } from 'react';
import Router from 'react-router';
import Parse from 'parse';
import NProgress from 'nprogress';
import moment from 'moment';

export default class Movies extends Component {

  static fetchData() {
    return new Parse.Query(Parse.Object.extend('Movie')).descending('displayDate').find();
  }

  componentDidMount() {
    NProgress.done();
  }

  render() {
    return (
      <div>
        <h2>2015</h2>
         {this.props.data.map((post) =>
             <p>
               <a target="_blank" href={post.attributes.url}>{post.attributes.title}</a> {Object.keys(new Int8Array(post.attributes.rank)).map(() =>
                <small>★</small>
               )}
             </p>
         )}
      </div>
    );
  }
}
