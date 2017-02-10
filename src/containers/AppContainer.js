import React from 'react'
import {connect} from 'react-redux'
import App from './../components/App'
import {loadPosts} from './../actions/posts'


const mapDispatchToProps = {
  loadPosts,
}

export default connect(null, mapDispatchToProps)(App)
