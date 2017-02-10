import React, { Component } from 'react';
import Parse from 'parse';
import NProgress from 'nprogress';

export default class Movies extends Component {

  constructor() {
    super();
    this.state = {movies: [], dataFetched: false};
  }

  fetchData() {
    var self = this;
    new Parse.Query(Parse.Object.extend('Movie')).descending('displayDate').find().then((data) => {
      self.setState({movies: data, dataFetched: false});
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
         {this.state.movies.map((movie, i) =>
             <p key={i}>
               <a key={i} target="_blank" href={movie.attributes.url}>{movie.attributes.title}</a> {Object.keys(new Int8Array(movie.attributes.rank)).map((data, i) =>
                <small key={i}>★</small>
               )}
             </p>
         )}
      </div>
    );
  }
}
