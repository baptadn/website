import React, { Component } from 'react';

export default class About extends Component {

  render() {
    return (
      <div>
        <h1>About</h1>
        <section>
          <p><b>Baptiste Adrien</b> - web developer - work at <a href="http://jolicode.com">@jolicode</a>.</p>
          <p>love PHP, JS, IoT, running & ti punch.</p>
          <p><a href="mailto:badrien@jolicode.com">badrien@jolicode.com</a> - <a href="http://twitter.com/shinework">twitter</a> - <a href="http://github.com/shinework">github</a></p>
          <p>this website is <a href="http://github.com/shinework/website">open source</a> and built with react.</p>
        </section>
      </div>
    );
  }
}
