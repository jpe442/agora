import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Modal from 'react-modal';
// import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import SignupContainer from '../session/signup_container';
import LoginContainer from '../session/login_container'




export default ({ currentUser, logout, clearSessionErrors, toggleLoginModal, toggleSignUpModal, openSignUpModal, openLoginModal }) => {

  const clearSignUpToggle = () => {
    toggleSignUpModal();
    clearSessionErrors();
  }

  const clearLoginToggle = () => {
    toggleLoginModal();
    clearSessionErrors();
  }

  const display = currentUser ? (
    <div className="welcome">
      <div className= "userThumb">{currentUser.username}</div>
      <div className="authlink" onClick={logout}>Exit Agora</div>
    </div>
  ) : (
      <div className="authlinks">
        <div className="authlink" onClick={toggleSignUpModal}>
          Sign Up
        </div> 
        <div className="authlink" onClick={toggleLoginModal}>
          Login
        </div> 
        
        <Modal
          className="authModal"
          isOpen={openSignUpModal}
          onRequestClose={clearSignUpToggle}
          >
          <div className="cancelbtn" onClick={clearSignUpToggle}>X</div>
          <SignupContainer />
        </Modal>
        <Modal
          className="authModal"
          isOpen={openLoginModal}
          onRequestClose={clearLoginToggle}
        >
          <div className="cancelbtn" onClick={clearLoginToggle}>X</div>
          <LoginContainer />
        </Modal>
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