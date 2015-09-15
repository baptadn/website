import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Remarkable from 'remarkable';
import Parse from 'parse';
import NProgress from 'nprogress';
import moment from 'moment';

var md = new Remarkable();

export default class Post extends Component {

  constructor() {
    super();
    this.state = {post: null, content: null};
  }

  fetchData() {
    var self = this;
    new Parse.Query(Parse.Object.extend('Post')).equalTo('slug', this.props.params.slug).first().then((data) => {
      self.setState({post: data, content: md.render(data.attributes.content) });
      NProgress.done();

      // Enable highlight
      var domNode = ReactDom.findDOMNode(this);
      var nodes = domNode.querySelectorAll('pre code');
      for (var i = 0; i < nodes.length; i=i+1) {
        hljs.highlightBlock(nodes[i]);
      }
    });
  }

  componentDidMount() {
    this.fetchData();
    NProgress.start();
  }

  render() {
    if (this.state.post !== null) {
      return (
        <div>
          <h1>{this.state.post.attributes.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: this.state.post.attributes.video}}></div>
          <div dangerouslySetInnerHTML={{__html: this.state.content }}></div>
          <small>Last update: {moment(this.state.post.attributes.updatedAt).format("DD/MM/YY")}</small>
        </div>
      );
    } else {
      return (<div></div>);
    }

  }
}
