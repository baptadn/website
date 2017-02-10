import React, { Component } from 'react';
import { Link } from 'react-router';
import NProgress from 'nprogress';
import moment from 'moment';
import firebase from './../../firebase';

const Blog = props => {
  return (
    <div>
      <h1>Blog</h1>
      <h2>2015</h2>
       {props.posts.filter(post => post.type === 'blog').map((post, i) =>
           <p key={i}><b>{moment(post.displayDate.date).format("DD/MM")}</b> > <Link to={`/post/${post.slug}`}>{post.title}</Link></p>
       )}
    </div>
  )
}

export default Blog
