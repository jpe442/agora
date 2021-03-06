import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Modal from 'react-modal';
// import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import SignupContainer from '../session/signup_container';
import LoginContainer from '../session/login_container';
import NavQuestionBtn from './nav_question_btn';
import SearchBar from './search_bar';

export default ({ currentUser, logout, clearSessionErrors, clearSearchResults, toggleLoginModal, 
  toggleSignUpModal, toggleQuestionModal,openSignUpModal, openLoginModal, 
  openQuestionModal, createQuestion, ownProps, searchQuestions}) => {

  const clearSignUpToggle = () => {
    toggleSignUpModal();
    clearSessionErrors();
  }

  const clearLoginToggle = () => {
    toggleLoginModal();
    clearSessionErrors();
  }

  const handleLogout = () => {
    logout();
    clearSearchResults();
  }

  const display = currentUser ? (
    <div className="nav-bar-login">
      <NavQuestionBtn 
        ownProps={ownProps}
        currentUser={currentUser}
        createQuestion={createQuestion}
        openQuestionModal={openQuestionModal}
        toggleQuestionModal={toggleQuestionModal}
       />
      <SearchBar 
        searchQuestions={searchQuestions}
        ownProps={ownProps}
      />
      <div className="welcome">
        <div className= "userThumb">{currentUser.username}</div>
        <div className="authlink" onClick={handleLogout}>Exit Agora</div>
      </div>
    </div>
  ) : (
      <div className="authlinks">
        <div className="authlink" onClick={toggleSignUpModal}>
          Register
        </div> 
        <div className="authlink" onClick={toggleLoginModal}>
          Enter Agora
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
      <div className="nav-display">
        {display}
      </div>
    </header>
  )
}