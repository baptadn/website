import React, { Component } from 'react';
import {Link} from 'react-router';

const Projects = props =>
  <div>
    <h1>Projects</h1>

    <h2>IoT</h2>
    {props.posts.filter(post => post.type === 'iot').map((post, i) =>
        <p key={i}><Link to={`/post/${post.slug}`}>{post.title}</Link></p>
    )}

    <h2>Dev.</h2>
    {props.posts.filter(post => post.type === 'dev').map((post, i) =>
        <p key={i}><Link to={`/post/${post.slug}`}>{post.title}</Link></p>
    )}
  </div>

export default Projects
