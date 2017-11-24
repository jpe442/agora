import React from 'react';
import { Link, NavLink } from 'react-router-dom';


export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className="welcome">
      <div className="userThumb">{currentUser.username}</div>
      <div className="authlink" onClick={logout}>Exit Agora</div>
    </div>
  ) : (
      <div className="authlinks">

        <NavLink className="authlink" to="/signup">
          Sign Up
        </NavLink> 
        <NavLink className="authlink" to="/login">
          Login
        </NavLink>

      </div>
    );
  return (
    <header className="nav-bar">
      <h2 className="logo">Agora</h2>
      <div>
        {display}
      </div>
    </header>
  )
}