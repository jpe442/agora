import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <h3>Welcome {currentUser.username}!</h3>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
      <div className="authlinks">
        <Link className="authlink" to="/signup">Sign Up</Link> 
        <Link className="authlink" to="/login">Log In</Link>
      </div>
    );
  return (
    <header className="nav-bar">
      <h1 className="logo">Agora</h1>
      <div>
        {display}
      </div>
    </header>
  )
}