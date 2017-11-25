import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { signup, login, logout } from '../../actions/session_actions';
import { toggleLoginModal, toggleSignUpModal } from '../../actions/ui_actions'

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  openLoginModal: state.ui.openLoginModal,
  openSignUpModal: state.ui.openSignUpModal,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
  toggleLoginModal: () => dispatch(toggleLoginModal()),
  toggleSignUpModal: () => dispatch(toggleSignUpModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);