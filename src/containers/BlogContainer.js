import React from 'react'
import {connect} from 'react-redux'
import Blog from './../components/pages/Blog'

const mapStateToProps = state => {
  return {
    posts: state.posts.entities,
  }
}

export default connect(mapStateToProps, null)(Blog)
