import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout, clearSessionErrors } from '../../actions/session_actions';
import { toggleLoginModal, toggleSignUpModal, toggleQuestionModal } from '../../actions/ui_actions'
import { createQuestion } from '../../actions/question_actions'

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  openLoginModal: state.ui.openLoginModal,
  openSignUpModal: state.ui.openSignUpModal,
  openQuestionModal: state.ui.openQuestionModal,
});

const mapDispatchToProps = (dispatch) => ({
  clearSessionErrors: () => dispatch(clearSessionErrors()),
  logout: () => dispatch(logout()),
  toggleLoginModal: () => dispatch(toggleLoginModal()),
  toggleSignUpModal: () => dispatch(toggleSignUpModal()),
  toggleQuestionModal: () => dispatch(toggleQuestionModal()),
  createQuestion: (question) => dispatch(createQuestion(question)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);