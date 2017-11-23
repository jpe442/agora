import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPIUtil from "./util/session_api_util"
import configureStore from "./store/store"

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = SessionAPIUtil.signup;
  window.logout = SessionAPIUtil.logout;
  window.login = SessionAPIUtil.login;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Agora</h1>, root);
});