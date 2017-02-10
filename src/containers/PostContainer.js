import React from 'react'
import {connect} from 'react-redux'
import Post from './../components/pages/Post'
import {getPostBySlug} from './../reducers/posts'

const mapStateToProps = (state, props) => {
  return {
    post: getPostBySlug(state, props.params.slug),
  }
}

export default connect(mapStateToProps, null)(Post)
