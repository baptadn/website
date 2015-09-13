import AppDispatcher from '../dispatchers/AppDispatcher.js';
import {LOGIN_USER, LOGOUT_USER} from '../constants/LoginConstants.js';

export default {
  loginUser: (user) => {
    AppDispatcher.dispatch({
      actionType: LOGIN_USER,
      user: user
    });
  },

  logoutUser: () => {
    AppDispatcher.dispatch({
      actionType: LOGOUT_USER
    });
  }
}
