import React, { Component } from 'react';
import Router from 'react-router';
import Parse from 'parse';
import NProgress from 'nprogress';

export default class Books extends Component {

  constructor() {
    super();
    this.state = {books: []};
  }

  fetchData() {
    var self = this;
    new Parse.Query(Parse.Object.extend('Book')).descending('displayDate').find().then((data) => {
      self.setState({books: data});
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
        <h2>2015</h2>
         {this.state.books.map((book, i) =>
             <p key={i}><a target="_blank" href={book.attributes.url}>{book.attributes.title}</a></p>
         )}
      </div>
    );
  }
}
