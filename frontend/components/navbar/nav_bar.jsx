import React from 'react';
import { Link, NavLink } from 'react-router-dom';


export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <h3 className="welcome">{currentUser.username} is logged in</h3>
      <button onClick={logout}>Logout</button>
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