import firebase from './../firebase'
import {LOAD_POSTS} from './../constants/types'
import NProgress from 'nprogress';

export const loadPosts = () => {
  return dispatch => {
    NProgress.start()
    firebase.database().ref('/posts').once('value').then(snapshot => {
      dispatch({
        type: LOAD_POSTS,
        payload: snapshot.val(),
      })

      NProgress.done()
    })
  }
}
