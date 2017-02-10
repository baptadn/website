import React from 'react'
import {connect} from 'react-redux'
import Projects from './../components/pages/Projects'

const mapStateToProps = state => {
  return {
    posts: state.posts.entities,
  }
}

export default connect(mapStateToProps, null)(Projects)
