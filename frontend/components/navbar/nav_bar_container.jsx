import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { signup, login, logout } from '../../actions/session_actions';
import { toggleModal } from '../../actions/ui_actions'

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  openModal: state.ui.openModal,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
  toggleModal: () => dispatch(toggleModal())

})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);