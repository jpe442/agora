import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Modal from 'react-modal';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import SignupContainer from '../session/signup_container';

export default ({ currentUser, logout, toggleModal, openModal }) => {
  
  const display = currentUser ? (
    <div className="welcome">
      <div className= "userThumb">{currentUser.username}</div>
      <div className="authlink" onClick={logout}>Exit Agora</div>
    </div>
  ) : (
      <div className="authlinks">

        <div className="authlink" onClick={toggleModal}>
          Sign Up
        </div> 
        <NavLink className="authlink" to="/login">
          Login 
        </NavLink>

        <Modal
          className="authModal"
          isOpen={openModal}
          onRequestClose={toggleModal}
          >
          <div className="cancelbtn" onClick={toggleModal}>X</div>
          {/* <AuthRoute path="/signup" component={SignupContainer} /> */}
          <SignupContainer />
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