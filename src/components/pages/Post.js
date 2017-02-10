import React  from 'react'
import Remarkable from 'remarkable'
import moment from 'moment'

var md = new Remarkable()

const Post = props => {
  if (props.post) {
    return (
      <div>
        <h1>{props.post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.post.video}}></div>
        <div dangerouslySetInnerHTML={{__html: md.render(props.post.content) }}></div>
        <small>Last update: {moment(props.post.updatedAt).format("DD/MM/YY")}</small>
      </div>
    )
  } else {
    return <div></div>
  }
}

export default Post
