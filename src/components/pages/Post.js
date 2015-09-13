import React, { Component } from 'react';
import Remarkable from 'remarkable';
import Parse from 'parse';
import NProgress from 'nprogress';

var md = new Remarkable();

export default class Post extends Component {

  static fetchData(params) {
    return new Parse.Query(Parse.Object.extend('Post')).equalTo('slug', params.slug).first();
  }

  componentDidMount() {
    NProgress.done();

    // Enable highlight
    var domNode = React.findDOMNode(this);
    var nodes = domNode.querySelectorAll('pre code');
    for (var i = 0; i < nodes.length; i=i+1) {
      hljs.highlightBlock(nodes[i]);
    }
  }

  render() {
    var content = md.render(this.props.data.attributes.content);
    return (
      <div>
        <h1>{this.props.data.attributes.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: this.props.data.attributes.video}}></p>
        <p dangerouslySetInnerHTML={{ __html: content}}></p>
      </div>
    );
  }
}
