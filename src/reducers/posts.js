import {LOAD_POSTS} from '../constants/types'

const getInitialState = () => {
  return {
    entities: []
  }
}

export default (state = getInitialState(), action) => {
  if (!action) return state

  switch (action.type) {
    case LOAD_POSTS:
      return {...state, entities: action.payload}
    default:
      return state
  }
}

export var getPostBySlug = (state, slug) => {
  const posts = state.posts.entities.filter(post => {
    return post.slug === slug
  })

  return posts[0]
}
