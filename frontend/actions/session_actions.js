import * as SessionAPIUtil from "../util/session_api_util"

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

// thunks

export const login = (user) => dispatch => (
  SessionAPIUtil.login(user)
  .fail(err => (dispatch(receiveErrors(err.responseJSON))))
  .then(user => (dispatch(receiveCurrentUser(user))))
);


export const logout = () => (
  SessionAPIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);


export const signup = (user) => dispatch => (
  SessionAPIUtil.signup(user)
   .fail(err => (dispatch(receiveErrors(err.responseJSON))))
  // .fail(err => console.log(err))
  .then(user => (dispatch(receiveCurrentUser(user))))
);

// reg actions

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});
