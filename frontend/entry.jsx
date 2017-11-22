import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionAPIUtil from "./util/session_api_util"

document.addEventListener('DOMContentLoaded', () => {
  window.signup = SessionAPIUtil.signup;
  window.logout = SessionAPIUtil.logout;
  window.login = SessionAPIUtil.login;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Agora</h1>, root);
});