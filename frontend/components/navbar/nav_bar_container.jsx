import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout, clearSessionErrors } from '../../actions/session_actions';
import { toggleLoginModal, toggleSignUpModal, toggleQuestionModal } from '../../actions/ui_actions'
import { createQuestion, clearSearchResults, searchQuestions } from '../../actions/question_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  console.log("above this line is what ownProps is pointing at in navbarcontainer")
  return {
  currentUser: state.session.currentUser,
  openLoginModal: state.ui.openLoginModal,
  openSignUpModal: state.ui.openSignUpModal,
  openQuestionModal: state.ui.openQuestionModal,
  ownProps: ownProps,
}};

const mapDispatchToProps = (dispatch) => ({
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  clearSearchResults: () => dispatch(clearSearchResults()),
  logout: () => dispatch(logout()),
  toggleLoginModal: () => dispatch(toggleLoginModal()),
  toggleSignUpModal: () => dispatch(toggleSignUpModal()),
  toggleQuestionModal: () => dispatch(toggleQuestionModal()),
  createQuestion: (question) => dispatch(createQuestion(question)),
  searchQuestions: (query) => dispatch(searchQuestions(query)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));